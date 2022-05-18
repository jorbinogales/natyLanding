import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class HeaderService {

    constructor(private _http : HttpClient){}


    createPeople(form: any)
    {
        let data = {
            full_name: form.fullname,
            business: form.business,
            email: form.email,
            phone:form.phone,
            state: form.state
        }
        return this._http.post<any>(`${environment.API}/api/people/create`, data).pipe(
            tap((response) => {
                return response;
            })
        );
    }
}