import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ApliBtSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [ApliBtSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [ApliBtSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ApliBtSharedModule {
  static forRoot() {
    return {
      ngModule: ApliBtSharedModule
    };
  }
}
