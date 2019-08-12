import { NgModule } from '@angular/core';

import { ApliBtSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [ApliBtSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [ApliBtSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ApliBtSharedCommonModule {}
