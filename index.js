

let availableKeyword=['laptop','smart phone','earphoone','piano','smartwatch'];

const resultBox=document.querySelector('.resultbox');
const inputBox=document.getElementById("input-box");



inputBox.onkeyup=function(){
    let result=[];
    let input=inputBox.value; 


    if(input.length){
        result=availableKeyword.filter((keyword) =>{
    return   keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);

        }
        display(result);
    }
  function display(result){
    const content=result.map((list)=>{
        return "<h5>" + "<h5>";
    })
    resultBox.innerHTML ="<h5>" + content.join('') + "<h5>";
  }


  const dayNight= document.querySelector('.day-night');
  dayNight.addEventListener('click',()=>{
    dayNight.querySelector("i").classList.toggle('fa-sun');
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
  })


  window.addEventListener('scroll',reval);

  function reval(){
    var rveals=document.querySelector('.reval');
    for(var i=0;i<rveals.length;i++){
        var height=window.innerHeight;
        var top=rveals[i].getBoundingClientRect().top;
        var point=150;
    }
    if(top<height-point){
        rveals[i].classList.add('active');

    }
    else{
        rveals[i].classList.remove('active');
    }
  }



  var check=document.getElementById("continue");
  check.style.display="none";

 
    

  var mainContent=document.querySelector('.chat');
  mainContent.style.display="none";

  document.querySelector('.dosomething').onclick=function(){
  
    mainContent.style.display="block";
   
  
  }
  document.getElementById("close").onclick=function(){
    mainContent.style.display="none";
  }
