import { Component } from '@angular/core';
import { CovidService } from './services/covid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InfoCovid.com';

  covidCommunitiesTodayData = [];
  updatedAt: Date = new Date();
  multiCollapse: string = 'multiCollapseExample';

  constructor(private covidService: CovidService) { }

  async ngOnInit(): Promise<void> {
    const covidCommunitiesTodayData = await this.covidService.getCovidTodayData();
    this.updatedAt = covidCommunitiesTodayData.info.date_generation;
    this.covidCommunitiesTodayData = covidCommunitiesTodayData.countries.Spain.regions;
    // console.log(this.covidCommunitiesTodayData);
  }
}
