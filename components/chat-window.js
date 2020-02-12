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
      closeButton.setAttribute('class','close');
      closeButton.setAttribute('href','#');
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
      //icon.setAttribute('tabindex', 0);
      const sendSection = document.createElement('div');
      sendSection.setAttribute('class','sendSection');
      
      const info = document.createElement('input');
      info.setAttribute('type','text');
      info.setAttribute('placeholder','Escribir mensaje');
      info.setAttribute('class', 'info');

      const sendButton=document.createElement('a');
      sendButton.setAttribute('href','#');
      sendButton.innerHTML="send";
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
          /*
          bottom:0;
          right:0;
          margin-bottom:75px;*/
          background:gray;
          width:27%;
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
            margin:5px;
            padding:5px;
            background:white;
        }
        .sendSection {
          font-size: 0.8rem;
          display:inherit;
          justify-content:space-between;
          margin: 5px 10px ;
        }
        .sendSection .info{
          background: white;
          border-radius:5px;
        }
        .sendSection a{
          background:blue;
          color:white;
          text-decoration:none;
          border-radius:10px;
          text-weigth:bold;
          padding:1px 2px;
        }
        .sendSection a:hover{
          animation:.5s buttonSendHover forwards;
        }
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
        @media only screen  and (min-device-width: 320px)and (max-device-width: 480px)and (-webkit-min-device-pixel-ratio: 2) {
            .chat-window{
                width:80%;
                margin:0 10vw ;
            }
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
  customElements.define('chat-window', ChatWindow);