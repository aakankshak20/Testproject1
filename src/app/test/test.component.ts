import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>
                Welcome {{name}}
            </h2>
            <h2>{{2+2}}</h2>
            <h2>{{"Welcome "+name}}</h2>
            <h2>{{name.length}}</h2>
            <h2>{{name.toUpperCase()}}</h2>
            <h2>{{greetUser()}}</h2>
            <h2>{{siteUrl}}</h2>

            //class binding
            <h3>Welcome here</h3>
            <h3 class="text-sucess">Aakanksha</h3>
            <h3 [class]="sucessClass">Aakanksha</h3>
            <h3 [class.text-danger]="hasError">Aakanksha</h3>

            <h3 [ngClass]="messageClass">NgClass</h3>

            <input [id]="myId" type="text" value="ask">
            <input [disabled]="val" id="{{myId}}" type="text" value="ask">
            <input bind-disabled="val2" id="{{myId}}" type="text" value="ask">
            
            //style binding
            <h3 [style.color]="'orange'">Style Binding</h3>
            <h3 [style.color]="hasError ? 'red' : 'green'">Style Binding</h3>
            <h3 [style.color]="highlightcolor">Style Binding2</h3>
            <h3 [ngStyle]="titleStyles">Style Binding3</h3>
           
            //event binding
            <button (click)= "onClick($event)">Greet</button>
            {{greeting}}
            <button (click)= "greeting ='Welcome ask'">Greet</button>
            
            //template refernce variable

            <input #myInput type="text">
            <button (click)="logMessage(myInput.value)">Log</button>
            <input #myInput type="text">
            <button (click)="logMessage(myInput)">Log</button>

            //two way binding
            <input [(ngModel)]= "name1" type="text">
            {{name1}}
            `,
  styles: [`
          .text-sucess {
            color: green;
          }
          .text-danger {
            color: red;
          }
          .text-special{
            font-style: italic;
          }
  
    `]
})
export class TestComponent implements OnInit {

  public siteUrl= window.location.href;
  public name ="kk";
  public myId = "testId";
  public val=false;
  public val2=true;
  public sucessClass='text-sucess';
  public hasError= true;
  public isSpecial = true;
  public messageClass={
    "text-sucess":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  }

  public highlightcolor ="orange";
  public titleStyles ={
    color:"blue",
    fontStyle:"italic"
  }
   public greeting =""; 
   public name1="";

  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "welcome " + this.name;
  }

   onClick(event:any){
     console.log(event);
     this.greeting=event.type;
   }


   logMessage(value:any){
     console.log(value);
   }
}
