import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing-module';

import { App } from './app';
import { Contact } from './contact/contact';
import { Homework } from './homework/homework';

import { BindingPropertyComponent } from './binding-property-component/binding-property-component';
import { BindingClassComponent } from './binding-class-component/binding-class-component';
import { BindingStyleComponent } from './binding-style-component/binding-style-component';
import { BindingEventComponent } from './binding-event-component/binding-event-component';
import { BindingTwoWayComponent } from './binding-two-way-component/binding-two-way-component';

import { ProductListComponent } from './product-list-component/product-list-component';
import { ChildComponent } from './child-component/child-component';
import { AppComponent } from './app-component/app-component';
import { ProductDropdownListComponent } from './product-dropdown-list-component/product-dropdown-list-component';
import { ProductListCallServiceComponent } from './product-list-call-service-component/product-list-call-service-component';

import { ProductHttpService } from './services/product-http-service/product-http-service';
import { ProductListCallHttpServiceComponent } from './product-list-call-http-service-component/product-list-call-http-service-component';

import { Baitap } from './baitap/baitap';
import { Bai13 } from './baitap/bai13/bai13';

import { ServiceProductImageEvent } from './baitap/bai13/service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetail } from './baitap/bai13/service-product-image-event-detail/service-product-image-event-detail';

import { Bai14 } from './baitap/bai14/bai14';
import { Bai18 } from './baitap/bai18/bai18';

@NgModule({
  declarations: [
    App,
    Contact,
    Homework,

    BindingPropertyComponent,
    BindingClassComponent,
    BindingStyleComponent,
    BindingEventComponent,
    BindingTwoWayComponent,

    ProductListComponent,
    ChildComponent,
    AppComponent,
    ProductDropdownListComponent,
    ProductListCallServiceComponent,

    ProductHttpService,
    ProductListCallHttpServiceComponent,

    Baitap,
    Bai13,

    ServiceProductImageEvent,
    ServiceProductImageEventDetail,

    Bai14,
    Bai18,
  ],

  imports: [BrowserModule, AppRoutingModule, FormsModule],

  providers: [
  provideBrowserGlobalErrorListeners(),
  provideHttpClient()
],

  bootstrap: [App],
})
export class AppModule {}
