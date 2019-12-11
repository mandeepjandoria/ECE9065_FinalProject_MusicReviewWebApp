import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@/_models';
import { Service } from '@/_models';
import { UserService, AuthenticationService, ServiceService } from '@/_services';

@Component({ templateUrl: 'about.component.html' })
export class AboutComponent implements OnInit {
    currentUser: User;
    users = [];
	services = [];

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
		private serviceService: ServiceService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngoninit() {
        this.loadAllUsers();
    }

    private loadAllUsers() {
        this.userService.getAll()
            .pipe(first())
            .subscribe(users => this.users = users);
    }
	
	private loadAllServices() {
        this.serviceService.getAll()
            .pipe(first())
            .subscribe(services => this.services = services);
    }
}