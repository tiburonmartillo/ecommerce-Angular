import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CarrouselComponent } from './components/home/carrousel/carrousel.component';
import { NewArrivalsComponent } from './components/home/new-arrivals/new-arrivals.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { PromosComponent } from './components/home/promos/promos.component';
import { SubmitComponent } from './components/home/submit/submit.component';
import { SmartphonesComponent } from './components/products/smartphones/smartphones.component';
import { FotografiaComponent } from './components/products/fotografia/fotografia.component';
import { LineablancaComponent } from './components/products/lineablanca/lineablanca.component';
import { TodosComponent } from './components/products/todos/todos.component';
import { VisitusComponent } from './components/visitus/visitus.component';
import { CustomercareComponent } from './components/customercare/customercare.component';
import { PantallaproductoComponent } from './components/products/pantallaproducto/pantallaproducto.component';
import { NotfoundComponent } from './components/share/notfound/notfound.component';
import { APP_ROUTES } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CarrouselComponent,
    NewArrivalsComponent,
    FooterComponent,
    PromosComponent,
    SubmitComponent,
    SmartphonesComponent,
    FotografiaComponent,
    LineablancaComponent,
    TodosComponent,
    VisitusComponent,
    CustomercareComponent,
    PantallaproductoComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule, APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
