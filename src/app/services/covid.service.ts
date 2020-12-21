import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  covidUrl = 'https://api.covid19tracking.narrativa.com/api/'
  dateFormatted: string;

  constructor(private http: HttpClient,
    private datePipe: DatePipe) {
      const date = new Date();
      this.dateFormatted = this.datePipe.transform(date, 'yyyy-MM-dd');
    }

  async getCovidTodayData(){
    return this.http.get(this.covidUrl + this.dateFormatted + '/country/spain')
      .toPromise<any>().then( res => res.dates[this.dateFormatted]);
  }

  async getCovidTodayGraphic() {
    return this.http.get('https://covid19tracking.narrativa.com/feed_en_graphs.json')
      .toPromise<any>();
  }

  async getSpainNewsToday() {
    return this.http.get('https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fapi2.rtve.es%2Frss%2Ftemas_noticias.xml')
      .toPromise<any>();
  }
}
