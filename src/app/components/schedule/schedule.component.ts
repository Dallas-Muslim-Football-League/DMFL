import { Component, OnInit } from '@angular/core';
import { Schedule } from 'src/app/models/schedule';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  schedules: any = [];
  mapKeys: any = [];
  allSchedules: any = [];
  regularSeasonSchedules: any = [];
  postSeasonSchedules: any = [];
  seasonMap = new Map<string, Schedule[]>;
  selectedMapKey!: string;
  selectedSchedule!: Schedule;

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    this.loadSchedule()
  }

  loadSchedule() {
    return this.scheduleService.getSchedule().subscribe(schedules => {
      console.log('Schedules: ', schedules);
      this.allSchedules = schedules;
      this.schedules = schedules;
      this.regularSeasonSchedules = schedules.filter(s => !s.isPlayoffs)
      this.postSeasonSchedules = schedules.filter(s => s.isPlayoffs)

      console.log('Reg season: ', this.regularSeasonSchedules)
      console.log('Post: ', this.postSeasonSchedules)

      if(this.postSeasonSchedules.length > 0) {
        console.log('Here ', this.postSeasonSchedules.length)
        this.seasonMap.set('PostSeason', this.postSeasonSchedules)
      }

      this.seasonMap.set('Regular Season', this.regularSeasonSchedules)

      this.setCurrent()
    });
  }

  // getSchedules(): void {
  //   this.scheduleService.getSchedule()
  //     .subscribe(schedules => {
  //       console.log(schedules)
  //       this.schedules = schedules
  //       this.setCurrent()
  //     })
  // }

  setCurrent1() {
    for(var schedule of this.schedules) {
      console.log(schedule)
      if(schedule.current) {
        this.selectedSchedule = schedule;
      }
    }
  }

  setCurrent() {
    this.seasonMap.forEach((schedules: Schedule[], key: string) => {
      console.log("Key: {}; Value: {}", key, schedules);

      for(var schedule of schedules) {
        console.log(schedule)
        if(schedule.current) {
          this.selectedSchedule = schedule;
          this.selectedMapKey = key
          this.schedules = schedules
          console.log('MapKey: ', this.selectedMapKey)
        }
      }
    });
  }

  updateSchedule(scheduleList: Schedule[]) {
    console.log('Schedule list: ', scheduleList)
    for(var schedule of scheduleList) {
      if(schedule.current) {
        return schedule;
      }
    }
    return scheduleList[scheduleList.length - 1]
  }

  assignWeekToView(selectedSchedule: Schedule) {
    console.log(selectedSchedule)
    console.log(this.schedules)
  }

  getGames(selectedSchedule: Schedule) {
    console.log('This season: ', selectedSchedule)
    console.log('This map: ', this.seasonMap)

    if(!selectedSchedule.isPlayoffs) {
      this.schedules = this.regularSeasonSchedules
      this.selectedSchedule = this.regularSeasonSchedules
      console.log(this.regularSeasonSchedules)
    }

    if(selectedSchedule.isPlayoffs) {
      this.schedules = this.postSeasonSchedules
      this.selectedSchedule = this.postSeasonSchedules
      console.log(this.postSeasonSchedules)
    }
  }

  getSeason(season: string) {
    console.log('This season: ', season)

    if(season == 'Regular Season') {
      this.schedules = this.regularSeasonSchedules
      console.log(this.regularSeasonSchedules)
    }

    if(season == 'PostSeason') {
      this.schedules = this.postSeasonSchedules
      //this.selectedSchedule = this.schedules[0]
      console.log(this.schedules)
      console.log(this.postSeasonSchedules)
    }

    this.selectedSchedule = this.updateSchedule(this.schedules)
    console.log('Selected schedule: ', this.selectedSchedule)
  }

}
