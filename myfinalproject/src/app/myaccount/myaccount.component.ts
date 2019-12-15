import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User, Song } from '@/_models';
import { UserService, SongService, AuthenticationService } from '@/_services';

@Component({ templateUrl: 'myaccount.component.html' })
export class MyAccountComponent implements OnInit {
    currentUser: User;
    users = [];
    songs = [];

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private songService: SongService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.loadAllSongs();
    }

    // deleteUser(id: number) {
    //     this.userService.delete(id)
    //         .pipe(first())
    //         .subscribe(() => this.loadAllUsers());
    // }

    // private loadAllUsers() {
    //     this.userService.getAll()
    //         .pipe(first())
    //         .subscribe(users => this.users = users);
    // }

    private loadAllSongs() {
        this.songService.getAll()
            .pipe(first())
            .subscribe(songs => this.songs = songs);
    }
}