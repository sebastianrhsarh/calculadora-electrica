import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculo-rms',
  templateUrl: './calculo-rms.component.html',
  styleUrls: ['./calculo-rms.component.scss']
})
export class CalculoRmsComponent implements OnInit {

  public d: number;
  public lCu: number;
  public result_K1: number;
  public result_K2: number;
  public h: number;
  public s: number;
  public result_Peq: number;
  public result_Rms: number;


  constructor(
    private router: Router,
    private storage: StorageService
  ) { }

  ngOnInit() {
    this.result_Peq = this.storage.resultPeq;
    this.result_K1 = this.storage.resultk1;
    this.result_K2 = this.storage.resultk2;
    this.result_Rms = this.storage.resultRms;
    this.h = this.storage.h;
    this.s = this.storage.s;
  }

  public Rms(): void {
    const c1 = (this.result_Peq / (Math.PI * Number(this.lCu)));
    const d1 = 2 * Math.sqrt(Number(this.d) / Math.PI);
    const d2 = d1 / 1000;
    const c2 = Math.log10((2 * Number(this.lCu)) / (Math.sqrt(this.h * d2)));
    const c3 = (this.result_K1 * Number(this.lCu) / Math.sqrt(this.s)) - this.result_K2;
    this.result_Rms = c1 * (c2 + c3);
    this.storage.resultRms = this.result_Rms;
  }

  public back() {
    this.router.navigate(['']);
  }

  public calculationK1K2() {
    this.router.navigate(['calculo-k1k2']);
  }

}
