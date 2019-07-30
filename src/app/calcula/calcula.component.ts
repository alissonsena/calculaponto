import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcula',
  templateUrl: './calcula.component.html',
  styleUrls: ['./calcula.component.css']
})
export class CalculaComponent implements OnInit {

  tolerancia = 9;
  cargaHoraria = 8*60;
  entrada1:string;
  saidaAlmoco:string;
  voltaAlmoco:string;
  horarioSaida:string;
  liberdade:string = null;
  horaExtra:number;
  horaExtraFormatada:string;
  exibirHoraExtra = false;
  exibirTexto = false;
  exibirErro = false;
  exibirHoraAlmocoExcedida = false;

  dtEntrada:number;
  dtSaidaAlmoco:number;
  dtVoltaAlmoco:number;

  ngOnInit() {
    console.log('CalculaComponente Inicializado.');
  }

  onClickCalcular() {
    try {
      this.resetMensagens();
      console.log(this.horarioSaida);
      if(this.horarioSaida == null || this.horarioSaida === "" || typeof this.horarioSaida === "undefined") {
        this.calcularHoraSaida();
      } else {
        this.calcularHoraExtra();
      }
      this.calcularHoraAlmocoExcedida();

      this.exibirTexto = true;
    }
    catch(e) {
      console.log(e);
      this.exibirErro = true;
    }
  
  }

  calcularHoraAlmocoExcedida() {
    this.exibirHoraAlmocoExcedida = false;
    let result = new Date(this.dtSaidaAlmoco).getTime() - new Date(this.dtVoltaAlmoco).getTime();
    if(result < -7200000){
      this.exibirHoraAlmocoExcedida = true;
    }
  }

  onClickLimpar() {
    this.entrada1 = null;
    this.saidaAlmoco = null;
    this.voltaAlmoco = null;
    this.horarioSaida = null;
    this.horaExtra = null;
    this.resetMensagens();
  }

  private calcularHoraExtra() {
      this.prepararDatasBasicas();
      let dtSaida = this.preencherData(this.horarioSaida); 

      let turno1 = (this.dtSaidaAlmoco - this.dtEntrada)/60000;
      let turno2 = (dtSaida - this.dtVoltaAlmoco)/60000;
      this.horaExtra = (turno1 + turno2) - this.cargaHoraria;
      
      if(this.horaExtra >= -9 && this.horaExtra <= 9) {
        this.horaExtra = 0;
        this.horaExtraFormatada = null;
      } else {
        this.exibirHoraExtra = true;
        this.horaExtraFormatada = this.convertMinsToHrsMins(this.horaExtra);
      }
  }

  private calcularHoraSaida() {
      this.prepararDatasBasicas();
      let turno1 = (this.dtSaidaAlmoco - this.dtEntrada)/60000;
      let tempoRestante = (this.cargaHoraria - this.tolerancia) - turno1;
      let dtSaida = new Date(this.dtVoltaAlmoco + (tempoRestante*60000));
      console.log(new Date(dtSaida));

      this.horarioSaida = (dtSaida.getHours() < 10 ? '0' + dtSaida.getHours() : dtSaida.getHours()) 
                        + ':' + (dtSaida.getMinutes() < 10 ? '0' + dtSaida.getMinutes() : dtSaida.getMinutes());
      let dataHoraAtual = new Date().setSeconds(0,0) - 3600000;
      console.log(new Date(dataHoraAtual));
      if(dataHoraAtual < dtSaida.getTime()) {
        this.liberdade = this.convertMinsToHrsMins((dtSaida.setSeconds(0,0) - dataHoraAtual)/60000);
      }
  }

  private resetMensagens() {
    this.exibirTexto = false;
    this.exibirErro = false;
    this.exibirHoraExtra = false;
    this.liberdade = null;
    this.exibirHoraAlmocoExcedida = false;
  }

  private convertMinsToHrsMins(mins) {
    let h = Math.floor(Math.abs(mins) / 60);
    let m = Math.abs(mins) % 60;
    return (h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m);
  }

  private preencherData(horarioString) {
    let horario = horarioString.split(":");
    return new Date().setHours(parseInt(horario[0]),parseInt(horario[1]));
  }

  private prepararDatasBasicas() {
      this.dtEntrada = this.preencherData(this.entrada1);
      this.dtSaidaAlmoco = this.preencherData(this.saidaAlmoco);     
      this.dtVoltaAlmoco = this.preencherData(this.voltaAlmoco);   
  }

}
