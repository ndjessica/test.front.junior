import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IActivity } from './activity.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ActivityService {
    constructor(protected http: HttpClient) { }

    getDestinationActivities(id: string): Observable<IActivity> {
        return this.http.get<IActivity>(`/api/activities?destinationId=${id}`);
    }
}
