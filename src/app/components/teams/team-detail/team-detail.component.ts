import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { Team } from '../../../models/team';
import { TeamService } from '../../../services/team.service';
import { environment } from 'src/environments/environment';
import { Membership } from 'src/app/models/membership';
import { OrderByPipe } from 'src/app/order-by.pipe';

@Component({
    selector: 'app-team-detail',
    imports: [
        CommonModule,
        OrderByPipe
    ],
    templateUrl: './team-detail.component.html',
    styleUrls: ['./team-detail.component.css'],
})
export class TeamDetailComponent implements OnInit {

  team: Team | undefined;
  memberships: Membership[] | undefined;
  public imageDir = environment.assetBasePath;

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTeam();
    this.getMemberships();
  }

  getTeam(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.teamService.getTeam(id)
      .subscribe(team => this.team = team)
  }

  getMemberships(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.teamService.getTeamMemberships(id)
      .subscribe(memberships => {
        console.log('Loaded memberships:', memberships); // Log memberships
        this.memberships = memberships;
      });
  }

  goBack(): void {
    this.location.back();
  }

}
