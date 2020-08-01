import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-calculo-peq',
  templateUrl: './calculo-peq.component.html',
  styleUrls: ['./calculo-peq.component.scss']
})
export class CalculoPeqComponent implements OnInit {

  public burial: number;
  public tentativeMesh: number;
  public driver: number;
  public depthE1: number;
  public depthE2: number;
  public P1: number;
  public P2: number;
  public P3: number;
  public result_Peq: number;

  constructor(
    private router: Router,
    private storage: StorageService
  ) { }

  ngOnInit() {
    this.result_Peq = this.storage.resultPeq;
  }

  public Peq(): void {
    const r = Math.sqrt(this.tentativeMesh / Math.PI);
    const ro2 = (Math.pow(r, 2)) - (Math.pow(this.burial, 2));
    const qo2 = 2 * r * (r + Number(this.burial));
    const ro2qo2 = ro2 + qo2;
    const depthE1E2 = Number(this.depthE1) + Number(this.depthE2);
    const hi2 = Math.pow(this.depthE1, 2);
    const hi21 = Math.pow(depthE1E2, 2);
    const v12 = 0.5 * (ro2qo2 + hi2 - ((Math.sqrt(Math.pow((ro2qo2 + hi2), 2) - (4 * ro2 * qo2)))));
    const v22 = 0.5 * (ro2qo2 + hi21 - ((Math.sqrt(Math.pow((ro2qo2 + hi21), 2) - (4 * ro2 * qo2)))));
    const f1 = Math.sqrt(1 - (v12 / ro2));
    const f2 = Math.sqrt(1 - (v22 / ro2));
    const f3 = 1;
    this.result_Peq = 1 / ((1 / Number(this.P1)) * (f1) + (1 / Number(this.P2)) * (f2 - f1) + (1 / Number(this.P3)) * (f3 - f2));
    this.storage.resultPeq = this.result_Peq;
  }

  public back() {
    this.router.navigate(['']);
  }

  public calculationK1K2() {
    this.router.navigate(['calculo-k1k2']);
  }
}
