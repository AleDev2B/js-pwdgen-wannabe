
// Chiedi all’utente il suo nome,
var input_name = prompt("Ciao Frenzo come ti chiami?");

// scrivi il risultato del form sulla pagina html
document.getElementById('input_name').innerHTML = input_name

//  chiedi il suo cognome,
var input_surname = prompt("Qual'è il tuo cognome?");

// scrivi il risultato del form sulla pagina html
document.getElementById('input_surname').innerHTML = input_surname

// poi chiedi il suo colore preferito
var input_color = prompt("L'interrogatorio finisce qui, qual'è il tuo colore preferito?")

// scrivi il risultato del form sulla pagina html
document.getElementById('input_color').innerHTML = input_color

var secure_psw = (input_name + input_surname + input_color);
// Infine scrivi sulla pagina nomecognomecolorepreferito19
document.getElementById('secure_psw').innerHTML = secure_psw
