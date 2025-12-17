import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss'],
  standalone: false
})

/**
 * Starter Component
 */
export class StarterComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Pages' },
      { label: 'Starter', active: true }
    ];
  }

  openModel(content: any) {
    this.modalService.open(content, { size: 'lg', centered: true, backdrop: 'static' });
  }
}
