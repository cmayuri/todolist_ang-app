import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DependencyService } from './services/dependency.service';
import { DependencyinjectionComponent } from './components/dependencyinjection/dependencyinjection.component';
import { TwowaydatabindingComponent } from './components/twowaydatabinding/twowaydatabinding.component';

const routes: Routes = [
  {path: 'dependencyinjection', component: DependencyinjectionComponent},
  {path: 'twowaydatabinding', component: TwowaydatabindingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
