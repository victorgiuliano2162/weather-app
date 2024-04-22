import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//O decorator serve para indicar que a classe pode ser injetava em componetes
//O privededIn indica que todo componente que tiver acesso ao root poderá acessar o serviço
export class WeatherService {

  private apiKey = '731389b0a3392dd306c68c973378787d';

  constructor(private http: HttpClient) {}
  
  getWeatherDatas(cityName: string): Observable<any> {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`,
      {}
    )
  }
}
