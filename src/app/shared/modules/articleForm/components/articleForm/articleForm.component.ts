import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core'

import {FormGroup, FormBuilder} from '@angular/forms'
import {ArticleInputInterface} from '../../../../types/articleInput.interface'
import {BackendErrorsInterface} from '../../../../types/backendErrors.interface'

@Component({
  selector: 'article-form',
  templateUrl: './articleForm.component.html',
})
export class ArticleFormComponent implements OnInit {
  @Input('initialValues') initialValuesProps: ArticleInputInterface
  @Input('isSubmitting') isSubmittingProps: boolean
  @Input('errors') errorsProps: BackendErrorsInterface | null

  @Output('articleSubmit') articleSubmitEvent =
    new EventEmitter<ArticleInputInterface>()

  form: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(): void {
    this.form = this.fb.group({
      title: this.initialValuesProps.article.title,
      description: this.initialValuesProps.article.description,
      body: this.initialValuesProps.article.body,
      tagList: this.initialValuesProps.article.tagList.join(' '),
    })
  }

  onSubmit(): void {
    const request: ArticleInputInterface = {
      article: this.form.value,
    }
    this.articleSubmitEvent.emit(request)
  }
}
