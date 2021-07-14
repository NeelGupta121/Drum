var s=document.querySelectorAll(".drum");

for(var i=0;i<s.length;i++)
{
    s[i].addEventListener("click",function(){
        var btnhtml=this.innerHTML;
        var e=document.querySelector("."+btnhtml);
        listen(btnhtml);
        
    });
    
}
function listen(key)
{
    switch (key) {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var kickbass=new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;
        case "l":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        default:
            break;
    }
}       
document.addEventListener("keypress",function(e){
    listen(e.key);
    getani(e.key);
})

function getani(curr)
{
    var key=document.querySelector("."+curr);
    key.classList.add("pressed");

    // setting timeout
    setTimeout(function(){
        key.classList.toggle("pressed");
    }, 100);
}