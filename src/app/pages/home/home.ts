import { Component, computed, signal } from '@angular/core';
import { TimeRecords } from '../../components/time-records/time-records';
import { DatePipe } from '@angular/common';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [TimeRecords],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

   private _date = signal(new Date());

  day = computed(() =>
    this._date().toLocaleString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }),
  );
  hour = computed(() =>
    this._date().toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }),
  );

  ngOnInit() {
    interval(1000).subscribe(() => {
      this._date.set(new Date());
    });
  }
}
