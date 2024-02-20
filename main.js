const buttons = document.querySelectorAll('.button button');
const result = document.querySelectorAll('.button span');
const counter=[0,0,0,0];
for(let i=0;i<buttons.length;i++){
    buttons[i].onclick=()=>{
        counter[i]++;
        result[i].textContent=counter[i];
        

    }
}