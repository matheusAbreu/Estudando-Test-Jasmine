var Paciente = require('../../src/Paciente');
const PacienteBuilder = () => {
    
    var nome = "Gui";
    var idade = 28;
    var peso = 72;
    var altura = 1.82;

    var clazz = {
        constroi: () => {
            return Paciente(nome, idade, peso, altura);
        },
        setIdade: (novaIdade) => {
            idade = novaIdade;
            return this;
        },
        setNome: (novoNome) => {
            nome = novoNome;
            return this;
        },
        setPeso: (novoPeso) => { 
            peso = novoPeso;
            return this;
        },
        setAltura: (novaAltura) => { 
            altura = novaAltura;
            return this;
        }
    }

    return clazz;
}

module.exports = PacienteBuilder;