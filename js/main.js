let title=document.querySelector(".title");
let box =document.querySelector(".box");
let shadow =document.querySelector(".shadow");
let button =document.querySelector(".end");
let titleEnd =document.querySelector(".titleEnd");
let exitS =document.querySelector(".exitS");
let turn="X";


function setLetter(id){
    let element=document.getElementById(id);
    if (element.innerHTML=='' && turn=='X'){
        title.innerHTML="This Game For O"
        title.style.background='#dc3545';
        element.style.background='#0d6efd';
        element.innerHTML=turn;
        turn="O"
        winner()
    }else if (element.innerHTML=='' && turn=='O'){
        title.innerHTML="This Game For X"
        element.style.background='#dc3545';
        title.style.background='#0d6efd';
        element.innerHTML=turn;
        turn="X"
        winner()
    }
}

function end (n1,n2,n3){
    let num1=n1+1;
    let num2=n2+1;
    let num3=n3+1;
    titleEnd.innerHTML=`Winner Is ${document.getElementById(''+num2).innerHTML}`;
    box.style.display="block";
    shadow.style.display="block";
    document.getElementById(''+num1).style.background='#20c997';
    document.getElementById(''+num2).style.background='#20c997';
    document.getElementById(''+num3).style.background='#20c997';
}

function winner(){
    let items=document.querySelectorAll(".itm");
    let arr=[]
    for (let i =0;i<items.length;i++){
        arr.push(items[i].innerHTML)
    }
    //start cols

    if (arr[0]==arr[1] && arr[1]==arr[2] && arr[1]!=''){
        console.log('col1')
        end(0,1,2)
    }
    if (arr[3]==arr[4] && arr[4]==arr[5] && arr[4]!=''){
        console.log('col2')
        end(3,4,5)
    }
    if (arr[6]==arr[7] && arr[7]==arr[8] && arr[7]!=''){
        console.log('col3')
        end(6,7,8)
    }

    //end cols


    //start rows 

    if (arr[0]==arr[3] && arr[3]==arr[6] && arr[3]!=''){
        console.log('row1')
        end(0,3,6)
    }
    if (arr[1]==arr[4] && arr[4]==arr[7] && arr[4]!=''){
        console.log('row2')
        end(1,4,7)
    }
    if (arr[2]==arr[5] && arr[5]==arr[8] && arr[5]!=''){
        console.log('row3')
        end(2,5,8)
    }

    //end rows


    //start / \ 

    if (arr[2]==arr[4] && arr[4]==arr[6] && arr[4]!=''){
        console.log('/')
        end(2,4,6)
    }
    if (arr[0]==arr[4] && arr[4]==arr[8] && arr[4]!=''){
        console.log('\\')
        end(0,4,8)
    }

    //end / \ 
    if(arr[1]!=''&&arr[2]!=''&&arr[3]!=''&&arr[4]!=''&&arr[5]!=''&&arr[6]!=''&&arr[7]!=''&&arr[8]!=''&&arr[9]!=''){
        box.style.display="block";
        shadow.style.display="block";
    }
    button.onclick=()=>{
        box.style.display="none";
        shadow.style.display="none";
        location.reload()
    }
}


