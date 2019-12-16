import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Playlist } from '@/_models';

@Injectable({ providedIn: 'root' })
export class PlaylistService {
    constructor(private http: HttpClient) { }

    create(playlist: Playlist) {
        return this.http.post(`${config.apiUrl}/playlists/create`, playlist);
    }
	
	getAll() {
        return this.http.get<Playlist[]>(`${config.apiUrl}/playlists`);
    }
	
	getAllPlaylistsForUser(id: string) {
        return this.http.get<Playlist[]>(`${config.apiUrl}/playlists/${id}`);
    }
}