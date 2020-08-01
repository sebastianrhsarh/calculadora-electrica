import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public resultPeq: number;
  public resultk1: number;
  public resultk2: number;
  public h: number;
  public s: number;
  public resultRms: number;

  constructor() { }
}
