import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SmartphonesComponent } from './components/products/smartphones/smartphones.component';
import { NotfoundComponent } from './components/share/notfound/notfound.component';
import { LineablancaComponent } from './components/products/lineablanca/lineablanca.component';
import { FotografiaComponent } from './components/products/fotografia/fotografia.component';
import { CustomercareComponent } from './components/customercare/customercare.component';
import { VisitusComponent } from './components/visitus/visitus.component';
import { PantallaproductoComponent } from './components/products/pantallaproducto/pantallaproducto.component';

const Rutas: Routes = [
  { path: '', component: HomeComponent },
  { path: 'smartphones', component: SmartphonesComponent },
  { path: 'lineaBlanca', component: LineablancaComponent },
  { path: 'fotografía', component: FotografiaComponent},
  { path: 'cutomerCare', component: CustomercareComponent},
  { path: 'visitUs', component: VisitusComponent},
  { path: 'detail-produts/:id', component: PantallaproductoComponent},
  {path:'notfound',component:NotfoundComponent},
  {path:'**', pathMatch:'full',redirectTo:'notfound'}
];

export const APP_ROUTES=RouterModule.forRoot(Rutas) 