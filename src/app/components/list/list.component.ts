import { Component, OnInit } from '@angular/core';
import { IssueService } from '/home/prathamesh/Documents/Mean Stack/frontend/src/app/issue.service';
import { Issue } from '/home/prathamesh/Documents/Mean Stack/frontend/src/app/issue.model';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  issues: Issue[];
  displayedColumns = ['title', 'responsible', 'severity', 'status', 'actions'];
  
  constructor(private issueService: IssueService, private router: Router) { }

  ngOnInit() {
    this.fetchIssues();
  }

  fetchIssues() {
    this.issueService
    .getIssues()
    .subscribe((data: Issue[]) => {
      this.issues = data;
      console.log('Data requested ... ');
      console.log(this.issues);
    });
  }  editIssue(id) {
    this.router.navigate([`/edit/${id}`]);
  }  deleteIssue(id) {
    this.issueService.deleteIssue(id).subscribe(() => {
      this.fetchIssues();
    });
  }  

}
