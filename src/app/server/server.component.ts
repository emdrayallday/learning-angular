import {Component} from '@angular/core';



@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
serverId = 10;
serverStatus  = 'Offline';
constructor() {
  this.serverStatus = Math.random() > .5 ? 'online' : 'offline';
}
getStatus() {
  return this.serverStatus;
}

getColor() {
  return this.serverStatus === 'online' ? 'green' : 'red';
}

}
