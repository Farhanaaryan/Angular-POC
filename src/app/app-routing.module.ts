import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';

import { PipesComponent } from './pipes/pipes.component';
import { HooksComponent } from './lifeCycleHooks/hooks/hooks.component';
import { ContainerComponent } from './lifeCycleHooks/container/container.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { PaymentComponent } from './payment/payment.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AsynchrounousObservablesComponent } from './asynchrounous-observables/asynchrounous-observables.component';



const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home' , component:ProductComponent},
  {path: 'login',component:LoginComponent},
  {path: 'pipes', component:PipesComponent},
  {path: 'cart', component: CartComponent},
  {path: 'contact' ,component:ContactComponent},
  {path: 'hooks',component:ContainerComponent},
  {path: 'data',component:FetchDataComponent},
  {path: 'payment',component:PaymentComponent},
  {path: 'feedback',component:FeedbackComponent},
  {path: 'observable',component:AsynchrounousObservablesComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



