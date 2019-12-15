import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { Song, Review } from '@/_models';
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

    private viewReviews(id: number) {
        this.reviewService.getAllReviewsForSong(id)
            .pipe(first())
            .subscribe(reviews => this.reviews = reviews);
    }
}