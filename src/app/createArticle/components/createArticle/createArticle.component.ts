import {Component, OnInit} from '@angular/core'
import {Observable} from 'rxjs'
import {Store, select} from '@ngrx/store'
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors'
import {createArticleAction} from '../../store/actions/createArticle.action'
import {BackendErrorsInterface} from '../../../shared/types/backendErrors.interface'
import {ArticleInputInterface} from '../../../shared/types/articleInput.interface'

@Component({
  selector: 'create-article',
  templateUrl: './createArticle.component.html',
})
export class CreateArticleComponent implements OnInit {
  initialValues: ArticleInputInterface = {
    article: {
      title: '',
      description: '',
      body: '',
      tagList: [],
    },
  }

  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface | null>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  onSubmit(articleInput: ArticleInputInterface): void {
    console.log('On submit', articleInput)
    this.store.dispatch(createArticleAction({articleInput}))
  }
}
