let todo=[];
let req=prompt("Please enter your request");
while(true){
    if(req=="quit"){
        console.log("Quitting app");
        break;
    }
if(req=="list"){
    console.log("_____________");
    for(let i=0;i<todo.length;i++){
        console.log(i,todo[i]);
    }
    console.log("_________");
}else if(req=="add"){
   let task= prompt("Please enter the task you wanna add")
   todo.push(task);
   console.log("Task added");
}else if(req=="delete"){
    let idx=prompt("Please enter the task index");
    todo.splice(idx,1);
    console.log("Task deleted");
}else{
    console.log("Wrong Request");
}
req=prompt("Please enter your request");
}