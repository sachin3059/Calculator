let string = "";

let button = document.querySelectorAll(".btn");

const audio = new Audio("./mp3/mouse-click-153941.mp3");

Array.from(button).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        audio.play();
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = string.slice(0,-1);
            //console.log(string);
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target);
            string += e.target.innerHTML;
            document.querySelector('input').value = string;
        }
        
        
    })
})