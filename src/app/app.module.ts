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

import { ObservableComponent } from './observable/observable.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipePipe } from './services/custom-pipe.pipe';
import { ContainerComponent } from './lifeCycleHooks/container/container.component';
import { HooksComponent } from './lifeCycleHooks/hooks/hooks.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    SearchComponent,
    FilterComponent,
    LoginComponent,
    ObservableComponent,
    ProductComponent,
    ContactComponent,
    PipesComponent,
    CustomPipePipe,
    ContainerComponent,
    HooksComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

