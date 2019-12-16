import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { User, Song, Playlist } from '@/_models';
import { UserService, SongService, AuthenticationService, AlertService, PlaylistService } from '@/_services';

import { FilterPipe } from './filter.pipe';

@Component({ templateUrl: 'myaccount.component.html' })
export class MyAccountComponent implements OnInit {
    currentUser: User;
    users = [];
    songs = [];
    playlists = [];
    songForm: FormGroup;
    playlistForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private userService: UserService,
        private songService: SongService,
        private playlistService: PlaylistService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.loadAllSongs();

        this.songForm = this.formBuilder.group({
            songname: ['', Validators.required],
            artist: ['', Validators.required],
            year: ['', Validators.required],
            genre: ['', Validators.required],
            createdby: ['', Validators.required]
        });

        this.playlistForm = this.formBuilder.group({
            listname: ['', Validators.required],
            description: [''],
            visibility: [''],
            createdby: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.songForm.controls; }
    get f1() { return this.playlistForm.controls; }

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

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.songForm.invalid) {
            return;
        }

        this.loading = true;
        this.songService.create(this.songForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Song has been added successfully.', true);
                    this.router.navigate(['/myaccount']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    addPlaylist() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.playlistForm.invalid) {
            return;
        }

        this.loading = true;
        this.playlistService.create(this.playlistForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Playlist has been created successfully.', true);
                    this.router.navigate(['/myaccount']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}