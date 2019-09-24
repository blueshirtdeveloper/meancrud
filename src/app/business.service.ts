import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  uri = '/business';
  versionuri = '/getversion';

  constructor(private http: HttpClient) { }

  addBusiness(mvi_id, mvi_name, mvi_type, mvi_favorites) {
    const obj = {
      mvi_id: mvi_id,

      mvi_name: mvi_name,
      mvi_type: mvi_type,
      mvi_favorites: mvi_favorites
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getBusinesses() {
    return this
           .http
           .get(`${this.uri}`);
  }

  getVersion() {
    return this
           .http
           .get(`${this.versionuri}`);
  }

  editBusiness(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }

  updateBusiness(mvi_name, mvi_type, mvi_favorites, id) {

    const obj = {
      mvi_name: mvi_name,
      mvi_type: mvi_type,
      mvi_favorites: mvi_favorites,

      };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

 deleteBusiness(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
