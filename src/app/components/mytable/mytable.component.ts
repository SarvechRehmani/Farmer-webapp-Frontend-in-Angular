import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  inject,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mytable',
  templateUrl: './mytable.component.html',
  styleUrl: './mytable.component.css',
})
export class MytableComponent implements OnInit {
  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {
    console.log(this.Body);
    this.dtOptions = {
      pagingType: 'full_numbers',
      lengthMenu: [5, 10, 25, 50, 100],
    };
  }

  @Input() Head: any[] = [];
  @Input() Body: any[] = [];
  @Input() userAction: boolean = false;
  @Input() roleActions: boolean = false;
  @Input() languagesActions: boolean = false;
  @Input() warehouseActions: boolean = false;

  @Output() update = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();

  private modalService = inject(NgbModal);

  dtOptions: DataTables.Settings = {};

  // ACTIONS-----------------------------
  emitingObject(obj: any) {
    console.log('emitting ' + obj);

    this.update.emit(obj);
  }

  emitingObjectForDelete(obj: any) {
    this.delete.emit(obj);
  }
}
