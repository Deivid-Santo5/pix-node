
import { Injectable } from '@nestjs/common';
import { Transacao } from './transacao';

@Injectable()
export class ServicoTransacao {
  private transacoes: Transacao[] = [];

  gerarTransacoesFicticias(): void {
    const transacao1 = new Transacao("12-11-2023", 10.50, "Deivid", "Pedro", "firegame@gamil.com");
    const transacao2 = new Transacao("14-11-2023", 189.66, "Thiago", "Diego", "052.056.548-53");
    const transacao3 = new Transacao("11-11-2023", 236.52, "Roney", "Cristian", "27986325663");

    this.transacoes.push(transacao1, transacao2, transacao3);
  }

  obterTodasTransacoes(): Transacao[] {
    return this.transacoes;
  }
}
