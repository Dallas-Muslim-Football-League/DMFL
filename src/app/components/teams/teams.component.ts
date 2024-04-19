import { Component, OnInit } from '@angular/core';
import { Team } from '../../models/team';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams: Team[] = [];

  getTeams(): void {
    this.teamService.getTeamsUrl()
      .subscribe(teams => this.teams = teams);
  }

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.getTeams();
  }

}
