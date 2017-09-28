import { Component, OnInit, ViewChild, Renderer, Input } from '@angular/core';

@Component({
  selector: 'app-component-three',
  templateUrl: './component-three.component.html',
  styleUrls: ['./component-three.component.css']
})
export class ComponentThreeComponent implements OnInit {

  @Input('value') value = 'no value provided';
  
  @ViewChild('input') input;

  constructor(private renderer: Renderer) { }
  ngOnInit(): void {

      }

  ngAfterViewInit() {
    this.renderer.invokeElementMethod(this.input.nativeElement, 'focus');
    this.renderer.setElementAttribute(this.input.nativeElement, 'value', this.value);
  }

}
