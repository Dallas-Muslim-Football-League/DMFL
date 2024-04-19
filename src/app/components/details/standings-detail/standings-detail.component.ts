import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute,
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
      // this.standings = standings.sort((a, b) => {
      //   if (a.winPercentage == b.winPercentage) {
      //     return a.pointDifferential > b.pointDifferential ? -1 : 1
      //   } else {
      //     return a.winPercentage > b.winPercentage ? -1 : 1
      //   }
      // })
    });
  }



  goBack(): void {
    this.location.back();
  }

}
