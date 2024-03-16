import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from "./hello/hello.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HelloComponent, HttpClientModule]
})
export class AppComponent {
  


  title = 'weatherClient';
}
