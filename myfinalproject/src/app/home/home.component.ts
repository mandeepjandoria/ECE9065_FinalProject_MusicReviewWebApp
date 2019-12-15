import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { Song } from '@/_models';
import { SongService } from '@/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    
    songs = [];

    constructor(
        private songService: SongService
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
}