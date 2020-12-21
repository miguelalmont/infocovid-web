import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.css']
})
export class CommunitiesComponent implements OnInit {

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
