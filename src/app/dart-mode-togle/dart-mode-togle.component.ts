import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';

@Component({
  selector: 'app-dart-mode-togle',
  templateUrl: './dart-mode-togle.component.html',
  styleUrls: ['./dart-mode-togle.component.css']
})
export class DartModeTogleComponent implements OnInit {
  darkMode$ = this.darkModeService.darkMode$;

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit(): void {
  }
  
onToggle(): void {
    this.darkModeService.toggle();
  }
}
