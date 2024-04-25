import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Disney, SearchResponse } from '../interfaces/disney.interface'; 

@Injectable({providedIn: 'root'})
export class DisneyService {

    public disneyList: Disney[] = [];

    private _tagsHistory: string[] = [];
    private serviceUrl: string = 'https://api.disneyapi.dev/character';

    constructor( private http: HttpClient ) {}


    get tagsHistory() {
        return [...this._tagsHistory];
    } 


    public disneyCharacters(): void {
          
        this.http.get<SearchResponse>(`${this.serviceUrl}`)
            .subscribe(resp => {
                this.disneyList = resp.data;
                console.log( {disney: this.disneyList })
            });
    }
    
    

    
}