import { Component, OnInit } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  //Line chart 
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [30, 40, 46, 75, 56, 55, 40], label: 'Series B' },
    { data: [20, 59, 70, 81, 56, 55, 40], label: 'Series C' }
  ];
  public lineChartLabels: Label[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
  ];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

// Bar charts
  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartType: any = 'horizontalBar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [1, 2, 3], label: 'Approved', stack: 'a' , barThickness: 20},
    { data: [1, 2, 3], label: 'Accepted', stack: 'a' , barThickness: 20},
    { data: [1, 2, 3], label: 'Open', stack: 'a' , barThickness: 20},
    { data: [1, 2, 3], label: 'In Progress', stack: 'a' , barThickness: 20},
  ];
  public barChartLabels: string[] = ['P', 'R', 'B'];

  //Table data
  
  public  ELEMENT_DATA: any[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];
  public displayedColumns:any;
  public dataSource;

  constructor() { }

  ngOnInit() {
     this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
    this.dataSource = this.ELEMENT_DATA;
  }

}
