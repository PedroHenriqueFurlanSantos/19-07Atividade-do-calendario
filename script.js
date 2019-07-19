let nome = (prompt("Digite seu nome"));
console.log("Seu nome é:" + nome)

let idade = Number(prompt('digite sua idade'));
console.log('sua idade é :' + idade)

if (idade >= 60) {
    console.log("sua entrada e gratuida")
}
else if (idade >= 0 && idade <= 12) {
    console.log("Vocé paga $12.00.")
}
else if (idade >= 13 && idade <= 17) {
    console.log("Vocé paga $15.00.")
}
else if (idade >= 18 && idade <= 59) {
    let estu = window.confirm("Vocé é estudande")
    if (estu) {
        alert("Vocé paga meia R$17,50")
    }
    else {
        alert("Vocé não é estudate então paga R$35,00")
    }
}

// let nome =(prompt(`Digite seu nome ,`));{
//     confirm("Este e seu nome " + nome + "?");
    
//     }
//     let idade = Number(prompt(`Digite sua idade`));{
//         confirm(" Voce tem " + idade + " anos,");
    
//     }
//     if (idade >= 25 && idade <=60) {
// console.log ("sua idade foi aprovada .");
//     }
    
    
//     else{
//         console.log("sua Idade foi reprovada . ")
//     }
//     let salario = Number(prompt("Digite seu salario ."));{
//         confirm("Seu salario é " + salario + "?");

//     }
//     if (salario>=2000 ){
//         console.log("Seu salario foi aprovado .")

//     }

//     else{
//         console.log("Seu salrio foi aprovado .");
//     }
//     console.log("Voce " + nome + ", com o salario de " + salario + ",pode  pedir emprestimo no maximo de " +(salario*10))
