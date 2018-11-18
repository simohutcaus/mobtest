import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  
  data: any;

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  load(){
      if(this.data) {
        return Promise.resolve(this.data);
      }

      return new Promise(resolve => {
        this.http.get('assets/data/questions.json').subscribe(data => {
          this.data = this.shuffle(data);
          console.log(this.data);
          resolve(this.data.questions);

          });
      });

  }

  shuffle(arra1) {
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

}
