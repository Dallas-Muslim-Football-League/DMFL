import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Team } from '../../../models/team';
import { TeamService } from '../../../services/team.service';
import { Roster } from 'src/app/models/roster';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css'],
})
export class TeamDetailComponent implements OnInit {

  team: Team | undefined;
  roster: Roster | undefined;

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTeam();
  }

  getTeam(): void {
    const teamId = String(this.route.snapshot.paramMap.get('teamId'));
    this.teamService.getTeam(teamId)
      .subscribe(team => {
        this.team = team
        this.team.rosterMap = new Map(Object.entries(this.team.rosterMap))
        this.roster = team.rosterMap.get('spr-2024')
      })
  }

  goBack(): void {
    this.location.back();
  }

}
