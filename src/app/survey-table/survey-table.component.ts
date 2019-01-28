import { SurveyInfo } from './Interfaces';
import { Component, OnInit } from '@angular/core';


const ELEMENT_DATA: SurveyInfo[] = [
  {position: 1, name: 'Survey One', createdDate: '1/27/2018', lastUpdatedDate: '1/27/2018'},
  {position: 2, name: 'Survey Two', createdDate: '1/27/2018', lastUpdatedDate: '1/27/2018'},
  {position: 3, name: 'Survey Three', createdDate: '1/27/2018', lastUpdatedDate: '1/27/2018'},
];

@Component({
  selector: 'app-survey-table',
  templateUrl: './survey-table.component.html',
  styleUrls: ['./survey-table.component.scss']
})


export class SurveyTableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'createdDate', 'lastUpdatedDate', 'Edit', 'Delete'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
