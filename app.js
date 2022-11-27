const num1=Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);

const qEl=document.getElementById("question");
const formEl=document.getElementById("form");
const inputEl=document.getElementById("input");
const scoreEl=document.getElementById("score");

//json.parse: string to number
let score=JSON.parse(localStorage.getItem("score"))

if (!score) {
    score=0;
}

scoreEl.innerText=`score: ${score}`;
qEl.innerText=`What is ${num1} multyply by ${num2}?`

const ans=num1*num2;

formEl.addEventListener("submit", ()=>{
    //+ sign is used to convert string to number
    const userans = +inputEl.value; 
    if(userans === ans){
        score++;
        updatestorage();
    }
    else{
        score--;
        updatestorage();
    }
});

function updatestorage(){
    /*here the localStorage is the local storage form javascript
    json.stringifys: number to string coz browser wont accept int for sec reasons*/
    localStorage.setItem("score", JSON.stringify(score)); 
}