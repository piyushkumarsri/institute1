import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiKitModule } from '../../ui-kit/ui-kit.module';
import { SharedModule } from '../../shared/shared.module';
import * as fromContainers from './containers';

@NgModule({
  imports: [
    UiKitModule,
    SharedModule,
    RouterModule.forChild(fromContainers.routes)
  ],
  declarations: [...fromContainers.containers]
})
export class AdminModule {}
