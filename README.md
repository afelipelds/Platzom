# Platzom

Platzom es u idioma inventado para el
[curso de Fundamentos de JavaScript](https://platzi.com/js) de [Platzi](https://platzi.com)


##Descripción del idioma

- Si la palabra termina en 'ar' se le quitan esos dos caracteres
- Si la palabra inicia con Z, se le añade "pe" al final
- Si la palabra traducida tiene 10 o más letras, se debe partir a la mitad y unir con un guión del medio
- Si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palaba intercalando mayúsculas y minúsculas


## Instalación
```
npm install platzom
```


## Uso

```
import platzom from 'platzom'

platzom("programar"));  //Program
platzom("Zorro"));  // Zorrope
platzom("Zarpar"));  //Zarppe
platzom("abecedario"));  //abece-dario
platzom("sometemos"));  //abece-dario
platzom("amar"));  // am
platzom("ese"))  //EsE
```


## Créditos
- [Andrés Felipe Eslava](https://www.facebook.com/661998722)


## Licencia
[MIT](https://opensource.org/licenses/MIT)