import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubmitForm {
    submit(event: any){
    console.log(event);
  }
}
