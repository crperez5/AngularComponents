import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentThreeComponent } from './component-three/component-three.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ComponentOneComponent, ComponentThreeComponent],
  entryComponents: [ComponentThreeComponent],
  declarations: [ComponentOneComponent, ComponentThreeComponent]
})
export class WidgetsModule { }
