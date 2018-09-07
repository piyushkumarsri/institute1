import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PRIME_NG } from './primeng';
import { YesNoPipe } from './pipe/yesno.pipe';
import { TimesPipe } from './pipe/times.pipe';
import { components } from './components';
import { MarkdownModule } from 'ngx-markdown';
const IMPORT_EXPORT = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MarkdownModule,
  ...PRIME_NG
];

@NgModule({
  imports: IMPORT_EXPORT,
  exports: [...IMPORT_EXPORT, ...components],
  declarations: [YesNoPipe, TimesPipe, ...components]
})
export class UiKitModule { }
