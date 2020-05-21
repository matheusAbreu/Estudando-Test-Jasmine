describe('Consulta', () => {
    var Consulta = require('../src/Consulta');
    var Paciente = require('../src/Paciente');
    var pacienteTest;
    var consultaTest;

    beforeEach(() => {
        pacienteTest = Paciente('Gui', 28, 72, 1.82);
        //consultaTest = Consulta(pacienteTest, [], true, true);
    }); 

    describe('Testando Retorno', () => { 
        it('Nao deve cobrar retorno', () => { 
            consultaTest = Consulta(pacienteTest, [], true, true);
            expect(consultaTest.preco()).toEqual(0);
        });
    });

    describe('Testando procedimentos', () => { 
        it('Deve cobrar 25 por cada procedimento comum', () => { 
            consultaTest = Consulta(pacienteTest, ['proc1', 'proc2'], false, false);
            expect(consultaTest.preco()).toEqual(50);
        });
    
        it('Preco especifico dependendo do procedimento', () => { 
            consultaTest = Consulta(pacienteTest, ['proc1','gesso','raio-x', 'proc2'], false, false);
            expect(consultaTest.preco()).toEqual(25+55+32+25);
        });    
    });

    describe('Testando tipo de consulta "particular"', () => { 
        it('Consulta particular com procedimentos simpels', () => { 
            consultaTest = Consulta(pacienteTest, ['proc1', 'proc2'], true, false);
            expect(consultaTest.preco()).toEqual(100);
        });
    
        it('Consulta particular com procedimentos com raio-x e gesso', () => { 
            consultaTest = Consulta(pacienteTest, ['proc1','gesso','raio-x', 'proc2'], true, false);
            expect(consultaTest.preco()).toEqual(2 * (25+55+32+25));
        });
    });
 });