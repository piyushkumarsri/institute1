import { NgModule } from '@angular/core';
import { UiKitModule } from '../ui-kit/ui-kit.module';
import { SharedModule } from '../shared/shared.module';
import * as fromContainers from './containers';
import * as fromComponents from './components';
import { RouterModule } from '@angular/router';





@NgModule({
  imports: [
    UiKitModule,
    SharedModule,
    RouterModule.forChild(fromContainers.routes)
  ],
  exports: [],
  declarations: [
    ...fromContainers.containers,
    ...fromComponents.components
  ]
})
export class CoreModule { }
