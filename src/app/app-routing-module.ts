import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Bai18 } from './baitap/bai18/bai18';
import { Bai14 } from './baitap/bai14/bai14';
import { ServiceProductImageEvent } from './baitap/bai13/service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetail } from './baitap/bai13/service-product-image-event-detail/service-product-image-event-detail';
import { BindingPropertyComponent } from './binding-property-component/binding-property-component';
import { BindingClassComponent } from './binding-class-component/binding-class-component';
import { BindingStyleComponent } from './binding-style-component/binding-style-component';
import { BindingEventComponent } from './binding-event-component/binding-event-component';
import { BindingTwoWayComponent } from './binding-two-way-component/binding-two-way-component';
import { ProductListComponent } from './product-list-component/product-list-component';
import { ProductDropdownListComponent } from './product-dropdown-list-component/product-dropdown-list-component';
import { ProductListCallServiceComponent } from './product-list-call-service-component/product-list-call-service-component';

const routes: Routes = [
  { path: 'binding-property', component: BindingPropertyComponent },
  { path: 'binding-class', component: BindingClassComponent },
  { path: 'binding-style', component: BindingStyleComponent },
  { path: 'binding-event', component: BindingEventComponent },
  { path: 'binding-two-way', component: BindingTwoWayComponent },
  { path: 'danh-sach-san-pham', component: ProductListComponent },
  { path: 'product-dropdown-list', component: ProductDropdownListComponent },
  { path: 'product-list-call-service', component: ProductListCallServiceComponent },
  {path: 'service-product-image-event',component: ServiceProductImageEvent},
  {path: 'service-product-image-event/:id',component: ServiceProductImageEventDetail},
  {path: 'bai14',component: Bai14},
  { path: 'bai18', component: Bai18 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

