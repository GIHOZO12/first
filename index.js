

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
        return "<li>" + "<li>";
    })
    resultBox.innerHTML ="<h5>" + content.join('') + "<h5>";
  }


  const dayNight= document.querySelector('.day-night');
  dayNight.addEventListener('click',()=>{
    dayNight.querySelector("i").classList.toggle('fa-sun');
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
  })