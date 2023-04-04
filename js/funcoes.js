const input2 = document.getElementById('input2');

//neoncontroler
function captura() {
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById('input2');
    input2.innerText = input1;

}

//alterar cores
function cor() {
    const blue = document.getElementById('blue');
    const purple = document.getElementById('purple');
    const red = document.getElementById('red');
    const green = document.getElementById('green');
    const blueIce = document.getElementById('blueIce');
    const pink = document.getElementById('pink');
    const laranja = document.getElementById('laranja');
    const amarelo = document.getElementById('amarelo');
    const brancoN = document.getElementById('brancoN');
    const branco = document.getElementById('branco');
    const input2 = document.getElementById('input2');

    blue.addEventListener('click', function () {
        input2.style.color = "white";
        input2.style.textShadow = "0px 0px 5px #007FFF,0px 0px 10px #007FFF,0px 0px 20px #007FFF,0px 0px 30px #007FFF,0px 0px 40px #007FFF,0px 0px 55px #007FFF,0px 0px 75px #007FFF";

    })
    purple.addEventListener('click', function () {
        input2.style.color = "white";
        input2.style.textShadow = "0px 0px 5px #C301FF,0px 0px 10px #C301FF,0px 0px 20px #C301FF,0px 0px 30px #C301FF,0px 0px 40px #C301FF,0px 0px 55px #C301FF,0px 0px 75px #C301FF";

    })
    red.addEventListener('click', function () {
        input2.style.color = "rgb(255, 255, 255)";
        input2.style.textShadow = "0px 0px 5px #FF0000,0px 0px 10px #FF0000,0px 0px 20px #FF0000,0px 0px 30px #FF0000,0px 0px 40px #FF0000,0px 0px 55px #FF0000,0px 0px 75px #FF0000";
    })
    green.addEventListener('click', function () {
        input2.style.color = "rgb(255, 255, 255)";
        input2.style.textShadow = "0px 0px 5px #00FF7F,0px 0px 10px #00FF7F,0px 0px 20px #00FF7F,0px 0px 30px #00FF7F,0px 0px 40px #00FF7F,0px 0px 55px #00FF7F,0px 0px 75px #00FF7F";
    })
    blueIce.addEventListener('click', function () {
        input2.style.color = "rgb(255, 255, 255)";
        input2.style.textShadow = "0px 0px 5px #00CDF5,0px 0px 10px #00CDF5,0px 0px 20px #00CDF5,0px 0px 30px #00CDF5,0px 0px 40px #00CDF5,0px 0px 55px #00CDF5,0px 0px 75px #00CDF5";
    })
    pink.addEventListener('click', function () {
        input2.style.color = "rgb(255, 255, 255)";
        input2.style.textShadow = "0px 0px 5px #FF007F,0px 0px 10px #FF007F,0px 0px 20px #FF007F,0px 0px 30px #FF007F,0px 0px 40px #FF007F,0px 0px 55px #FF007F,0px 0px 75px #FF007F";
    })
    laranja.addEventListener('click', function () {
        input2.style.color = "rgb(255, 255, 255)";
        input2.style.textShadow = "0px 0px 5px #FF7F00,0px 0px 10px #FF7F00,0px 0px 20px #FF7F00,0px 0px 30px #FF7F00,0px 0px 40px #FF7F00,0px 0px 55px #FF7F00,0px 0px 75px #FF7F00";
    })
    amarelo.addEventListener('click', function () {
        input2.style.color = "rgb(255, 255, 255)";
        input2.style.textShadow = "0px 0px 5px  #FFC901,0px 0px 10px  #FFC901,0px 0px 20px  #FFC901,0px 0px 30px  #FFC901,0px 0px 40px  #FFC901,0px 0px 55px  #FFC901,0px 0px 75px  #FFC901";
    })
    brancoN.addEventListener('click', function () {
        input2.style.color = "rgb(255, 255, 255)";
        input2.style.textShadow = "0px 0px 5px #EDF5DD,0px 0px 10px #EDF5DD,0px 0px 20px #EDF5DD,0px 0px 30px #EDF5DD,0px 0px 40px #EDF5DD,0px 0px 55px #EDF5DD,0px 0px 75px #EDF5DD";
    })
    branco.addEventListener('click', function () {
        input2.style.color = "rgb(255, 255, 255)";
        input2.style.textShadow = "0px 0px 5px rgb(255, 255, 255),0px 0px 10px rgb(255, 255, 255),0px 0px 20px rgb(255, 255, 255),0px 0px 30px rgb(255, 255, 255),0px 0px 40px rgb(255, 255, 255),0px 0px 55px rgb(255, 255, 255),0px 0px 75px rgb(255, 255, 255)";

    })



}

cor();


//desligarNeon
function turnOff() {
    const input2 = document.getElementById('input2');
    const color = window.getComputedStyle(input2, null).getPropertyValue('textShadow');


    if ($('#flexSwitchCheckDefault').is(":checked")) {
        input2.style.color = "rgb(255, 255, 255)";
        input2.style.textShadow = color;
    } else {
        input2.style.color = "#ffffffbf";
        input2.style.webkitTextStroke = "white";
        input2.style.textShadow = "0px 0px 5px black";
    }

}
turnOff()



//function mudar cor fundo
function mudarF() {

    const planoFundo = document.querySelector("#colorFundo");
    const planoFundo1 = document.querySelector("#colorFundo1");
    const planoFundo2 = document.querySelector("#colorFundo2");
    const inputFundo = document.querySelector("#color").value;
    planoFundo.style.background = inputFundo;
    planoFundo1.style.background = inputFundo;
    planoFundo2.style.background = inputFundo;
    planoFundo.style.transition = "all 1s ease-in-out"
    planoFundo1.style.transition = "all 1s ease-in-out"
    planoFundo2.style.transition = "all 1s ease-in-out"

}
//pausarcarrosel



//funçãoavisa
function aviso() {
    const loading = document.getElementById('loading');
    const imgWpp = document.getElementById('imgWpp');
    const inputLargura = document.getElementById("inputLargura").value;
    const input1 = document.getElementById("input1").value;
    const input1Borda = document.getElementById("input1")
    const cor = document.querySelector('input[name="cor"]:checked').value;
    const fonte = document.querySelector('input[name="fonte"]:checked').value;
    const orcawpp = document.getElementById('orcaWpp');
    const control = document.getElementById('control');
    if (input1 == "") {
        control.style.display = "block";
        input1Borda.style.border = '1px solid red'
        setTimeout(function () {
            control.style.display = "none";
            input1Borda.style.border = 'none'

        }, 5000);

    }
    else {
        loading.style.display = 'inline-block';
        imgWpp.style.display = 'none';
        orcawpp.href = ("https://api.whatsapp.com/send?phone=551433136605&text=Ol%C3%A1%2C%20Gostaria%20de%20fazer%20um%20or%C3%A7amento!") + (" Nome: ") + input1 + (" Cor: ") + cor + (" Fonte: ") + fonte + (" Lagura: ") + inputLargura;
    }

}


/*
function valores() {
    const tagPreco = document.getElementById('preco');
    const inputM = document.querySelector("#input1");
    inputM.addEventListener('keyup', function (e) {
        const inputC = inputM.value.replace(/\s/g, '').length;
        const valor = inputC * 42.50 + 200.00 - 42.50;
        tagPreco.innerText = valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
   
    });

}

valores();
*/