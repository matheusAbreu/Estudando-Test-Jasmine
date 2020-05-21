describe("MaioEMenor", () => {
    var MaiorEMenor = require('../src/MaiorEMenor');
    var test;
    beforeEach(() => {
        test = MaiorEMenor();
    });
    
    it("Deve entender numeros em ordem descrescente", () =>{
        
        test.encontra([7,6,5,4]);

        expect(test.getMaior()).toEqual(7);
        expect(test.getMenor()).toEqual(4);
    });
    it("Deve entender numeros em ordem crescente", () =>{
        
        test.encontra([7,8,9,10]);

        expect(test.getMaior()).toEqual(10);
        expect(test.getMenor()).toEqual(7);
    });
    it("Teste de um elemento", () =>{
        
        test.encontra([7]);

        expect(test.getMaior()).toEqual(7);
        expect(test.getMenor()).toEqual(7);
    });

});