
import { Controller, Get, Res } from '@nestjs/common';
import { ServicoTransacao } from './servicoTransacao';

@Controller('transacoes')
export class ControllerTransacao {
  constructor(private readonly servicoTransacao: ServicoTransacao) {}

  @Get()
  getTransacoes(@Res() res): void {
    this.servicoTransacao.gerarTransacoesFicticias();
    const transacoes = this.servicoTransacao.obterTodasTransacoes();
    res.json(transacoes);
  }
}
