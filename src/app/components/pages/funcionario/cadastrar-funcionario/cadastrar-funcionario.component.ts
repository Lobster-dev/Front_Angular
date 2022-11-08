import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Funcionario } from "src/app/models/Funcionario";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-cadastrar-funcionario",
  templateUrl: "./cadastrar-funcionario.component.html",
  styleUrls: ["./cadastrar-funcionario.component.css"],
})
export class CadastrarFuncionarioComponent implements OnInit {

  nome!: string;
  cpf!: string;
  erro!: string;

  constructor( 
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let { id } = params;
      if (id !== undefined) {
        console.log(id)
      }
    });
  }

  cadastrar(): void {
    console.log("Entrou na função")
    let funcionario : Funcionario = {
      nome: this.nome,
      cpf: this.cpf,
      email: "elkuritza@gmail.com",
      salario: 1000,
      nascimento: '2001-10-29'
    };
    this.http.post<Funcionario>                                      //execução da requisição
    ('https://localhost:5001/api/funcionario/cadastrar', funcionario).subscribe({
      next : (funcionario) => {
        this.router.navigate(["pages/funcionario/listar"])
      },
      error: (erro) => {
        if (erro.status === 400) {
          console.log("Erro de validação")
        }else if (erro.status == 0) {
          this.erro = 
            '{"error":"Falha na comunicação com a API", "recomendation":"Solicite ao seu administrador de redes que reinicie a API"}'
          
        }
      },
    });
    
    
    
  }
  
}
