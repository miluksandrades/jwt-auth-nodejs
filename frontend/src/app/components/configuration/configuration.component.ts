import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  public onu: any;

  public vlan = [101, 102, 103, 110]

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((params: Params) =>{
      const onu = params['onu'];

      this.onu = onu;
    })
  }

  ngOnInit(): void {
  }

}
