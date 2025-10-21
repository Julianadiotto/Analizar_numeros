let num = document.querySelector('#num');
let sel = document.querySelector('#selLista');
let res = document.getElementById('res');
let adicionar = document.querySelector('#btnAdicionar');
let finalizar = document.querySelector('#btnFim');
let valores = [];

function isNumero(n){
   if(Number(n) >= 1 && Number(n) <= 100){
    return true;        
   }else{
    return false;
   } 
};

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true;                
    }else{
        return false;       
    }
};

adicionar.addEventListener('click', function(){    
    
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value));

        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`;
    
        sel.appendChild(item);
        res.innerHTML = '';
    }else{
        alert('Número inválido ou já encontrado na lista');
    }
    num.value = '';
    num.focus();
} )

finalizar.addEventListener('click', function(){
    if(valores.length == 0){
        alert('Adicione valores antes de começar.')
    }else{
        let tot = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        for(let pos in valores){
             soma += valores[pos];
             
            if(valores[pos] > maior)
                maior = valores[pos];
            
            if(valores[pos] < menor)
                menor = valores[pos];
            
        }
        media = soma / tot;
        res.innerHTML = '';
        res.innerHTML += `<p> Ao todo temos ${tot} números cadastrados.</p>`;
        res.innerHTML += `<p> O maior valor é ${maior}.</p>`;
        res.innerHTML += `<p> O menor valor é ${menor}.</p>`;
        res.innerHTML += `<p> Somando todos os valores, temos ${soma}.</p>`;
        res.innerHTML += `<p> A média dos valores digitados é ${media}.</p>`;
    }
})
 