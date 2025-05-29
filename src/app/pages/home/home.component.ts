import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Experience } from '../../models/experience';
import { ExperiencesService } from '../../services/experiences.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // Properties
  experiences: Experience[] = [];
  constructor(private experienceService: ExperiencesService, private router: Router) {}

  ngOnInit() {
    // Hämta befintliga inlägg i databasen
    this.experienceService.getData().subscribe((experiences) => {
      this.experiences = experiences;
      console.log(experiences);
    });
  }
  deletePost(id: string) {
    this.experienceService.deleteData(id).subscribe({
      next: () => {
        console.log(`Inlägg med ID ${id} har raderats.`);
        this.experiences.filter(experience => experience._id !== id);
        this.experienceService.getData().subscribe(experiences => {
          this.experiences = experiences;
        });
      },
      error: err => console.error('Fel vid radering:', err)
    });
  }

  updatePost(id: string) {
    this.router.navigate([`edit/${id}`]);
  }
}
