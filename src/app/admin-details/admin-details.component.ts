import { Component, ElementRef, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent {

  isDropdownOpen: boolean = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  
}



// //isDropdownOpen = false;
// data = ['Hello','Hi','good']
// isOpen: boolean[] = [];

// // @Input() rowId: number;

// constructor(private elRef: ElementRef) {}

// // Function to toggle the dropdown
// toggleDropdown(rowId:any) {
//   console.log(this.isOpen);
//   this.isOpen[rowId] = !this.isOpen[rowId];
//   //this.isDropdownOpen = !this.isDropdownOpen;
// }

// @HostListener('document:click', ['$event'])
// onClick(event: Event) {
//   for (let i = 0; i < this.isOpen.length; i++) {
//     if (this.isOpen[i] && !this.elRef.nativeElement.contains(event.target)) {
//       this.isOpen[i] = false;
//     }
//   }
//   // if (!this.elRef.nativeElement.contains(event.target) && this.isDropdownOpen) {
//   //   this.isDropdownOpen = false;
//   // }
// }

