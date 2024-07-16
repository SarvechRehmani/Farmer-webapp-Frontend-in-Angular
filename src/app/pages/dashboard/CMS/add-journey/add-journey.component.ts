import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-journey',
  templateUrl: './add-journey.component.html',
  styleUrl: './add-journey.component.css',
})
export class AddJourneyComponent {
  constructor(private router: ActivatedRoute) {}
  jId: any = this.router.snapshot.params['jId'];

  saveFile: any = {
    bannerId: '',
    banner: null,
    order: '',
    language: '',
    description: '',
  };
  ngOnInit(): void {
    console.log(this.jId);
    if (this.jId) {
      this.saveFile.order = 1;
      this.saveFile.bannerId = this.jId;
      this.saveFile.banner = 'abc.jgp';
      this.saveFile.language = 'en';
      this.saveFile.description = 'description';
    }
    console.log(this.saveFile);
  }

  selectedFile: any = null;

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
    console.log(event.target.files[0]);
    this.saveFile.banner = event.target.files[0] ?? null;
  }

  submit() {
    console.log(this.saveFile);
  }
}
