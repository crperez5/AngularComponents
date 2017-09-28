import { NgModule, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { HomeComponent } from './home.component';
import { WidgetsModule } from '../widgets/widgets.module';
import { ComponentThreeComponent } from '../widgets/component-three/component-three.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [
      HomeComponent
  ],
  imports: [WidgetsModule]
})
export class HomeModule {

  
    

    
}
