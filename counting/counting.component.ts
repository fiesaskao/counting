import {Component, Input} from '@angular/core';
@Component({
    selector: 'app-count',
    templateUrl: './counting.component.html',
    styleUrls: ['./counting.component.css']
})
export class CountComponent{
    count = 0;
    @Input()
    title: string;
    constructor(){}
    countNumber(){
        this.count = this.count + 1;
    }
}