import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Schedule } from 'src/app/models/schedule';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'app-schedule-detail',
  templateUrl: './schedule-detail.component.html',
  styleUrls: ['./schedule-detail.component.css']
})
export class ScheduleDetailComponent implements OnInit{

  schedules: any = [];
  selectedSchedule!: Schedule;

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    this.loadSchedule()
  }

  loadSchedule() {
    return this.scheduleService.getSchedule().subscribe(schedules => {
      console.log(schedules);
      this.schedules = schedules;
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

  setCurrent() {
    for(var schedule of this.schedules) {
      console.log(schedule)
      if(schedule.current) {
        this.selectedSchedule = schedule;
      }
    }
  }

  assignWeekToView(selectedSchedule: Schedule) {
    console.log(selectedSchedule)
    console.log(this.schedules)
}

}

