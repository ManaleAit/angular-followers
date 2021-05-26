import {Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[app-personeldirective]',
  
})
export class PersoneldirectiveComponent {
 
  @Input('format') format: any
  constructor(private el: ElementRef) { }


  @HostListener('blur')
  onBlur(){
   let  value:string=this.el.nativeElement.value;
   
   if(this.format=="lowercase"){
    this.el.nativeElement.value=value.toLowerCase();

   }
   else{
    this.el.nativeElement.value=value.toUpperCase();

   }
   
    console.log("On blur");
  }
  @HostListener('focus')
  onFocus(){
    console.log("On focus");
  }
}
