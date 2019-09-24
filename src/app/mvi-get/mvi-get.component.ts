import { Component, OnInit } from '@angular/core';
import Business from '../Business';
import { BusinessService } from '../business.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-mvi-get',
  templateUrl: './mvi-get.component.html',
  styleUrls: ['./mvi-get.component.css']
})
export class MviGetComponent implements OnInit {

  businesses: Business[];

  constructor(private bs: BusinessService , private router: Router) { }

  ngOnInit() {
    this.bs
      .getBusinesses()
      .subscribe((data: Business[]) => {
        this.businesses = data;
    });
  }

  deleteBusiness(id) {
    console.log(id)
    this.bs.deleteBusiness(id).subscribe(res => {
      console.log('Deleted');
      this.router.navigate(['/']);
    });
  }

}
