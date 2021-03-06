import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ApliBtSharedModule } from 'app/shared';
import {
  ActeGestionDelaiComponent,
  ActeGestionDelaiDetailComponent,
  ActeGestionDelaiUpdateComponent,
  ActeGestionDelaiDeletePopupComponent,
  ActeGestionDelaiDeleteDialogComponent,
  acteGestionDelaiRoute,
  acteGestionDelaiPopupRoute
} from './';

const ENTITY_STATES = [...acteGestionDelaiRoute, ...acteGestionDelaiPopupRoute];

@NgModule({
  imports: [ApliBtSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    ActeGestionDelaiComponent,
    ActeGestionDelaiDetailComponent,
    ActeGestionDelaiUpdateComponent,
    ActeGestionDelaiDeleteDialogComponent,
    ActeGestionDelaiDeletePopupComponent
  ],
  entryComponents: [
    ActeGestionDelaiComponent,
    ActeGestionDelaiUpdateComponent,
    ActeGestionDelaiDeleteDialogComponent,
    ActeGestionDelaiDeletePopupComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ApliBtActeGestionDelaiModule {}
