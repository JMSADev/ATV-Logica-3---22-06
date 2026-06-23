import { calcularIPVA } from "./script_calculo.js";

const form =
document.getElementById("formVeiculo");
form.addEventListener("submit", function(event){
    event.preventDefault();

    let modelo =
    document.getElementById("modelo").value;

    let marca =
    document.getElementById("marca").value;

    let placa =
    document.getElementById("placa").value;

    let ano =
    Number(document.getElementById("ano").value);

    let valor =
    Number(document.getElementById("valor").value);

    let combustivelSelecionado =
    document.querySelector(
        'input[name="combustivel"]:checked'
    );

    if(!combustivelSelecionado){
        alert("Selecione um combustível.");
        return;
    }

    let combustivel =
    combustivelSelecionado.value;

    let anoAtual=
    new Date().getFullYear();

    let idade =
    anoAtual - ano;

    let seguro =
    valor * 0.10;

    let ipva =
    calcularIPVA(
        valor, combustivel, idade
    );

    let licenciamento = 150;

    let valorFinal;

    if(ipva === "ISENTO"){
        
        valorFinal = seguro + 150
    
    }
    else{

        valorFinal = seguro + ipva + 150;
    }

    let lista =
    document.getElementById(
        "listaVeiculos"
    );

    lista.innerHTML += `
    <div class="card">
    <p><strong>Modelo:</strong> ${modelo}</p>
    <p><strong>Marca:</strong> ${marca}</p>
    <p><strong>Placa:</strong> ${placa}</p>
    <p><strong>Idade:</strong> ${idade} anos</p>

    <p><strong>Seguro:</strong>R$ ${seguro.toFixed(2)}</p>

    <p><strong>IPVA:</strong>
    ${typeof ipva === "number"
        ? "R$ " + ipva.toFixed(2)
        : ipva}
    </p>


    <p><strong>Valor Final:</strong> R$ ${valorFinal.toFixed(2)}</p>

    </div>
    `;

    form.reset();
});

window.limparVeiculos = function(){

    let confirmar =
    confirm("Deseja realmente remover todos os veículos?");

    if(confirmar){

        let lista =
        document.getElementById("listaVeiculos");

        lista.innerHTML = "";
    }
}