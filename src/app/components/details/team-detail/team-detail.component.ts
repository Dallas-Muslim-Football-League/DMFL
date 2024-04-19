import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Team } from '../../../models/team';
import { TeamService } from '../../../services/team.service';
import { Roster } from '../../../models/roster';
import { Player } from '../../../models/player';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

  team: Team | undefined;

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTeam();
  }

  getTeam(): void {
    const name = String(this.route.snapshot.paramMap.get('name'));
    this.teamService.getTeam(name)
      .subscribe(team => this.team = team)
  }

  goBack(): void {
    this.location.back();
  }

}
