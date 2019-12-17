import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { Song } from '@/_models';
import { Review } from '@/_models';
import { SongService, ReviewService } from '@/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    
    songs = [];
    reviews = [];

    characters = [
        'Tum Hi Ho',
        'Hint',
        'Black',
        'Sohne Lagde',
        'Hello',
        'Let Me Love You',
        'Work',
        'Haani',
        'My Moon',
        'Mere Rashke Qamar',
        'Filhaal',
        'Dilbara',
        'Blinding Lights',
        'Dont Call Me Angel',
        'My Own Dance',
        'Raising Hell'
      ]

    constructor(
        private songService: SongService,
        private reviewService: ReviewService
    )
    {

    }

    ngOnInit() {
        this.loadAllSongs();
        this.getAllReviews();
        // this.viewReviews();
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
        this.reviewService.getAll()
            .pipe(first())
            .subscribe(reviews => this.reviews = reviews);
    }
}