﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Song } from '@/_models';

@Injectable({ providedIn: 'root' })
export class SongService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Song[]>(`${config.apiUrl}/songs`);
    }

    create(song: Song) {
        return this.http.post(`${config.apiUrl}/songs/create`, song);
    }
}