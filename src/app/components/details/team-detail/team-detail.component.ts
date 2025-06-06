import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Team } from '../../../models/team';
import { TeamService } from '../../../services/team.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-team-detail',
    templateUrl: './team-detail.component.html',
    styleUrls: ['./team-detail.component.css'],
    standalone: false
})
export class TeamDetailComponent implements OnInit {

  team: Team | undefined;
  public imageDir = environment.assetBasePath;

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTeam();
  }

  getTeam(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.teamService.getTeam(id)
      .subscribe(team => this.team = team)
  }

  goBack(): void {
    this.location.back();
  }

}
