import { Component, OnInit } from '@angular/core';
import { IssueService } from '/home/prathamesh/Documents/Mean Stack/frontend/src/app/issue.service';
import { ReactiveFormsModule } from '@angular/forms';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {  createForm: FormGroup;  constructor(private issueService: IssueService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      title: ['', Validators.required],
      responsible: '',
      description: '',
      severity: ''
    });
  }  addIssue(title, responsible, description, severity) {
    this.issueService.addIssue(title, responsible, description, severity).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }  ngOnInit() {
  }}
