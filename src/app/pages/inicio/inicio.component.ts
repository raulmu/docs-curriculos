import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AssetsService } from 'src/app/services/assets.service';
import { AuthService } from 'src/app/services/auth.service';
import { NavigateService } from 'src/app/services/navigate.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
  constructor(public authService: AuthService, public nav: NavigateService, public assets: AssetsService) {}

  ngOnInit(): void {}

  anoAtual(): string {
    return new Date().getFullYear().toString();
  }
}
