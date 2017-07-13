import { Component, OnInit ,Input,ViewChild,ContentChild} from '@angular/core';

@Component({
  selector: 'app-component1',
  template: `
    <p #myp></p>
     <ul #lists>
     <li *ngFor="let item of items" appUpper [appMyvisibilty]="true"   >{{item}}</li>
     </ul>
    <button [appMycolors]="colors" [lists]="list" appMycolor (emitColor)="showColor(a)"   >Change Color </button>
     {{myColor}}
  `,
  styles: []
})
export class Component1Component implements OnInit {
  public val:boolean=true;
  public colors:String[]=["red","blue","green"];
  public myColor:string;
  public list:any[]=[2,3,4];
  //listEle=this.lists.NativeElement;
@Input() items:string[];
  constructor() {
   
   }
showColor(color:string){
this.myColor=color;
}
  ngOnInit() {
    // console.log("11list"+this.lists.nativeElement.textContent);
  }

}
