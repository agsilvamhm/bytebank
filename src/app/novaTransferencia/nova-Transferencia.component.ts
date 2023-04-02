import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-nova-Transferencia',
  templateUrl: './nova-Transferencia.component.html',
  styleUrls: ['./nova-Transferencia.component.scss']
})

export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>()

  valor: number;
  destino: number;

  transferir(){
    const valorEmitir = {valor: this.valor, destino: this.destino}
    this.aoTransferir.emit(valorEmitir);
    
    this.limparCampos();
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
