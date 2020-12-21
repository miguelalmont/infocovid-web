import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  mybool: boolean = true;
  covidCommunitiesTodayData = [];
  updatedAt: Date = new Date();
  multiCollapse: string = 'multiCollapseExample';
  pathRegex: RegExp  = new RegExp('/communities/[a-z_]+([a-z_]+)*');
  @ViewChild('navbarid', {static: false}) navbaridRef: any;

  constructor(private covidService: CovidService,
    private router: Router) { 
      this.router.events.subscribe(e => {this.showNavbarOpts()})
      this.showNavbarOpts();
    }

  async ngOnInit(): Promise<void> {
    const covidCommunitiesTodayData = await this.covidService.getCovidTodayData();
    this.updatedAt = covidCommunitiesTodayData.info.date_generation;
    this.covidCommunitiesTodayData = covidCommunitiesTodayData.countries.Spain.regions;
  }

  showNavbarOpts(): void {
    if(this.router.url.match(this.pathRegex)){
      this.mybool=false;
    } else{
      this.mybool=true;
    };
  };

}
