import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixed-table',
  templateUrl: './fixed-table.component.html',
  styleUrls: ['./fixed-table.component.css']
})
export class FixedTableComponent implements OnInit {
  listOfData: any[] = [];
  headers: any[] = [];
  isVisible = false;

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.listOfData.push({
        name: `Edward King ${i}`,
        age: 32,
        address: `London`
      });
    }
    for (let i = 0; i < 20; i++) {
      this.headers.push({
        name: `Header ${i}`,
        age: 32,
        address: `London`
      });
    }
  }

  onOpenHander(event: MouseEvent) {
    this.isVisible = true;
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
