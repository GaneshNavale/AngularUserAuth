import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})

export class ContactComponent implements OnInit {

  constructor(public apiService: ApiService) {}

  public contact:Contact = new Contact();

  ngOnInit() {}

	public onSubmit() {
    if(this.contact.id) {
	    this.apiService.update("contacts/"+this.contact.id,this.contact)
	      .subscribe()
    }
    else {
	    this.apiService.post('contacts', this.contact).subscribe();
  	}
	}
}
