import { Component, OnInit } from '@angular/core';
import { Team } from '../../models/team';
import { TeamService } from '../../services/team.service';

@Component({
    selector: 'app-teams',
    templateUrl: './teams.component.html',
    styleUrls: ['./teams.component.css'],
    standalone: false
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
