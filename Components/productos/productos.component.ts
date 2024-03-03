import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  modalRef?: BsModalRef;
  NameProducto?:string;
  DesProducto?:string;

  constructor(private modalService: BsModalService) {}
  
  openModal(template: TemplateRef<void>, producto : string, descripcion: string) {
    this.NameProducto = producto;
    this.DesProducto = descripcion;
    this.modalRef = this.modalService.show(template);
  }
}
