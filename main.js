function startFunction()
{ 
    let start = prompt("Vamos começar?");
    if(start !== ''){
        window.location.href = "questionario.html";  
    }   
}

function questionario(){
    let name = prompt("Coloque o seu nome:");
    if(name !== ''){
        let span = document.getElementById('name');
        span.innerHTML = name;
    let questionOne=prompt("1) Considere a série de números: 72, 14, 66, 22, 60,… \n Qual é o próximo número? (insira o numero equivalente a resposta) \n a) 68 \n b) 54 \n c) 30 \n d) 96");
    console.log(questionOne)
        if(questionOne == 30){
            let r1 = document.getElementById('resposta1correta');
            r1.innerHTML = 'Resposta 1';
        }else {
            let r1 = document.getElementById('resposta1errada');
            r1.innerHTML = 'Resposta 1';
        }

    let questionTwo=prompt("2) Considere a série de números: 23, 24, 27, 28, 31, 32,… Qual é o próximo número?(insira o numero equivalente a resposta) \n a) 27 \n b) 30 \n c) 34 \n d) 35");
    if(questionTwo == 35){
        let r2 = document.getElementById('resposta2correta');
        r2.innerHTML = 'Resposta 2';
    }else {
        let r2 = document.getElementById('resposta2errada');
        r2.innerHTML = 'Resposta 2';
    }

    let questionThree=prompt("3) ELFU, GLHU, ILJU,_____, MLNU?(insira as letras equivalente a resposta)\n a) OLPU \n b) KLMU \n c) LLMU \n d) KLLU");
    if(questionThree == 'KLLU'){
        let r3 = document.getElementById('resposta3correta');
        r3.innerHTML = 'Resposta 3';
    }else {
        let r3 = document.getElementById('resposta3errada');
        r3.innerHTML = 'Resposta 3';
    }
    }   
}





