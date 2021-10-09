import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../client.service';
import { ClientDetails } from './client-details';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  client: ClientDetails = new ClientDetails();

  constructor(private activateRoute: ActivatedRoute,
              private clientService: ClientService) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params.id;

    this.clientService.getDetails(id).subscribe(x => {
      this.client = x;
    });
  }

}
