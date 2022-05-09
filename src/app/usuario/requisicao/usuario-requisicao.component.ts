import { Component, OnInit } from '@angular/core';
import { Urequisicao } from 'src/app/models/usuario/Urequisicao';
import { UrequisicaoService } from 'src/app/service/usuario/Urequisicao.service';

@Component({
  selector: 'app-usuario-requisicao',
  templateUrl: './usuario-requisicao.component.html',
  styleUrls: ['./usuario-requisicao.component.scss']
})


export class UsuarioRequisicaoComponent implements OnInit {



  codigoProduto!: string;
  descricao !: string;
  quantidade !: string;
  medida !: string;



  constructor(private urequisicaoService: UrequisicaoService) {  }

    formRequisicao: Urequisicao = {
    codigoProduto: this.codigoProduto ,
    descricao: this.descricao,
    quantidade: this.codigoProduto,
    medida: this.medida

  };




  ngOnInit(): void {

  }



  salvarRequisicao(urequisicao:Urequisicao){

    console.log(this.formRequisicao);

    console.log(this.codigoProduto);
    console.log(this.descricao);
    console.log(this.quantidade);
    console.log(this.medida);

    this.urequisicaoService.salvarRequisicao(this.formRequisicao).subscribe(() =>
    {
      console.log(this.formRequisicao);
      alert('Success!');
    },
    () => {
      console.log(this.formRequisicao);
      alert('Error');
    });
    }


    }



