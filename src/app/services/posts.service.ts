import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class PostsService {

  constructor(private http: HttpClient
    ) {

    }

    public get(url:string,Options?:any) {
      return this.http.get(url,Options);
    }

    public getSingle(url:string){
        return this.http.get(url);
    }


}
