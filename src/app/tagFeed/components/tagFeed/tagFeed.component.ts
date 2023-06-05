import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'tag-feed',
  templateUrl: './tagFeed.component.html',
})
export class TagFeedComponent implements OnInit {
  tagName: string
  apiUrl: string

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(() => {
      this.tagName = this.route.snapshot.paramMap.get('slug')
      this.apiUrl = `/articles?tag=${this.tagName}`
    })
  }
}
