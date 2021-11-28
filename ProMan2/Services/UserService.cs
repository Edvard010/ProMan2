using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using ProMan2.Dto;
using ProMan2.Model;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace ProMan2.Services
{
    public class UserService
    {
        private readonly ProManContext _context;
        private readonly IConfiguration _config;

        public UserService(ProManContext context, IConfiguration configuration)
        {
            _context = context;
            _config = configuration;
        }


        public void Register(RegisterDto register)
        {
            var user = new User
            {
                Login = register.Name,
                Password = GetHash(register.Password)
            };

            _context.Users.Add(user);
            _context.SaveChanges();
        }

        public UsernameDto UserExists(UsernameDto login)
        {
            if (!_context.Users.Any()) //jeżeli nie istnieje użytkownik-> wynik=false, przed negacja, więc if(true) jeżeli nie istnieje to zwraca to co poniżej
            {
                return null;
            }

            var user = _context.Users.SingleOrDefault(x => x.Login == login.Login); //było i nie działało: var username = _context.Users.SingleOrDefault().Login;

            return new UsernameDto
            {
                Login = user.Login
            };
        }

        public bool Login(LoginDto login)
        {
            var hash = GetHash(login.Password);

            //if (!_context.Users.Any())
            //{
            //    return null;
            //}
            

            var user = _context.Users.SingleOrDefault(x => x.Login == login.Login);
            if (user != null)
            {
                if (user.Password == hash)
                {
                    new UserDto
                    {
                        Login = user.Login,
                        Token = GenerateToken(user.Login)
                    };
                    return true;
                }
                else
                {
                    return false;
                }
            }
            else
            {
                return false;
            }
           //tu można dodać zwrócenie jakiegoś komunikatu błędu typu "
        }

        //public UserDto Login(LoginDto login)
        //{
        //    var hash = GetHash(login.Password);

        //    if (!_context.Users.Any())
        //    {
        //        return null;
        //    }


        //    var user = _context.Users.SingleOrDefault(x => x.Login == login.Login);

        //    if (user.Password == hash)
        //    {
        //        return new UserDto
        //        {
        //            Login = user.Login,
        //            Token = GenerateToken(user.Login)
        //        };
        //    }

        //    return null; //tu można dodać zwrócenie jakiegoś komunikatu błędu typu "
        //}

        private string GetHash(string password)
        {
            var algorythm = SHA256.Create();

            StringBuilder sb = new StringBuilder();
            foreach (var b in algorythm.ComputeHash(Encoding.UTF8.GetBytes(password)))
            {
                sb.Append(b.ToString("X2"));
            }

            return sb.ToString();
        }

        private string GenerateToken(string username)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes(_config.GetValue<string>("Security:SecretKey"));

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, username)
                }),
                Expires = DateTime.Now.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }
    }
}
