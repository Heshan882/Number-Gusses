const num1=(Math.floor((Math.random()*10)+1));
let chances=3;



function work() {
    
 let inputnumber=Number(document.getElementById("number").value);
 chances--;
 let output=document.getElementById("print");
 let output1=document.getElementById("print2");
    
 if (chances>0) {
    
 
    if (num1==inputnumber) {
        output.innerHTML=("Number is correct");
        output1.innerHTML=("Remain chances : "+chances);
        
    } else  if (num1<inputnumber) {
        output.innerHTML=("Number is too high");
        output1.innerHTML=("Remain chances : "+chances);

    } else if (num1>inputnumber) {
        output.innerHTML=("Number is too low");
        output1.innerHTML=("Remain chances : "+chances);
    }
} else{
    
    alert("Game Over");
   
}
}