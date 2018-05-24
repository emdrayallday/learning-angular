import {Component} from '@angular/core'

@Component({
  selector: 'app-warning',
  template: `
      <p>This is a warning, danger!</p>`,
styles: [`
p {
  color: red;
  background-color: mistyrose;
}
`]
})
export class WarningAlertComponent {

}
