const expect = require('chai').expect;
const platzom = require('..').default;

describe('#platzom', function() {

    it('Si la palabra termina en "ar" se le quitan esos dos caracteres', function (){ 
        const translation = platzom('programar');

        expect(translation).to.equal('program');
    });

    it('Si la palabra inicia con Z, se le añade "pe" al final', function (){ 
        const translation = platzom('zorro');
        const translation2 = platzom('zarpar');

        expect(translation).to.equal('zorrope');
        expect(translation2).to.equal('zarppe');
    });

    it('Si la palabra traducida tiene 10 o más letras, se debe partir a la mitad y unir con un guión del medio', function (){ 
        const translation = platzom('abecedario');
        const translation2 = platzom('sometemos');

        expect(translation).to.equal('abece-dario');
        expect(translation2).to.equal('SoMeTeMoS');

    });

    it('Si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palaba intercalando mayúsculas y minúsculas', function (){ 
        const translation = platzom('amar');
        const translation2 = platzom('ese');

        expect(translation).to.equal('am');
        expect(translation2).to.equal('EsE');
    });

})