import { Component, EventEmitter, Output } from "@angular/core";
import { TransferenciaService } from "../transferencia.service";
import { Transferencia } from "../extrato/model/transferencia.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-nova-Transferencia',
  templateUrl: './nova-Transferencia.component.html',
  styleUrls: ['./nova-Transferencia.component.scss']
})

export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>()

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router){

  }

  transferir(){
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino}

    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado)
      this.limparCampos();
      this.router.navigateByUrl('extrato');
    },
   (error) => console.error(error));
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
