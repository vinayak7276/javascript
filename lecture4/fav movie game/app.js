const favMovie="avengers";
let guess=prompt("Guess my favourite movie");
while((guess!="avengers")&&(guess!="quit")){
   guess=prompt("wrong guess! please try again");
}
if(guess==favMovie){
    console.log("Congrats!!");
}else{
    console.log("you quit");
}