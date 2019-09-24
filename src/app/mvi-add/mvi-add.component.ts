import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-mvi-add',
  templateUrl: './mvi-add.component.html',
  styleUrls: ['./mvi-add.component.css']
})
export class MviAddComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private bs: BusinessService) {
  }

  createForm() {
    this.angForm = this.fb.group({
      mvi_id: new FormControl('', Validators.required ),
      mvi_name: new FormControl('', Validators.required ),
      mvi_type: new FormControl('', Validators.required ),
      mvi_favorites: new FormControl('', Validators.required ),
    });
  }
  addBusiness(mvi_id, mvi_name,mvi_type, mvi_favorites) {
    this.bs.addBusiness(mvi_id, mvi_name, mvi_type, mvi_favorites);
  }
  ngOnInit() {
    this.createForm();
  }

}
