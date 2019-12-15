import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@/_models';
import { Service } from '@/_models';
import { UserService, ServiceService } from '@/_services';

@Component({ templateUrl: 'about.component.html' })
// export class AboutComponent implements OnInit {
export class AboutComponent {
    
	services = [];

    constructor(
		private serviceService: ServiceService
    ) {
        
    }

    ngOnInit() {
        this.loadAllServices();
    }
	
	private loadAllServices() {
        this.serviceService.getAll()
            .pipe(first())
            .subscribe(services => this.services = services);
    }
}