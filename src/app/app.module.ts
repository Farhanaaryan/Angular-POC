import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';


import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipePipe } from './services/custom-pipe.pipe';
import { ContainerComponent } from './lifeCycleHooks/container/container.component';
import { HooksComponent } from './lifeCycleHooks/hooks/hooks.component';
import { Button1Component } from './Observable/button1/button1.component';
import { Button2Component } from './Observable/button2/button2.component';
import { ObservableComponent } from './Observable/observable/observable.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    SearchComponent,
    FilterComponent,
    LoginComponent,

    ProductComponent,
    ContactComponent,
    PipesComponent,
    CustomPipePipe,
    ContainerComponent,
    HooksComponent,
    Button1Component,
    Button2Component,
    ObservableComponent,
    FetchDataComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

