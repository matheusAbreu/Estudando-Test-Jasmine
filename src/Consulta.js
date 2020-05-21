const Consulta = (paciente, procedimentos, particular, retorno) => {

    var clazz = {
        preco: () => {
            var precoFinal = 0;

            if (!retorno)
            {
                procedimentos.forEach(prod => {
                    if ('raio-x' === prod)
                        precoFinal += 55;
                    else if ('gesso' === prod)
                        precoFinal += 32;
                    else
                        precoFinal += 25;
                });
                if (particular)
                {
                    precoFinal *= 2;
                }           
            
            }
            
            return precoFinal;
        }
    };

    return clazz;
};

module.exports = Consulta;