import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { BusinessService } from '../business.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mvi-edit',
  templateUrl: './mvi-edit.component.html',
  styleUrls: ['./mvi-edit.component.css']
})
export class MviEditComponent implements OnInit {

 
  angForm: FormGroup;
  business: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: BusinessService,
    private fb: FormBuilder,
    ) {
      this.createForm();
     }

  createForm() {
    this.angForm = this.fb.group({
      mvi_id: new FormControl('', Validators.required ),
      mvi_name: new FormControl('', Validators.required ),
      mvi_type: new FormControl('', Validators.required ),
      mvi_favorites: new FormControl('', Validators.required ),
    });
    }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bs.editBusiness(params['id']).subscribe(res => {
        console.log(res[0]);
        this.business = res[0];
      });
    });
  }

  updateBusiness(mvi_name,mvi_type, mvi_favorites) {
   this.route.params.subscribe(params => {
      this.bs.updateBusiness(mvi_name,mvi_type, mvi_favorites, params['id']);
      this.router.navigate(['/']);
   });

}
}
