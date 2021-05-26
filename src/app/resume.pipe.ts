import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resume'
})
export class ResumePipe implements PipeTransform {

  transform(value: any, ...args: any): unknown {
   
     if(value==null){
       return null;
     }
     return value.substr(0,args) + ".....";
  }

}
