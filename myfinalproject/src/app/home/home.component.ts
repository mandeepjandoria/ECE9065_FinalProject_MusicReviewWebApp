import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { Song } from '@/_models';
import { Review } from '@/_models';
import { SongService, ReviewService } from '@/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    
    songs = [];
    reviews = [];

    constructor(
        private songService: SongService,
        private reviewService: ReviewService
    )
    {

    }

    ngOnInit() {
        this.loadAllSongs();
    }

    private loadAllSongs() {
        this.songService.getAll()
            .pipe(first())
            .subscribe(songs => this.songs = songs);
    }

    private viewReviews(id: string) {
        this.reviewService.getAllReviewsForSong(id)
            .pipe(first())
            .subscribe(reviews => this.reviews = reviews);
    }

    private getAllReviews() {
        this.reviewService.getAllReviews()
            .pipe(first())
            .subscribe(reviews => this.reviews = reviews);
    }
}