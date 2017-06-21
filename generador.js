/** Generadores de Javascript */

function* fibonacci() {
    let a = 0, b = 1;

    while(true) {
        let f = a;
        a = b;
        b = f + a;
        let reset = yield f /* yield indica que cuando llamemos la función
                            después de la primera vez, esta iniciará en la
                            línea después de yield */
        
        if(reset)  a = 0, b = 1;
    }
}

const fibo = fibonacci();

fibo.next(); //0
fibo.next(); //1
fibo.next(); //1
fibo.next(); //2
fibo.next(); //3
fibo.next(); //5
fibo.next(); //8


