import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowAddServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = false;
  serverNameTwoWay = '';
  username = '';
  constructor() {
    setTimeout(() => this.allowAddServer = true, 2000); // constructor immediatly fires this function, setTimeout waits 2 seconds to fire it.
  }

  ngOnInit() {
  }
onCreateServer() {
  this.serverName = true
this.serverCreationStatus = 'Server created! Name is ' + this.serverNameTwoWay;
}
onUpdateServerName(event: Event) {

this.serverNameTwoWay = (<HTMLInputElement>event.target).value;
}
resetUsername() {
  this.username = '';
}
}
