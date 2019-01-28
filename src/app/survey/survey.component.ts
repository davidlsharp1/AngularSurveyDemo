import { SurveyInfo } from './../survey-table/Interfaces';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup  } from '@angular/forms';

const ELEMENT_DATA: SurveyInfo[] = [
  {position: 1, name: 'Survey One', createdDate: '1/27/2018', lastUpdatedDate: '1/27/2018'},
];


@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  myForm: FormGroup;
  preview = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      surveyName: '',
    });
  }

  ShowPreview() {
    if (this.preview === true) {
      this.preview = false;
    } else {
      this.preview = true;
    }
    console.log(this.preview);
 }


}
