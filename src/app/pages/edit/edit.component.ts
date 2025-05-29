import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExperiencesService } from '../../services/experiences.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from '../../models/experience';

@Component({
  selector: 'app-edit',
  imports: [CommonModule, FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
// Properties
  _id: string = '';
  companyname: string = '';
  jobtitle: string = '';
  location: string = '';
  startdate: string = '';
  enddate: string = '';
  description: string = '';
  error: string = '';
  chosenExperience: Experience = {
    _id: this._id,
    companyname: this.companyname,
    jobtitle: this.jobtitle,
    location: this.location,
    startdate: this.startdate,
    enddate: this.enddate,
    description: this.description
  };

  constructor( private experienceService: ExperiencesService, private router: Router, private route: ActivatedRoute) {}
  
  ngOnInit() {
    this._id = String(this.route.snapshot.paramMap.get('_id'));
    this.experienceService.getChosenData(this._id).subscribe(experience => {
      this.chosenExperience = experience;
    });
  }

  editData() {
    this.experienceService.updateData(this._id, this.chosenExperience).subscribe({
      next: response => {
        console.log(response);
        this.router.navigate(['/']);
      },
      error: err => {
        this.error = err.error.message;
      }
    });

  }
}
