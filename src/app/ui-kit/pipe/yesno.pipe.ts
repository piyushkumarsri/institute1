import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'yesno'})
export class YesNoPipe implements PipeTransform {
    transform(value: any): any {
        if (value===true){
            return 'YES';
        }   else if(value===false){
            return 'NO';
        }else {
            return 'NA';
        }
    }
}