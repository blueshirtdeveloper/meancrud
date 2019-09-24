import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BusinessService } from '../business.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mvi-add',
  templateUrl: './mvi-add.component.html',
  styleUrls: ['./mvi-add.component.css']
})
export class MviAddComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private bs: BusinessService,
    private router: Router) {
  }

  createForm() {
    this.angForm = this.fb.group({
      mvi_id: new FormControl('', Validators.required ),
      mvi_name: new FormControl('', Validators.required ),
      mvi_type: new FormControl('', Validators.required ),
      mvi_favorites: new FormControl('', Validators.required ),
    });
  }
  clearForm() {

    this.angForm.reset({
          mvi_id: '',
          mvi_name: '',
          mvi_type: '',
          mvi_favorites: '',
         });
    }
  addBusiness(mvi_id, mvi_name,mvi_type, mvi_favorites) {
    this.bs.addBusiness(mvi_id, mvi_name, mvi_type, mvi_favorites);
    this.clearForm();
  }
  ngOnInit() {
    this.createForm();
  }

}
