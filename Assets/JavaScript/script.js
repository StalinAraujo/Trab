const pesquisa = document.querySelector('input');
const lupa = document.querySelector('#imgLupa');
const nome = document.querySelector('#nome');
const status = document.querySelector('#status');
const specie = document.querySelector('#specie');
const gender = document.querySelector('#gender');
const origem = document.querySelector('#origin');
const localizaçao = document.querySelector('#location');
const imagem = document.querySelector('#imagem');
const menu = document.querySelector('#menu');
const nav = document.querySelector('nav');
const button = document.querySelector('#button');
const clear = document.querySelector('#clear');
const idCard = document.querySelector('#idCard');

const status1 = document.querySelector('#status1');
const status2 = document.querySelector('#status2');
const status3 = document.querySelector('#status3');
const status4 = document.querySelector('#status4');

const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');
const img3 = document.querySelector('#img3');
const img4 = document.querySelector('#img4');



var nameLocal1 = localStorage.getItem('namelocal1');
var nameLocal2 = localStorage.getItem('namelocal2');
var nameLocal3 = localStorage.getItem('namelocal3');
var nameLocal4 = localStorage.getItem('namelocal4');

var idLocal1 = localStorage.getItem('idlocal1');
var idLocal2 = localStorage.getItem('idlocal2');
var idLocal3 = localStorage.getItem('idlocal3');
var idLocal4 = localStorage.getItem('idlocal4');

var pesqDig;
var image;
var Nome;

var contadoura = localStorage.getItem('contadoura') || 0;

document.querySelector('#status1').textContent = nameLocal1 || "vazio";
img1.setAttribute("src", "");
document.querySelector('#status2').textContent = nameLocal2 || "vazio";
img1.setAttribute("src", "");
document.querySelector('#status3').textContent = nameLocal3 || "vazio";
img1.setAttribute("src", "");
document.querySelector('#status4').textContent = nameLocal4 || "vazio";
img1.setAttribute("src", "");

img1.setAttribute("src", localStorage.getItem('img1') || "./Assets/Imagens/cartas.svg");
img2.setAttribute("src", localStorage.getItem('img2') || "./Assets/Imagens/cartas.svg");
img3.setAttribute("src", localStorage.getItem('img3') || "./Assets/Imagens/cartas.svg");
img4.setAttribute("src", localStorage.getItem('img4') || "./Assets/Imagens/cartas.svg");

var fechConfig = {
    method: 'GET',
    mode: 'cors',
    cache: 'default' 
}

img1.addEventListener('click', () => {
    
    if(idLocal1 != "") {
    idCard.textContent = idLocal1;
    img1.style.border ="3px solid #ffa844"
    img2.style.border = "1px solid  gray"
    img3.style.border ="1px solid gray"
    img4.style.border ="1px solid gray"

    fetch("https://rickandmortyapi.com/api/character/" + idLocal1, fechConfig)
.then(Response => {Response.json()
.then(Dados => {recebimento(Dados)
})
.catch(error => {`Acesso Negado:${error}`})
})
    }
})

img2.addEventListener('click', () => {
    if(idLocal2 != "") {
    idCard.textContent = idLocal2;
    img1.style.border ="1px solid gray"
    img2.style.border = "3px solid  #ffa844"
    img3.style.border ="1px solid gray"
    img4.style.border ="1px solid gray"
    fetch("https://rickandmortyapi.com/api/character/" + idLocal2, fechConfig)
    .then(Response => {Response.json()
    .then(Dados => {recebimento(Dados)
    })
    .catch(error => {`Acesso Negado:${error}`})
    })
} 
})


img3.addEventListener('click', () => {
    if(idLocal3 != "") {
    idCard.textContent = idLocal3;
    img1.style.border ="1px solid gray"
    img2.style.border = "1px solid  gray"
    img3.style.border ="3px solid #ffa844"
    img4.style.border ="1px solid gray"
    fetch("https://rickandmortyapi.com/api/character/" + idLocal3, fechConfig)
    .then(Response => {Response.json()
    .then(Dados => {recebimento(Dados)
    })
    .catch(error => {`Acesso Negado:${error}`})
    })
}
})


img4.addEventListener('click', () => {
    if(idLocal4 != "") {
    idCard.textContent = idLocal4;
    img1.style.border ="1px solid gray"
    img2.style.border = "1px solid  gray"
    img3.style.border ="1px solid gray"
    img4.style.border ="3px solid #ffa844"
    fetch("https://rickandmortyapi.com/api/character/" + idLocal4, fechConfig)
    .then(Response => {Response.json()
    .then(Dados => {recebimento(Dados)
    })
    .catch(error => {`Acesso Negado:${error}`})
    })
}
})



clear.onclick = function Limpar() {
    localStorage.setItem('contadoura', "0");
    contadoura = 0;
    nameLocal1 =  localStorage.setItem('namelocal1', "");
    nameLocal2 = localStorage.setItem('namelocal2', "");
    nameLocal3 = localStorage.setItem('namelocal3', "");
    nameLocal4 = localStorage.setItem('namelocal4', "");

     idLocal1 = localStorage.setItem('idlocal1', "");
     idLocal2 = localStorage.setItem('idlocal2', "");
     idLocal3 = localStorage.setItem('idlocal3', "");
     idLocal4 = localStorage.setItem('idlocal4', "");



    document.querySelector('#status1').textContent = "Vazio";
        img1.setAttribute("src", "./Assets/Imagens/cartas.svg");
        localStorage.setItem('img1', "./Assets/Imagens/cartas.svg");
    document.querySelector('#status2').textContent = "Vazio";
        img2.setAttribute("src", "./Assets/Imagens/cartas.svg");
        localStorage.setItem('img2', "./Assets/Imagens/cartas.svg");
    document.querySelector('#status3').textContent = "Vazio";
        img3.setAttribute("src", "./Assets/Imagens/cartas.svg");
        localStorage.setItem('img3', "./Assets/Imagens/cartas.svg");
    document.querySelector('#status4').textContent = "Vazio";
        img4.setAttribute("src", "./Assets/Imagens/cartas.svg");
        localStorage.setItem('img4', "./Assets/Imagens/cartas.svg");
  }

lupa.onclick = function () {
    pesqDig = pesquisa.value;
    idCard.textContent = pesqDig;
    fetch("https://rickandmortyapi.com/api/character/" + pesqDig, fechConfig)
.then(Response => {Response.json()
.then(Dados => {recebimento(Dados)
})
.catch(error => {`Acesso Negado:${error}`})
})

img1.style.border ="1px solid gray"
img2.style.border = "1px solid  gray"
img3.style.border ="1px solid gray"
img4.style.border ="1px solid gray"
}

function recebimento(inf) {
    for(let x in inf) {
        if(x == "name") {
            nome.textContent = inf[x];
        }
        if(x == "status") {
            status.textContent = inf[x];
        }
        if(x == "species") {
            specie.textContent = inf[x];
        }
        if(x == "gender") {
            gender.textContent = inf[x];
        }
        if(x == "origin") {
            let filtro = inf[x];
            origem.textContent = filtro["name"];
        }
        if(x == "location") {
            let filtro = inf[x];
            localizaçao.textContent = filtro["name"];
        }
        if(x == "image") {
            image = inf[x];
          imagem.setAttribute("src", inf[x]);
        }
    }

    verificaçao();

}

function verificaçao() { 
    Nome = nome.textContent;

    if(nameLocal1 != Nome && nameLocal2 != Nome && nameLocal3 != Nome && nameLocal4 != Nome && contadoura != 4) {
        button.style.display = "block"
    }else {
        button.style.display = "none"
    }
 }



menu.addEventListener('click', () => {
    nav.classList.toggle('mostrar');
})

button.onclick = function armazenar() { 
    Nome = nome.textContent;
    if(contadoura != 4){

    if(Nome != "")  {
        if(contadoura == 0) {
            document.querySelector('#status1').textContent = Nome;
            img1.setAttribute("src", image);
            localStorage.setItem('contadoura', contadoura);
            nameLocal1 = Nome;
            localStorage.setItem('namelocal1' , nameLocal1);
            localStorage.setItem('img1' , image);
            localStorage.setItem('idlocal1' , pesqDig);
            idLocal1 = pesqDig;
        }

        if(contadoura == 1) {
            document.querySelector('#status2').textContent = Nome;
            img2.setAttribute("src", image);
            localStorage.setItem('contadoura', contadoura);
            nameLocal2 = Nome;
            localStorage.setItem('namelocal2' , nameLocal2);
            localStorage.setItem('img2' , image);
            localStorage.setItem('idlocal2' , pesqDig);
            idLocal2 = pesqDig;
        }

        if(contadoura == 2) {
            console.log("oi")
            document.querySelector('#status3').textContent = Nome;
            img3.setAttribute("src", image);
            localStorage.setItem('contadoura', contadoura);
            nameLocal3 = Nome;
            localStorage.setItem('namelocal3' , nameLocal3);
            localStorage.setItem('img3' , image);
            localStorage.setItem('idlocal3' , pesqDig);
            idLocal3 = pesqDig;
        }
        if(contadoura == 3) {
            document.querySelector('#status4').textContent = Nome;
            img4.setAttribute("src", image);
            localStorage.setItem('contadoura', contadoura);
            nameLocal4 = Nome;
            localStorage.setItem('namelocal4' , nameLocal4);
            localStorage.setItem('img4' , image);
            localStorage.setItem('idlocal4' , pesqDig);
            idLocal4 = pesqDig;
            alert("Você usou todo o seu espaço, click no icone do menu.")
        }

        contadoura += 1;
        button.style.display = "none";

    }else {
        alert("Sem pesquisa");
    }
    }


}




