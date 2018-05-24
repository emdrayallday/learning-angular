import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowAddServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverNameTwoWay = '';
  constructor() {
    setTimeout(() => this.allowAddServer = true, 2000); // constructor immediatly fires this function, setTimeout waits 2 seconds to fire it.
  }

  ngOnInit() {
  }
onCreateServer() {
this.serverCreationStatus = 'Server created!';
}
onUpdateServerName(event: Event) {
this.serverName = (<HTMLInputElement>event.target).value;
}
}
