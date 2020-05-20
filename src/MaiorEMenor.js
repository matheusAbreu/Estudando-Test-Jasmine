const MaiorEMenor = () => {

    var menor;
    var maior;
    var clazz = {
        
        encontra: (nums=[]) => {
            
            menor = Number.MAX_VALUE;
            maior = Number.MIN_VALUE;

            nums.forEach(num => {
                if(num < menor) menor = num;
                if(num > maior) maior = num;
                
            });
        },
        getMenor: ()=>{return (menor < Number.MAX_VALUE) ? menor : undefined;},
        getMaior: ()=>{return (maior > Number.MIN_VALUE)? maior : undefined;}        
    };
   return clazz;
}
module.exports = MaiorEMenor;