import { Component, OnInit } from '@angular/core';
declare let d3: any;
declare let $: any;

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartsComponent  {
   public pieChartData = [{
    id: 0,
    label: 'slice 1',
    percentage: 10,
    value: 10,
    color: 'blue',
  }, {
    id: 1,
    label: 'slice 2',
    percentage: 20,
    value: 20,
    color: 'black',
  }, {
    id: 2,
    label: 'slice 3',
    percentage: 30,
    value: 30,
    color: 'red',
  }, {
    id: 3,
    label: 'slice 4',
    percentage: 10,
    value: 10,
    color: 'yellow',
  }

    ];



public centerImage = 'assets/img/6.png';
  public piedata = [{
    id: 0,
    label: 'water',
    value: 10,
    color: 'red',
  }, {
    id: 1,
    label: 'land',
    value: 20,
    color: 'blue',
  }, {
    id: 2,
    label: 'sand',
    value: 30,
    color: 'green',
  }, {
    id: 3,
    label: 'grass',
    value: 20,
    color: 'yellow',
  }, {
    id: 4,
    label: 'earth',
    value: 10,
    color: 'pink',
  }];

  public centerImageEvent() {
  }

  public ngOnInit(){
  }



   public colors = ['red', 'green', 'blue','yellow']
  public dataColumns = [1, 2,3];
  public barChartData = [{
    id: 0,
    label: 'label1',
    value1: 10,
    value2: 20,
    value3: 15,
    value4: 30,
  }, {
    id: 1,
    label: 'label2',
    value1: 10,
    value2: 5,
    value3: 15,
    value4: 30,
  }]

}


