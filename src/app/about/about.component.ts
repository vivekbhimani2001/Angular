import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {


  notifications=0;
  SppinerStatus=false;
  opened=false;
  panelOpenState = false;

  dataSource = new MatTableDataSource<any>([
    { id: 1, name: 'IPhone', price: 10.99, modelNo:13 },
    { id: 2, name: 'Samsung', price: 19.99, modelNo:12 },
    { id: 3, name: 'RealMe', price: 19.99, modelNo:16 },
    { id: 4, name: 'Xiomi', price: 20, modelNo:16 },
    { id: 5, name: 'Techno', price: 123, modelNo:17 },
    { id: 6, name: 'Redmi', price: 34, modelNo:21 },
    { id: 7, name: 'Nothing', price: 16, modelNo:10 },
    { id: 8, name: 'OnePluse', price: 78, modelNo:22 },
    { id: 9, name: 'Nokia', price: 17, modelNo:23 },
    { id: 10, name: 'Jio', price: 22, modelNo:32 },
    { id: 11, name: 'Poco', price: 191, modelNo:51 },

    // Add more data here
  ]);

  @ViewChild(MatSort) sort:MatSort | any;
  @ViewChild(MatPaginator) paginator: MatPaginator | any;

ngAfterViewInit(){
  this.dataSource.sort = this.sort;
  this.dataSource.paginator = this.paginator;
  console.log("Sort");
}

  displayedColumns: string[] = ['id', 'name', 'price','modelNo'];
  
  LogData(data:any){
    
    console.log(data);
  }

  LoadData(){
    this.SppinerStatus=true
    setTimeout(()=>{
      this.SppinerStatus=false;
    },5000)
  }

  applyFilter(filterValue:any){
    this.dataSource.filter = filterValue.target.value.trim().toLowerCase();

  }

}
