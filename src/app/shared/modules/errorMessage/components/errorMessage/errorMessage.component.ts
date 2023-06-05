import {Component, Input} from '@angular/core'

@Component({
  selector: 'error-message',
  template: '<div>{{messageProps}}</div>',
})
export class ErrorMessageComponent {
  @Input('message') messageProps: string = 'Something went wrong'
}
