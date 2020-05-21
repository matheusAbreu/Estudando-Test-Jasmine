describe('Paciente', () => {
    var PacienteBuilder = require('./builderObj/PacienteBuilder');
    var test;
    beforeEach(() => {
        test = PacienteBuilder().constroi();
    });

    it('Deve Calcular o imc', () => {
        expect(test.imc()).toEqual(72 / (1.82 * 1.82));
    });

    it('Calculando Batimentos do paciente', () => { 

        expect(test.batimentos()).toEqual(28 * 365 * 24 * 60 * 80);
    });
 });