import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SpainComponent } from './spain/spain.component';
import { CommunitiesComponent } from './communities/communities.component';
import { NewsComponent } from './news/news.component';
import { RouterModule, Routes } from '@angular/router';
import { EvolutionGraphicsComponent } from './evolution-graphics/evolution-graphics.component';
import { CovidService } from 'src/app/services/covid.service';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProvinceComponent } from './province/province.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommunityComponent } from './community/community.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'spain',
        component: SpainComponent
      },
      {
        path: 'communities',
        component: CommunitiesComponent
      },
      {
        path: 'communities/:community',
        component: CommunityComponent
      },
      {
        path: 'communities/:community/:province',
        component: ProvinceComponent
      },
      {
        path: 'evolution',
        component: EvolutionGraphicsComponent
      },
      {
        path: 'news',
        component: NewsComponent
      },
      {
        path: 'about-us',
        component: AboutUsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    SpainComponent, 
    CommunitiesComponent, 
    NewsComponent, 
    EvolutionGraphicsComponent, 
    HomeComponent,
    AboutUsComponent,
    ProvinceComponent,
    SidebarComponent,
    CommunityComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [CovidService, DatePipe]
})
export class CovidModule { }
