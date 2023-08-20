export class Personagem {
    constructor(
        protected _nome: string,
        protected _forca: number,
        protected _habilidadeMental: number,
        protected _podeAtaque: number,
        protected _esquiva: number,
        protected _resistencia: number,
        protected _vidaAtual: number,
        protected _esquivaMaxima: number
    ) {}

    // public get nome(): string {
    //     return this._nome;
    // }

    public forca(personagem:Personagem): void {
        console.log("Comportamento Desconhecido")
    }
    
    public habilidadeMental(personagem:Personagem): void {
        console.log("Comportamento Desconhecido")
    }

    public atacar(personagem: Personagem, forca: number): void {
        console.log("Um comportamento desconhecido")
        }
    
    public contraAtacar(personagem:Personagem): void {
        console.log("Comportamento Desconhecido")
    }

    public esquiva(personagem:Personagem): void {
        console.log("Comportamento Desconhecido")
    }

    public resistencia(personagem:Personagem): void {
        console.log("Comportamento Desconhecido")
    }
    public vidaMaxima(personagem:Personagem): void {
        console.log("Comportamento Desconhecido")

    }
    public vidaAtual(personagem:Personagem): void {
        console.log("Comportamento Desconhecido")
    }
 
    public aprimorarHabilidadePrincipal(): void{
        
    }

    public regeneralVida(): void{
    }
   

    }