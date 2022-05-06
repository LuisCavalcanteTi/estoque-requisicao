import { Component, OnInit } from '@angular/core';
import { Eprodutos } from 'src/app/models/estoque/Eprodutos';
import { ProdutosService } from 'src/app/service/estoque/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {


  listarProdutos: any;
  constructor(private service: ProdutosService) { }

  ngOnInit() {
    this.service.verProdutos().subscribe((eprodutos: Eprodutos[]) => {
      this.listarProdutos = eprodutos;
      console.log(this.listarProdutos);

    })

  }


}
