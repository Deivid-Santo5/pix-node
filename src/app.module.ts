import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransacoesModule } from './PayHub/transacoes.module';


@Module({
  imports: [TransacoesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

