import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Review } from '@/_models';

@Injectable({ providedIn: 'root' })
export class ReviewService {
    constructor(private http: HttpClient) { }

    getAllReviewsForSong(id: number) {
        return this.http.get<Review[]>(`${config.apiUrl}/reviews/${id}`);
    }

    create(review: Review) {
        return this.http.post(`${config.apiUrl}/reviews/create`, review);
    }
}