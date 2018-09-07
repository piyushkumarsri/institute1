import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'times'})
export class TimesPipe implements PipeTransform {
    transform(value: any,times?:number): any {

        let num = times?times:value;
            let arr = [];
        for(let i=1;i<=num;i++){
            arr.push(i);
        }

        return arr;
    }
}