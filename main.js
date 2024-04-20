let title = document.querySelector('.title')



let turn = "x"

let name = ""

function game(id){
    let element = document.getElementById(id)

    if (turn === "x"  && element.innerHTML == "" ){

        element.innerHTML = "x";
        name = 'x';
        turn = 'o';
        title.innerHTML= 'o';

    }

    else if (turn === "o"  && element.innerHTML == "" ){

        element.innerHTML = "o";
        name = 'o';
        turn = 'x';
        title.innerHTML = 'x';

    }
    winner()
}

function winner(){
    let item1 = document.querySelector('#item1').innerHTML
    let item2 = document.querySelector('#item2').innerHTML
    let item4 = document.querySelector('#item4').innerHTML
    let item5 = document.querySelector('#item5').innerHTML
    let item6 = document.querySelector('#item6').innerHTML
    let item3 = document.querySelector('#item3').innerHTML
    let item7 = document.querySelector('#item7').innerHTML
    let item8 = document.querySelector('#item8').innerHTML
    let item9 = document.querySelector('#item9').innerHTML

    if(item1 == item2 && item2 == item3 && item1 != "") 
    {
        title.innerHTML = name + " winner." 
        document.querySelector('#item1').style.background ="black"
        document.querySelector('#item2').style.background ="black"
        document.querySelector('#item3').style.background ="black"
        
        setTimeout(function() {
        title.innerHTML=name + " winner.."  ;
        },3000)
        setTimeout(function() {
            title.innerHTML=name + " winner..."  ;
            },5000)
        setTimeout(function() {
            location.reload();
        },6000)

    }
    else if(item4 == item5 && item5 == item6 && item4 != "") 
    {
        title.innerHTML = name + " winner." 
        document.querySelector('#item4').style.background ="black"
        document.querySelector('#item5').style.background ="black"
        document.querySelector('#item6').style.background ="black"
                setTimeout(function() {
        title.innerHTML=name + " winner.."  ;
        },3000)
        setTimeout(function() {
            title.innerHTML=name + " winner..."  ;
            },5000)
        setTimeout(function() {
            location.reload();
        },6000)
    }
    else if(item7 == item8 && item8 == item9 && item7 != "") 
    {
        title.innerHTML = name + " winner."
        document.querySelector('#item7').style.background ="black"
        document.querySelector('#item8').style.background ="black"
        document.querySelector('#item9').style.background ="black"
                setTimeout(function() {
        title.innerHTML=name + " winner.."  ;
        },3000)
        setTimeout(function() {
            title.innerHTML=name + " winner..."  ;
            },5000)
        setTimeout(function() {
            location.reload();
        },6000)
    }

    else if(item1 == item4 && item4 == item7 && item1 != "") 
    {
        title.innerHTML = name + " winner."
        document.querySelector('#item1').style.background ="black"
        document.querySelector('#item4').style.background ="black"
        document.querySelector('#item7').style.background ="black" 
                setTimeout(function() {
        title.innerHTML=name + " winner.."  ;
        },3000)
        setTimeout(function() {
            title.innerHTML=name + " winner..."  ;
            },5000)
        setTimeout(function() {
            location.reload();
        },6000)
    }
    else if(item2 == item5 && item5 == item8 && item2 != "") 
    {
        title.innerHTML = name + " winner."
        document.querySelector('#item2').style.background ="black"
        document.querySelector('#item5').style.background ="black"
        document.querySelector('#item8').style.background ="black" 
                setTimeout(function() {
        title.innerHTML=name + " winner.."  ;
        },3000)
        setTimeout(function() {
            title.innerHTML=name + " winner..."  ;
            },5000)
        setTimeout(function() {
            location.reload();
        },6000)
    }
    else if(item3 == item6 && item6 == item9 && item3 != "") 
    {
        title.innerHTML = name + " winner." 
        document.querySelector('#item3').style.background ="black"
        document.querySelector('#item6').style.background ="black"
        document.querySelector('#item9').style.background ="black"
                setTimeout(function() {
        title.innerHTML=name + " winner.."  ;
        },3000)
        setTimeout(function() {
            title.innerHTML=name + " winner..."  ;
            },5000)
        setTimeout(function() {
            location.reload();
        },6000)
    }

    else if(item1 == item5 && item5 == item9 && item1 != "") 
    {
        title.innerHTML = name + " winner." 
        document.querySelector('#item1').style.background ="black"
        document.querySelector('#item5').style.background ="black"
        document.querySelector('#item9').style.background ="black"
                setTimeout(function() {
        title.innerHTML=name + " winner.."  ;
        },3000)
        setTimeout(function() {
            title.innerHTML=name + " winner..."  ;
            },5000)
        setTimeout(function() {
            location.reload();
        },6000)
    }
    else if(item3 == item5 && item5 == item7 && item3 != "") 
    {
        title.innerHTML = name + " winner." 
        document.querySelector('#item3').style.background ="black"
        document.querySelector('#item5').style.background ="black"
        document.querySelector('#item7').style.background ="black"
                setTimeout(function() {
        title.innerHTML=name + " winner.."  ;
        },3000)
        setTimeout(function() {
            title.innerHTML=name + " winner..."  ;
            },5000)
        setTimeout(function() {
            location.reload();
        },6000)
    }
}
// reload
function relod(){
    location.reload();
}