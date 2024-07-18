import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatToolbarModule, MatIconModule, MatCardModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit{

  courses: Course[] = [];
  displayedColumns = ['name', 'category']

  //coursesService: CoursesService;

  constructor(private coursesService: CoursesService){
    //this.coursesService = new CoursesService();
    
    this.courses = this.coursesService.list();
  }

  ngOnInit(): void {

  }

}
