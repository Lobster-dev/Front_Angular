import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/Funcionario';

@Component({
  selector: 'app-listar-funcionario',
  templateUrl: './listar-funcionario.component.html',
  styleUrls: ['./listar-funcionario.component.css']
})
export class ListarFuncionarioComponent implements OnInit {
  //ngFor
  funcionarios!: Funcionario[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Funcionario[]>('https://localhost:5001/api/funcionario/listar').
    //execução da requisição
    subscribe({
      next: (funcionarios) => {
        this.funcionarios = funcionarios;
      }
    });
  }

  deletar(funcionario_id:number): void{
    console.log("Iniciando remoção do funcionario id:",funcionario_id)
    // Para interpolar pode-se usar `https://localhost:5001/api/funcionario/deletar/${funcionario_id}`
    this.http.delete<Funcionario>(
      'https://localhost:5001/api/funcionario/deletar/'+funcionario_id
    ).subscribe({
      next : (funcionario) => {
        this.ngOnInit()
      },
      error: (erro) => {
        console.log("não foi possivel deletar o usuario")
      }
    })

    
    // se der certo  this.ngOnInit
  }

}