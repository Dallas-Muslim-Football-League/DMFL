import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Schedule } from 'src/app/models/schedule';
import { OrderByPipe } from 'src/app/order-by.pipe';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
    selector: 'app-schedule-detail',
    imports: [  
      CommonModule,
      RouterModule,
      FormsModule,
      OrderByPipe 
    ],
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

