import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  data: any[] = []; // Your API data will be stored here
  filteredData: any[] = [];
  searchText: string = '';
  category: string = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // Simulate fetching data from an API
    this.data = [
      { name: 'Item 1', category: 'new', date: '2023-07-25' },
      { name: 'Item 2', category: 'failed', date: '2023-07-24' },
      // Add more data...
    ];

    this.route.queryParamMap.subscribe((params: ParamMap) => {
      this.category = params.get('category') || '';
      this.filterData();
    });
  }

  filterData() {
    let filteredData = this.data;

    // Filter by category
    if (this.category) {
      filteredData = filteredData.filter(item => item.category === this.category);
    }

    // Filter by search text
    if (this.searchText) {
      filteredData = filteredData.filter(item =>
        item.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }

    // Apply sorting logic - implement sortByDate() and sortAlphabetically() functions
    if (this.category) {
      filteredData = filteredData.filter(item => item.category === this.category);
    }

    // Apply sorting by date logic
    filteredData = filteredData.sort((a, b) => this.compareDates(a.date, b.date));

    this.filteredData = filteredData;
  }

  filterByCategory(category: string) {
    this.category = category;
    this.router.navigate([''], { queryParams: { category: category } });
  }

  sortByDate() {
    this.filterData();
  }

  sortAlphabetically() {
    // Implement sorting alphabetically logic
    this.filterData();
  }

  filterBySearch() {
    this.filterData();
  }

  private compareDates(dateA: string, dateB: string): number {
    const dateAObj = new Date(dateA);
    const dateBObj = new Date(dateB);
    return dateAObj.getTime() - dateBObj.getTime();
  }
}
