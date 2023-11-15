
import { Module } from '@nestjs/common';
import { ServicoTransacao } from './servicoTransacao';
import { ControllerTransacao } from './controllerTransacao';

@Module({
  providers: [ServicoTransacao],
  controllers: [ControllerTransacao],
})
export class TransacoesModule {}
