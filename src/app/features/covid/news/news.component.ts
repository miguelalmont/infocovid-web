import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newsToday: any[] = [];

  constructor(private covidService: CovidService) { }

  async ngOnInit(): Promise<void> {
    const newsTodayRaw = await this.covidService.getSpainNewsToday();
    this.newsToday = newsTodayRaw.items;
  }

}
