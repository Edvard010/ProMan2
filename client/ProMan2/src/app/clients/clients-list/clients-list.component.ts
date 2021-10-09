import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ClientItem } from '../client-item';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {
  clients: any;
  displayedColumns = ['number', 'name', 'email', 'phone', 'projects'];
  
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clients = this.clientService.getClients().subscribe(x => {
      this.clients = new MatTableDataSource(x);
    });
    
  }

  applyFilter(event: any) {
    const value = event.target.value;
  }
  
}
