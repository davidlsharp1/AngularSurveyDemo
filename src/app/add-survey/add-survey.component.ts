import { Question } from './../Models/Question';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AddQuestionComponent } from '../add-question/add-question.component';

@Component({
  selector: 'app-add-survey',
  templateUrl: './add-survey.component.html',
  styleUrls: ['./add-survey.component.scss']
})
export class AddSurveyComponent implements OnInit {

  myForm: FormGroup;
  preview = false;
  addQuestion = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      surveyName: [ '', Validators.required]
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

  AddQuestion(){
    this.addQuestion = true;
  }

}
