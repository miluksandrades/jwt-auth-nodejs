import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unconfigured',
  templateUrl: './unconfigured.component.html',
  styleUrls: ['./unconfigured.component.css']
})
export class UnconfiguredComponent implements OnInit {

  public listonu = [
    { id: 1, sn: '23HWTC0DB78984', onu: 'HWTC0DB78984' },
    { id: 2, sn: '23HWTC8B6C5A84', onu: 'HWTC8B6C5A84' },
    { id: 3, sn: '23HWTC648DE39E', onu: 'HWTC648DE39E' },
    { id: 4, sn: '23HWTC008CEA9E', onu: 'HWTC008CEA9E' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  reload() {
    window.location.reload();
  }

}
