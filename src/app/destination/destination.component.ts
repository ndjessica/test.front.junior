import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDestination } from './destination.model';
import { ActivityService } from '../activity/activity.service';
import { IActivity } from '../activity/activity.model';

@Component({
	selector: 'app-destination',
	templateUrl: './destination.component.html',
	styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {
	destination: IDestination;
	activities: IActivity;

	get bgImg() { return `url('${this.destination.bg}')`; }
	constructor(
		protected route: ActivatedRoute,
		private activityService: ActivityService
	) {}
	ngOnInit() {
		this.route.data
		.subscribe((data: { destination: IDestination }) => {
			this.destination = data.destination;
		});

		this.activityService.getDestinationActivities(this.destination.id).subscribe((activityData: IActivity) => {
            this.activities = activityData;
        });
	}
}
