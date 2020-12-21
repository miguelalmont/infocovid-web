import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.css']
})
export class ProvinceComponent implements OnInit {

  covidProvinceTodayData: any;
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
    let covidProvinceTodayData = covidCommunitiesTodayRawData.countries.Spain.regions
      .filter( c => c.id === this.params.community);
    this.covidProvinceTodayData = covidProvinceTodayData[0].sub_regions.filter( p => p.id === this.params.province);
  }

}
