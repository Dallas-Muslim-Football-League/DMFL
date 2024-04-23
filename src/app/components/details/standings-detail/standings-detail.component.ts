import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { StandingService } from 'src/app/services/standing.service';

@Component({
  selector: 'app-standings-detail',
  templateUrl: './standings-detail.component.html',
  styleUrls: ['./standings-detail.component.css']
})
export class StandingsDetailComponent implements OnInit {

  standings: any = [];

  constructor(
    private location: Location,
    private standingService: StandingService
  ) { }

  ngOnInit(): void {
    this.loadStandings()
  }

  loadStandings() {
    return this.standingService.getStandings().subscribe(standings => {
      console.log(standings)
      this.standings = standings;
    });
  }

  goBack(): void {
    this.location.back();
  }

}
