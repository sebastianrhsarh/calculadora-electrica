import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-calculo-k1k2',
  templateUrl: './calculo-k1k2.component.html',
  styleUrls: ['./calculo-k1k2.component.scss']
})
export class CalculoK1k2Component implements OnInit {

  public h: number;
  public s: number;
  public A: number;
  public B: number;
  public result_K1: number;
  public result_K2: number;

  constructor(
    private router: Router,
    private storage: StorageService
  ) { }

  ngOnInit() {
    this.result_K1 = this.storage.resultk1;
    this.result_K2 = this.storage.resultk2;
  }


  public k1(): void {
    const c1 = 1.43;
    const c2 = 2.3;
    const c3 = 0.044;
    this.result_K1 = c1 - ((c2 * Number(this.h)) / Math.sqrt(this.s)) - (c3 * (Number(this.A) / Number(this.B)));
    this.storage.resultk1 = this.result_K1;
    this.storage.h = this.h;
    this.storage.s = this.s;
  }

  public k2(): void {
    const c1 = 5.5;
    const c2 = 8;
    const c3 = 0.15;
    this.result_K2 = c1 - ((c2 * Number(this.h)) / Math.sqrt(this.s)) + ((c3 - (Number(this.h) / Math.sqrt(this.s))) * (Number(this.A) / Number(this.B)));
    this.storage.resultk2 = this.result_K2;
  }

  public k1k2() {
    this.k1();
    this.k2();
    this.calculationRms();
  }

  public back() {
    this.router.navigate(['']);
  }

  public calculationPeq() {
    this.router.navigate(['calculo-peq']);
  }

  public calculationRms() {
    this.router.navigate(['calculo-rms']);
  }

}
