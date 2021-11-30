import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RespuestaToHeadLines} from "src/app/interfaces/interfaces"

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private httpclient: HttpClient) { }


getTopHeadLines()
{
return this.httpclient.get<RespuestaToHeadLines>
("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=05c63ce7372c47d9a9a5c9f14f104744");

}
  
}
