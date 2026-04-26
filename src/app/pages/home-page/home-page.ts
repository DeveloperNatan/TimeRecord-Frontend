import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TimeRecords } from '../../components/time-records/time-records';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, TimeRecords],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  private _date = signal(new Date());

  hour = computed(() =>
    this._date().toLocaleString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }),
  );
  day = computed(() =>
    this._date().toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }),
  );
  weekday = computed(() =>
    this._date().toLocaleString('pt-br', {
      weekday: 'long',
    }),
  );

  ngOnInit() {
    interval(1000).subscribe(() => {
      this._date.set(new Date());
    });
  }
}
