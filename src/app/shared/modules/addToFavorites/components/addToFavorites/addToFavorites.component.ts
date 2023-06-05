import {Component, Input, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {addToFavoritesAction} from '../../store/actions/addToFavorites.action'

@Component({
  selector: 'add-to-favorites',
  templateUrl: './addToFavorites.component.html',
})
export class AddToFavoriteComponent implements OnInit {
  @Input('isFavorite') isFavoritesProps: boolean
  @Input('favoritesCount') favoritesCountProps: number
  @Input('articleSlug') articleSlugProps: string

  favoritesCount: number
  isFavorite: boolean

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.favoritesCount = this.favoritesCountProps
    this.isFavorite = this.isFavoritesProps
  }

  handleLike(): void {
    this.store.dispatch(
      addToFavoritesAction({
        isFavorited: this.isFavorite,
        slug: this.articleSlugProps,
      })
    )
    if (this.isFavorite) {
      this.favoritesCount = this.favoritesCount - 1
    } else {
      this.favoritesCount = this.favoritesCount + 1
    }

    this.isFavorite = !this.isFavorite
  }
}
