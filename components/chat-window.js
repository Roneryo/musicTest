import LoginForm from "./login-form.js";
class ChatWindow extends HTMLElement {
    constructor() {
      // Always call super first in constructor
      super();
  
      // Create a shadow root
      const shadow = this.attachShadow({mode: 'open'});
  
      // Create spans
      const window = document.createElement('div');
      window.setAttribute('class', 'chat-window');
      
      const headerWindow = document.createElement('div');
      headerWindow.setAttribute('class','header-window');

      const closeButton = document.createElement('a');
      const buttonShow = document.querySelector(".mini-chat");

      closeButton.setAttribute('class','close');
      closeButton.setAttribute('href','#');
      closeButton.addEventListener('click',function(){
          console.log(window);
        if(window.classList.contains("hidden")){
            window.classList.remove("hidden")
            }else{
                window.classList.add("hidden");
                chatButton.classList.remove("clicked")
            }
      })
      buttonShow.addEventListener("click",function(){
        if(this.classList.contains("clicked")){
            window.classList.remove("hidden")

        }
      })

      const closeButtonText = document.createElement('span');
      closeButtonText.setAttribute('class','closeText');
      closeButtonText.innerHTML="X";  
      closeButton.appendChild(closeButtonText);
      
      const windowTitle = document.createElement('p');
      windowTitle.innerHTML='Ventana de chat';
      windowTitle.setAttribute('class','window-title');
      headerWindow.appendChild(windowTitle);
      headerWindow.appendChild(closeButton);
      
      const messagesSection = document.createElement("div");
      messagesSection.setAttribute('class','messagesSection');
      let login = document.createElement("login-form");

      messagesSection.appendChild(login);
      /*
      Aqui toda la seccion del formulario
      */
     // messagesSection.appendChild(loginSeciton);
      

      const sendSection = document.createElement('div');
      sendSection.setAttribute('class','sendSection');
      
      const info = document.createElement('textarea');
      info.setAttribute('type','text');
      info.setAttribute('placeholder','Escribir mensaje');
      info.setAttribute('class', 'info');

      const sendButton=document.createElement('a');
      sendButton.setAttribute('href','#');
      
      sendButton.addEventListener('click',function(){
          console.log(info.value);
          let sendMessage = document.createElement('span');
          sendMessage.innerHTML = info.value;
          this.parentNode.previousSibling.appendChild(sendMessage);
          console.log();
          //attachMessage.appendChild(sendMessage);
          info.value="";
      });
      const sendButtonText = document.createElement("img");
      sendButtonText.setAttribute("class","sendButtonText");
      sendButtonText.setAttribute("src","send.svg");
      info.appendChild(sendButtonText);
      sendButton.appendChild(sendButtonText);
      sendSection.appendChild(info);
      sendSection.appendChild(sendButton);
      
      // Take attribute content and put it inside the info span
      const text = this.getAttribute('data-text');
      info.textContent = text;

  
      // Create some CSS to apply to the shadow dom
      const style = document.createElement('style');
      console.log(style.isConnected);
  
      style.textContent = `
      
        .chat-window {
          display:flex;
          font-family:system-ui;
          flex-direction:column;
          position: absolute;
          border-radius:20px;
          box-shadow:5px 2px 10px black;
          bottom:0;
          right:0;
          z-index:0;
          background:gray;
          width:35%;
          margin:20px;
          margin-bottom:75px;
          overflow:none;
          animation: 1s onShowWindow ease;
        }
        .chat-window.hidden{
            animation:1s onHideWindow forwards cubic-bezier(.27,-0.57,.72,.97); 
            /*transform:scale(0);*/           
        }
        
        .header-window{
            display:inherit;
            justify-content:flex-end;
        }
        .header-window *{
        }
        .header-window .window-title{
            margin:5px auto;
        }
        .header-window .close {
            width:20%;
            background:red;
            display:inherit;
            justify-content:center;
            align-items:center;
            border-top-right-radius:10px;
            border-bottom-right-radius:3px;
        }        
        .header-window .close {
          text-decoration:none;
          color:black;
        }
        .header-window .close .closeText {
          align-self:center;
          justify-self:center;
        }
        .header-window.window-title{
            text-align:center;
            justify-self:flex-start;
            align-self:center;
        }
        .chat-window .messagesSection{
            margin: 5px;
            padding: 5px;
            display: flex;
            height: 200px;
            background: white;
            flex-flow: column;
            overflow-x:hidden;
            overflow-y: auto;        
        }

        .chat-window .messagesSection::-webkit-scrollbar{
            width: 8px;     /* Tamaño del scroll en vertical */
            height: 8px;    /* Tamaño del scroll en horizontal */
        }
        
        .chat-window .messagesSection::-webkit-scrollbar-thumb{
            background: #ccc;
            border-radius: 4px;
        }
        .chat-window .messagesSection::-webkit-scrollbar-thumb:hover{
            background: #b3b3b3;
            box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
        }
        .chat-window .messagesSection::-webkit-scrollbar-thumb:active{
            background-color:#999999;
        }
        .chat-window .messagesSection::-webkit-scrollbar-track{
            background: #e1e1e1;
            border-radius: 4px;
        }
        .chat-window .messagesSection::-webkit-scrollbar-track:hover,
        .chat-window .messagesSection::-webkit-scrollbar-track:active{
            background:#d4d4d4;
        }
        .sendSection {
          font-size: 0.8rem;
          display:inherit;
          justify-content:space-between;
          margin: 5px 10px ;
        }
        .sendSection .info{
          border-radius:5px;
          border:none;
          width:75%
        }
        .sendSection .info{
            resize:none;
            outline: none;
            height:1.5em;
            overflow:hidden;
            font-family:system-ui;
        }
        .sendSection a{
          display:inherit;
          background:blue;
          color:white;
          justify-content:center;
          align-items:center;
          text-decoration:none;
          border-radius:10px;
          text-weigth:bold;
          padding:2px;
          animation:.5s buttonSendOut forwards;
        }
        .sendSection a:hover{
          animation:.5s buttonSendHover forwards;
        }
        /*
        Aqui iba todo el css del formulario
        */
        @keyframes buttonSendHover{
          from{
            background:blue;
            color:white;
          }
          to{
            background:white;
            color:black;
          }
        }
        @keyframes buttonSendOut{
            from{
                background:white;
                color:black;
            }
            to{
                background:blue;
                color:white;
            }
          }
          @keyframes onHideWindow{
              from{
                  opacity:initial;
              }
              to{
                  opacity:0;
              }
          }
          @keyframes onShowWindow{
              from{
                opacity:0;
              }
              to{
                opacity:initial;
              }
          }

        @media only screen  and(min-device-width: 200px)and (max-device-width: 480px) {
            .chat-window{
                width:65%;
            }
          }
      @media only screen  and (min-device-width: 481px)and (max-device-width: 768px) {
            .chat-window{
                width:65%;
                margin-bottom:20px;
            }
        }
        span{
            overflow-wrap:break-word;
        }

     `;
      // Attach the created elements to the shadow dom
      shadow.appendChild(style);
      console.log(style.isConnected);
      shadow.appendChild(window);
      
      window.appendChild(headerWindow);
      window.appendChild(messagesSection);
      window.appendChild(sendSection);
    }
  }
  
  // Define the new element
  customElements.define('chat-window', ChatWindow)
  // Graphics Gale

