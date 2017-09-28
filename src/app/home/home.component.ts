import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { SimpleService } from '../services/simple.service';
import { ComponentThreeComponent } from '../widgets/component-three/component-three.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  widget = null;
  index = 0;
  message = '';
  @ViewChild('container', { read: ViewContainerRef}) container;


   constructor(private resolver: ComponentFactoryResolver, private simpleService: SimpleService) {
    this.message = simpleService.message;
        }


   ngAfterContentInit() {

    this.container.createComponent(this.resolver.resolveComponentFactory(ComponentThreeComponent));
    this.container.createComponent(this.resolver.resolveComponentFactory(ComponentThreeComponent));
    this.container.createComponent(this.resolver.resolveComponentFactory(ComponentThreeComponent));
    this.container.createComponent(this.resolver.resolveComponentFactory(ComponentThreeComponent));
    this.container.createComponent(this.resolver.resolveComponentFactory(ComponentThreeComponent));
    this.container.createComponent(this.resolver.resolveComponentFactory(ComponentThreeComponent));

    this.widget = 
      this.container.createComponent(this.resolver.resolveComponentFactory(ComponentThreeComponent), this.index);
    this.widget.instance.value = 'I am the one';

    }

    moveUp() {
      if (this.index > 0) {
        this.index = this.index - 1;
        this.container.move(this.widget.hostView, this.index);
      }
    }

    moveDown() {
      if (this.index < 6) {
        this.index = this.index + 1;
        this.container.move(this.widget.hostView, this.index);
      }
    }

}
