import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpDataService } from 'src/app/service/participants-service.service';
import { HttpCenterService } from 'src/app/service/centers-service.service';
import { Participant } from 'src/app/models/participant.model';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss'],
})
export class RecordComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource!: MatTableDataSource<Participant>;
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastname',
    'marathonCenterName',
    'ranking',
    'recordTime',
  ];

  constructor(
    private httpDataService: HttpDataService,
    private httpCenterService: HttpCenterService
  ) {
    this.dataSource = new MatTableDataSource<Participant>();
    this.getList();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getList() {
    this.httpDataService.getList().subscribe((data) => {
      const firstPlaces: any = {};
      const newData: any = [];

      data.forEach((item: any) => {
        if (!firstPlaces[item.centerId]) {
          firstPlaces[item.centerId] = item;
          newData.push(item);
        }
      });

      newData.forEach((item: Participant) => {
        this.httpCenterService.getItem(item.id).subscribe((centerData: any) => {
          item.marathonCenterName = centerData.name;
        });
      });

      this.dataSource.data = newData;
    });
  }
}
