import { Component, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bai18',
  standalone: false,
  templateUrl: './bai18.html',
  styleUrl: './bai18.css'
})
export class Bai18 {

  customerGroups: any[] = [];

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {

    console.log('BAI18 BAT DAU');

    this.http.get<any[]>('assets/data/customers.json').subscribe({
      next: (data) => {

        console.log('DATA NHAN DUOC:', data);

        this.customerGroups = data;

        // Bắt Angular cập nhật lại giao diện
        this.cdr.detectChanges();

      },
      error: (error) => {
        console.error('HTTP ERROR:', error);
      }
    });

  }
}