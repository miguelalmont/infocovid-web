import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  toogleClass = 'active';
  mybool: boolean = true;
  covidCommunitiesTodayData = [];
  updatedAt: Date = new Date();
  multiCollapse: string = 'multiCollapseExample';
  pathRegex: RegExp  = new RegExp('/communities/[a-z_]+([a-z_]+)*/[a-z_]+([a-z_]+)*');

  constructor(private covidService: CovidService,
    private router: Router) { 
      this.showSidebarOpts();
    }

  async ngOnInit(): Promise<void> {
    const covidCommunitiesTodayData = await this.covidService.getCovidTodayData();
    this.updatedAt = covidCommunitiesTodayData.info.date_generation;
    this.covidCommunitiesTodayData = covidCommunitiesTodayData.countries.Spain.regions;
  }

  showSidebarOpts(): void {
    if(this.router.url.match(this.pathRegex)){
      this.mybool=false;
    } else{
      this.mybool=true;
    };
  };

}
