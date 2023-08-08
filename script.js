const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask () {
    if(inputbox.value === ''){
        alert("You must write something");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);
        let img = document.createElement("img");
        img.src = "delete.gif"
        li.appendChild(img);

    }
    inputbox.value = "";
    savedData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedData();
    }
    else if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        savedData();
    }
}, false ) ;

function savedData (){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask (){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();