let chatButton = document.querySelector(".mini-chat");

chatButton.addEventListener("click",function(){
    if(chatButton.classList.contains("clicked")){
    chatButton.classList.remove("clicked")
    }else{
    chatButton.classList.add("clicked");
    }
})
if(chatButton.classList.contains("clicked"));