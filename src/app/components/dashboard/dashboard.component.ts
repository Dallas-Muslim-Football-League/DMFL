import { Component, OnInit } from '@angular/core';
import { Team } from '../../models/team';
import { TeamService } from '../../services/team.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    standalone: false
})
export class DashboardComponent implements OnInit {
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
