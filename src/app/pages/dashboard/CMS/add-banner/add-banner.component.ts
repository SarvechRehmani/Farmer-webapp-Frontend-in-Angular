import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-banner',
  templateUrl: './add-banner.component.html',
  styleUrl: './add-banner.component.css',
})
export class AddBannerComponent implements OnInit {
  constructor(private router: ActivatedRoute) {}
  bId: any = this.router.snapshot.params['bId'];

  saveFile: any = {
    bannerId: '',
    banner: null,
    order: '',
    language: '',
  };
  ngOnInit(): void {
    console.log(this.bId);
    if (this.bId) {
      this.saveFile.order = 1;
      this.saveFile.bannerId = this.bId;
      this.saveFile.banner = 'abc.jgp';
      this.saveFile.language = 'en';
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
