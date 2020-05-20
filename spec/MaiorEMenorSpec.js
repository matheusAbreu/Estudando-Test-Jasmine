import { MaiorEMenor } from "../src/MaiorEMenor.js";

describe("MaioEMenor", () => {
    it("Deve entender numeros em ordem sequencial", () =>{
        var test = new MaiorEMenor();
        test.encontra([1,2,3,4]);

        expect(test.pegaMaior().toEqual(4));
        expect(test.pegaMenor().toEqual(1));
    });

});