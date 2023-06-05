import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {ArticleFormComponent} from './components/articleForm/articleForm.component'
import {ReactiveFormsModule} from '@angular/forms'
import {BackendErrorMessagesModule} from '../backendErrorMessages/backendErrorMessages.module'

@NgModule({
  imports: [CommonModule, BackendErrorMessagesModule, ReactiveFormsModule],
  declarations: [ArticleFormComponent],
  exports: [ArticleFormComponent],
})
export class ArticleFormModule {}
