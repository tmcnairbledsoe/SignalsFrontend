import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ChartService } from '../services/chart.service';
import { Trade } from '../models/Trade';

@Component({

selector:'app-chart',

templateUrl:'./chart.component.html',

styleUrls: ['./chart.component.scss']

})

export class ChartComponent implements OnInit {
  chartData$: Observable<Trade[]>;

  constructor(private chartService: ChartService) {
    console.log("test");
  }

  ngOnInit() {
    this.loadChartData();
  }

  loadChartData() {
    this.chartData$ = this.chartService.getChartData();
  }

  public chartType:string='line';

  public chartDatasets:Array<any> = [

  { data: this.chartService.getChartDataArray(), label: this.chartService.getChartString() }

  // { data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset' }

  ];

  public chartLabels:Array<any> = ['6','5','4','3','2','1'];

  public chartColors:Array<any> = [
    {
      backgroundColor:'rgba(220,220,220,0.2)',
      borderColor:'rgba(220,220,220,1)',
      borderWidth:2,
      pointBackgroundColor:'rgba(220,220,220,1)',
      pointBorderColor:'#fff',
      pointHoverBackgroundColor:'#fff',
      pointHoverBorderColor:'rgba(220,220,220,1)'
    },
    // {
      // backgroundColor:'rgba(151,187,205,0.2)',
      // borderColor:'rgba(151,187,205,1)',
      // borderWidth:2,
      // pointBackgroundColor:'rgba(151,187,205,1)',
      // pointBorderColor:'#fff',
      // pointHoverBackgroundColor:'#fff',
      // pointHoverBorderColor:'rgba(151,187,205,1)'
    // }
  ];

  public chartOptions:any= {
    responsive:true
  };

  public chartClicked(e:any):void {

  }

  public chartHovered(e:any):void {

  }

}