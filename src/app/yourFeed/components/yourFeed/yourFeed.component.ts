import {Component} from '@angular/core'

@Component({
  selector: 'your-feed',
  templateUrl: './yourFeed.component.html',
})
export class YourFeedComponent {
  apiUrl = '/articles/feed'
}
