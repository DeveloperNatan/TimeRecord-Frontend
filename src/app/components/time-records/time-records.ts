import { Component, computed, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TimeRecordService } from '../../services/time-record';
import { DatePipe } from '@angular/common';
import { interval } from 'rxjs';

@Component({
  selector: 'app-time-records',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './time-records.html',
  styleUrl: './time-records.css',
})
export class TimeRecords {
  RecordedForm: FormGroup;

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

  constructor(
    private fb: FormBuilder,
    private timeRecordService: TimeRecordService,
  ) {
    this.RecordedForm = this.fb.group({
      Matriculation: ['1001'],
    });
  }

  onSubmit() {
    const { Matriculation } = this.RecordedForm.value;

    this.timeRecordService.Record(Matriculation).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => console.error(err),
    });
  }
}
