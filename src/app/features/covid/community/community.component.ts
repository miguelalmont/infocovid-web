import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  covidCommunityTodayData: any = 'empty';
  updatedAt: Date = new Date();
  multiCollapse: string = 'multiCollapseExample';
  params: any;

  constructor(private covidService: CovidService,
    private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.params = params);
  }

  async ngOnInit(): Promise<void> {
    const covidCommunitiesTodayRawData = await this.covidService.getCovidTodayData();
    this.updatedAt = covidCommunitiesTodayRawData.info.date_generation;
    const covidCommunityTodayData = covidCommunitiesTodayRawData.countries.Spain.regions
      .filter( c => c.id === this.params.community);
    this.covidCommunityTodayData = covidCommunityTodayData[0];
  }

}
