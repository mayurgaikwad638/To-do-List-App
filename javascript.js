window.onload = function(){
    showtask() ;
let inputtext = document.getElementById("input-text") ;
let btnadd = document.getElementById("btn-add") ;

btnadd.addEventListener("click",function(){
    let webtask = localStorage.getItem("localtask") ;
    let inputvalue = inputtext.value ;
    if(inputvalue.trim()!=0){

        if(webtask==null){
            taskobj = [] ;
        }
        else{
            taskobj = JSON.parse(webtask) ;
        }
    
        taskobj.push(inputvalue) ;
        localStorage.setItem("localtask", JSON.stringify(taskobj)) ;
    
        showtask() ;
        inputtext.value = "" ;
    }
})

function showtask(){
    let webtask = localStorage.getItem("localtask") ;

    if(webtask==null){
        taskobj = [] ;
    }
    else{
        taskobj = JSON.parse(webtask) ;
    }

    let tasklist = document.getElementById("table") ;

    let html = '' ;

    taskobj.forEach((item, index) => {
        
        html += `<tr><th scope="row">${index+1}</th><td>${item}</td><td><button onclick ="edittask(${index})" id="edit-btn">edit</button></td><td><button onclick ="deletetask(${index})" id="del-btn">delete</button></td></tr>` ;
    });

    tasklist.innerHTML = html ;
}

let savebtn = document.getElementById("save-btn") ;
savebtn.addEventListener("click",function(){
    let webtask = localStorage.getItem("localtask") ;
    taskobj = JSON.parse(webtask) ;
    let inputtext = document.getElementById("input-text") ;
    let saveindex = document.getElementById("index").value ;
    taskobj[saveindex] = inputtext.value ;
    localStorage.setItem("localtask", JSON.stringify(taskobj)) ;
    
    showtask() ;
            let addbtn = document.getElementById("btn-add") ;
            let savebtn = document.getElementById("save-btn") ;

            addbtn.style.display = "block" ;
            savebtn.style.display = "none" ;
            inputtext.value = "" ;

})

let removebtn = document.getElementById("remove-btn") ;
removebtn.addEventListener("click",function(){
    localStorage.clear() ;
    showtask() ;
})
}
