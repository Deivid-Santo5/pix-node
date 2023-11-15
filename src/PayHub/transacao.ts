
export class Transacao {
    public data: string;
    public valor: number;
    public usuarioOrigem: string;
    public usuarioDestino: string;
    public chavePixDestino: string;
    public sucesso: boolean;
  
    constructor(data: string, valor: number, usuarioOrigem: string, usuarioDestino: string, chavePixDestino: string) {
      this.data = data;
      this.valor = valor;
      this.usuarioOrigem = usuarioOrigem;
      this.usuarioDestino = usuarioDestino;
      this.chavePixDestino = chavePixDestino;
      this.sucesso = true;
    }
  }
  