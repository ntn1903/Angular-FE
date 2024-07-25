import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule, ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';
import { LoaderService } from 'src/app/base/loader.service';

@Component({
  selector: 'vex-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {

  @Input() color: ThemePalette = 'primary';
  @Input() mode: ProgressSpinnerMode = 'indeterminate';
  @Input() value = 50;


  constructor(private loaderService: LoaderService) {
    this.loaderService.isLoading$.subscribe(value => {
      let htmlLoading = document.getElementById('idLoading');
      if (htmlLoading) htmlLoading.style.display = value ? 'block' : 'none';
    });
  }
}
