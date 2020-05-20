//import { MaiorEMenor } from "../src/MaiorEMenor.js";

describe("MaioEMenor", () => {
    var MaiorEMenor = require('../src/MaiorEMenor');
    var test;
    beforeEach(()=>{
        test = MaiorEMenor();
    })
    it("Deve entender numeros em ordem sequencial", () =>{
        
        test.encontra([7,6,5,4]);

        expect(test.getMaior()).toEqual(7);
        expect(test.getMenor()).toEqual(4);
    });

});