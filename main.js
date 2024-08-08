const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
let currentDate=new Date();
const d=document.getElementById("myDate1").textContent=currentDate.toDateString();
function addTask(){
    if(inputBox.value === ''){
        alert("You must enter your task");
    }
    
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u002d";
        li.appendChild(span); 
        let currentDate=new Date();
        const d1="    (      Date:" + currentDate.toDateString() + ")";
        li.append(d1);
    }
    inputBox.value= "";
    saveData();
}


listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData()
{
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
