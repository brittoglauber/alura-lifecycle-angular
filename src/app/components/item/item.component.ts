import { Component, OnInit, OnChanges, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {

  @Input() item!: Item
  @Output() emitindoItemParaEditar = new EventEmitter()
  @Output() emitindoIdParaDeletar = new EventEmitter()

  faPen = faPen;
  faTrash = faTrash

  constructor(private listaService: ListaDeCompraService) { }

  ngOnInit(): void {}
  ngOnChanges(): void {}
  ngOnDestroy(): void {}

  editarItem() {
    this.emitindoItemParaEditar.emit(this.item)
  }

  deletarItem() {
    this.emitindoIdParaDeletar.emit(this.item.id)
  }
}
