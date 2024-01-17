import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';



import { ProductComponent } from './product/product.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipePipe } from './services/custom-pipe.pipe';
import { ContainerComponent } from './lifeCycleHooks/container/container.component';
import { HooksComponent } from './lifeCycleHooks/hooks/hooks.component';

import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { PaymentComponent } from './payment/payment.component';
import { DisplaynameService } from './services/displayname.service';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AsynchrounousObservablesComponent } from './asynchrounous-observables/asynchrounous-observables.component';
import { HTTPComponent } from './http/http.component';








@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    SearchComponent,
    FilterComponent,
    LoginComponent,

    ProductComponent,
    PipesComponent,
    CustomPipePipe,
    ContainerComponent,
    HooksComponent,

    FetchDataComponent,
    PaymentComponent,
    ContactComponent,
    FeedbackComponent,
    AsynchrounousObservablesComponent,
    HTTPComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DisplaynameService],
  bootstrap: [AppComponent]
})
export class AppModule { }

