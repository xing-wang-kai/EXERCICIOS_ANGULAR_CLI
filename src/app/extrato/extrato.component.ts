import { Component, OnInit, Input } from '@angular/core';
import { TransferenciasServiceService } from '../service/transferencias-service.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {


  transferencias: any[];

  constructor(private service: TransferenciasServiceService){}
  ngOnInit(): void {
    this.service.litar().subscribe((transferencia)=>{
      console.table(transferencia);
      this.transferencias = transferencia;
    })
  }

}
