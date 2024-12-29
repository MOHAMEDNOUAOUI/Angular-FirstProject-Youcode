import { CreateOnwer } from './../DTOs/Survey/CreateOwner.module';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Owner } from '../Models/Owner.module';

@Injectable({
    providedIn:"root"
})
export class OwnerService {
    private url : string = 'http://localhost:9000/owner';
    constructor(private http:HttpClient){}

    CreateOnwer(ownername:string) : Observable<Owner> {
        return this.http.post<Owner>(this.url , {name:ownername});
    }

    getCients() : Observable<Owner[]>{
        return this.http.get<Owner[]>(this.url);
    }
}