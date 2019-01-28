import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';

export interface Options {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.scss']
})
export class CreateSurveyComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      surveyName: ['', [
        Validators.required
      ]],
      questions: this.fb.array([])
    });

  }

  get questionForms() {
    return this.myForm.get('questions') as FormArray;
  }

  addQuestion() {

    const question = this.fb.group({
      questionText: ['', [
        Validators.required
      ]],
    });

    this.questionForms.push(question);
  }

  deleteQuestion(i) {
    this.questionForms.removeAt(i);
  }
}
