export function calcularIPVA(valor, combustivel, idade){

    if(idade > 20){
        return "ISENTO";
    }

    if (combustivel === "gasolina"){
        return valor * 0.20
    }

    if (combustivel === "etanol"){
        return valor * 0.15
    }

    if (combustivel === "bicombustivel"){
        return valor * 0.10
    }

    if (combustivel === "hibrido"){
        return valor * 0.08
    }

    if (combustivel === "eletrico"){
        return valor * 0.02

    return 0;    
    }
}