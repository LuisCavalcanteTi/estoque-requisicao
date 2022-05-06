import { Component, OnInit } from '@angular/core';
import { Urequisicao } from 'src/app/models/usuario/Urequisicao';
import { UrequisicaoService } from 'src/app/service/usuario/Urequisicao.service';

@Component({
  selector: 'app-usuario-requisicao',
  templateUrl: './usuario-requisicao.component.html',
  styleUrls: ['./usuario-requisicao.component.scss']
})


export class UsuarioRequisicaoComponent implements OnInit {
  formRequisicao!: Urequisicao;


  constructor(private urequisicaoService: UrequisicaoService) {}





  ngOnInit() {




  }



  salvarRequisicao(urequisicao: Urequisicao){

    console.log(this.formRequisicao);


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



