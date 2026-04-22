import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TimeRecordService } from '../../services/time-record';

@Component({
  selector: 'app-time-records',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './time-records.html',
  styleUrl: './time-records.css',
})
export class TimeRecords {
  RecordedForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private timeRecordService: TimeRecordService,
  ) {
    this.RecordedForm = this.fb.group({
      Matriculation: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  onSubmit() {
    if (this.RecordedForm.invalid) return;

    const { Matriculation } = this.RecordedForm.value;

    this.timeRecordService.Record(Matriculation).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => console.error(err),
    });
  }
}
