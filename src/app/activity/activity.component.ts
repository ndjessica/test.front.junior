import { Component, OnInit, Input } from '@angular/core';
import { IActivity } from './activity.model';

@Component({
    selector: 'app-activity',
    templateUrl: './activity.component.html',
    styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
    @Input() activity: IActivity;

    constructor( ) { }
    ngOnInit() {
    }
}
