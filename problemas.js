// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.



const contarLetras = (texto = undefined) =>
    (texto === undefined)
        ? console.error("No ingresaste texto")
        : (typeof texto !== "string")
            ? console.error(`El valor "${texto}" ingresado, No es texto.`)
            : console.info(`"${texto}" tiene: ${texto.match(/[aeiou]/gi).length} Vocales y ${texto.match(/[bcdfghjklmnpqrstvwxyz]/gi).length} consonantes`);

// contarLetras();
// contarLetras(12345);
// contarLetras("Hola Mundo");
// contarLetras("Jaciel Sanchez");

/*
var cadena = "aAeEiIoOuU son vocales";
var numeroVocales = cadena.match(/[aeiou]/gi).length;

console.log(numeroVocales);
*/
// /[bcdfghjklmnpqrstvwxyz]/gi consonants
// /[aeiou]/gi vowels

//19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.




//20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const validarEmail = (email = undefined) => {
    if (email === undefined) return console.error("No ingresaste un correo");

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return ((re.test(String(email).toLowerCase())) === true)
        ? console.info(`El correo "${email}" ingresado es válido.`)
        : console.warn("No ingresaste un correo válido");
}

// validarEmail();
// validarEmail(1234);
// validarEmail("123_91@hotmail.com");
// validarEmail("12391hotmail");

//Solución de Jon

// 18 - 

const contarLetras2 = (cadena = "") => {
    if (!cadena) return console.warn("No ingresaste una cadena de texto");

    if (typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado, No es una cadena de texto.`);

    let vocales = 0,
        consonantes = 0;

    cadena = cadena.toLowerCase();

    for (let letra of cadena) {
        if (/[aeiouáéíóúöü]/.test(letra)) vocales++;

        if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++;
    }

    return console.info({
        cadena,
        vocales,
        consonantes
    })
}

// contarLetras2();
// contarLetras2(3);
// contarLetras2("Hola Mundo");
// contarLetras2("ñoño");
// contarLetras2("lorem ipsum dolor sit amet");


// 19 -

const validarNombre = (nombre = "") => {
    if (!nombre) return console.warn("No ingresaste un nombre");

    if (typeof nombre !== "string") return console.error(`El valor "${nombre}" ingresado, No es una cadena de texto.`);

    let regEx = /^[A-Za-zÑñáéíóúÁÉÍÓÚÖÜüö\s]+$/g.test(nombre);

    return (regEx)
        ? console.info(`"${nombre}", es un nombre válido.`)
        : console.info(`"${nombre}", NO es un nombre válido.`);
}

// validarNombre();
// validarNombre("");
// validarNombre(3);
// validarNombre("Jaciel");
// validarNombre("Jaciel Sanchez");
// validarNombre("Jaciel, 30");

// 20 -

const validarEmail2 = (email = "") => {
    if (!email) return console.warn("No ingresaste un email");

    if (typeof email !== "string") return console.error(`El valor "${email}" ingresado, No es una cadena de texto.`);

    let regEx = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

    return (regEx)
        ? console.info(`"${email}", es un email válido.`)
        : console.info(`"${email}", NO es un email válido.`);
}


// validarEmail2();
// validarEmail2(34);
// validarEmail2("jon,mir,cha@gmail");
// validarEmail2("raul_91@hotmail.com");



// Bonus
// Fusion 19, 20 - 

const validarPatron = (cadena = "", patron = undefined) => {
    if (!cadena) return console.warn("No ingresaste una cadena de texto a evaluar.");

    if (typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado, No es una cadena de texto.`);

    if (patron === undefined) return console.warn("No ingresaste un patrón a evaluar.");

    if (!(patron instanceof RegExp)) return console.error(`El valor "${patron}" ingresado en patron, No es una Expresión Regular.`);

    let regEx = patron.test(cadena);

    return (regEx)
        ? console.info(`"${cadena}", cumple con el patrón ingresado.`)
        : console.info(`"${cadena}", NO cumple con el patrón ingresado.`);
}

/*
validarPatron();
validarPatron({});
validarPatron("Hola Mundo");
validarPatron("hola", "hola");
validarPatron("Jaciel sanchez");
validarPatron("Jaciel sanchez", /^[A-Za-zÑñáéíóúÁÉÍÓÚÖÜüö\s]+$/g);
validarPatron("Jaciel sanchez 19", /^[A-Za-zÑñáéíóúÁÉÍÓÚÖÜüö\s]+$/g);
validarPatron("jaciel_91@mail", /^[A-Za-zÑñáéíóúÁÉÍÓÚÖÜüö\s]+$/g);
validarPatron("rauljaciel_91@gmail", new RegExp("/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/", "i"));
validarPatron("rauljaciel_91@gmail.com", new RegExp("/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/", "i")); //error en programa, da false pero deberia validar a true
validarPatron("jaciel_91@mail.com", /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i);
validarPatron("jaciel_91@mail", /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i);
*/