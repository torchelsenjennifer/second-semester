"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
class Personagem {
    constructor(apelido, classe) {
        // contrutor um objeto é inicializado, como os meus atibutos serão inicialiados
        // entre "()" colocamos as obrigações de preenchimento
        this.raca = ""; //dado de inicialização
        this.apelido = apelido; //dado de inicialização
        this.mana = 0; //dado de inicialização
        this.classe = classe; //dado de inicialização
        this.stamina = 0; //dado de inicialização
        this.forcaAtaque = 0; //dado de inicialização
        this.intelecto = 0; //dado de inicialização
        this.armadura = 0; //dado de inicialização
    }
}
exports.Personagem = Personagem;
