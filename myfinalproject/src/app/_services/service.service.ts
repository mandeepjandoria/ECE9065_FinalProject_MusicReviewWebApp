import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Service } from '@/_models';

@Injectable({ providedIn: 'root' })
export class ServiceService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Service[]>(`${config.apiUrl}/services`);
    }

    // register(service: Service) {
        // return this.http.post(`${config.apiUrl}/services/register`, service);
    // }

    // delete(id: number) {
        // return this.http.delete(`${config.apiUrl}/services/${id}`);
    // }
}