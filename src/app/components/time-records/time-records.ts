import { Component, computed, signal } from '@angular/core';
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

  feedbackType = signal<string | null>(null);
  feedbackMessage = signal<string | null>(null);
  isLoading = signal(true);

  constructor(
    private fb: FormBuilder,
    private timeRecordService: TimeRecordService,
  ) {
    this.RecordedForm = this.fb.group({
      Matriculation: 1001,
    });
  }

  onSubmit() {
    const { Matriculation } = this.RecordedForm.value;

    this.timeRecordService.Record(Matriculation).subscribe({
      next: (res) => {
        this.isLoading.set(false);
        this.feedbackType.set('success');

        const hora = new Date(res.recordedAt).toLocaleTimeString('pt-BR', {
          hour: '2-digit',
          minute: '2-digit',
        });

        this.feedbackMessage.set(`Ponto registrado às ${hora}`);
        setTimeout(() => this.feedbackMessage.set(null), 4000);
      },
    });
  }
}
