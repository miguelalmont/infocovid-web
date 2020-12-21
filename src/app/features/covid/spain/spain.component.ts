import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';


@Component({
  selector: 'app-spain',
  templateUrl: './spain.component.html',
  styleUrls: ['./spain.component.css']
})
export class SpainComponent implements OnInit {

  covidSpainTodayData: any = 'empty';
  updatedAt: Date = new Date();
  constructor(private covidService: CovidService) { }

  async ngOnInit(): Promise<void> {
    const covidSpainTodayData = await this.covidService.getCovidTodayData();
    this.updatedAt = covidSpainTodayData.info.date_generation;
    this.covidSpainTodayData = covidSpainTodayData.countries.Spain;
  }

}
