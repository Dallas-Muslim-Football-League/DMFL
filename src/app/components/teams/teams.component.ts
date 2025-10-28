import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Team } from '../../models/team';
import { TeamService } from '../../services/team.service';
import { Router, RouterModule } from '@angular/router';
import { OrderByPipe } from 'src/app/pipes/order-by.pipe';

@Component({
    selector: 'app-teams',
    imports: [
        CommonModule,
        RouterModule,
        OrderByPipe
    ],
    templateUrl: './teams.component.html',
    styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: any = [];

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.getTeams();
  }

  // Get teams list
  loadTeams() {
    return this.teamService.getTeamsUrl().subscribe((data: {}) => {
      this.teams = data;
    });
  }

  getTeams(): void {
    this.teamService.getTeamsUrl()
      .subscribe(teams => this.teams = teams);
  }

}
