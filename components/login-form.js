export default class LoginForm extends HTMLElement{

    constructor(){
        //Siempre se llama al constructor
        super();
        //create a shadow root

        const shadow = this.attachShadow({mode:'open'});
        let messagesSection = document.querySelector(".messagesSection");
        //componentes
        let loginSeciton = document.createElement("div");
        loginSeciton.setAttribute("class","loginSection");

        let title = document.createElement("h2");
        title.innerHTML="Login";
        
        let loginForm = document.createElement("form");
        loginForm.setAttribute("class","loginForm");
        
        let formUsernameInput = document.createElement("input");
        formUsernameInput.setAttribute("id","username");
        formUsernameInput.setAttribute("type","text");
        formUsernameInput.setAttribute("placeholder","email");
  
        let formPasswordInput = document.createElement("input");
        formPasswordInput.setAttribute("id","password");
        formPasswordInput.setAttribute("type","password");
        
        let formSendButton = document.createElement("input");
        formSendButton.setAttribute("id","validate");
        formSendButton.setAttribute("type","submit");
        formSendButton.addEventListener("click",function(evt){
          evt.preventDefault();

          ref.once('value',function(snapshot){
              console.log(formUsernameInput.value);
              snapshot.forEach(function(childSnapshot){
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();
                console.log(childSnapshot.val());
                childData.forEach(function(smalldata){
                  if(
                      formUsernameInput.value === smalldata.email &&
                      formPasswordInput.value === smalldata.contraseña
                      ){
                        loginSeciton.classList.add("hide");
                        // console.log(smalldata.key);
                        formUsernameInput.value="";
                        formPasswordInput.value="";
                    }else{
                        formUsernameInput.value="";
                        formPasswordInput.value="";
                    }
                });
                // console.log(childKey+":",childData);
              })
            })
        });
        loginForm.appendChild(formUsernameInput);
        loginForm.appendChild(formPasswordInput);
        loginForm.appendChild(formSendButton);
        loginSeciton.appendChild(title);
        loginSeciton.appendChild(loginForm);
        const style = document.createElement('style');
    
        style.textContent = `
        .hide{
            animation:.4s hiding forwards;
        }
        .loginSection.hide{
            display:none;
        }
        .loginSection.show{
            animation:.4s show forwards;
        }
        .loginSection{
            display:flex;
            background:gray;
            flex-direction:column;
            margin:10px;
            align-self:center;
            box-shadow:5px 2px 10px black;
            align-items: center;
            justify-content: center;
            border-radius:10px;
        }
        .loginForm{
            display:inherit;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            margin-bottom:10px;
            width:95%;
        }
        .loginForm input{
            width:90%;
            text-align:center;
            font-style:italic;
            border:none;
            font-family:system-ui;
            margin:5px;
            border-radius:10px;
        }
        .loginForm h2{
            margin:10px;
        }
        .loginForm input[type="submit"]{
            box-shadow: 0 0 2px 1px white;

        }
        .loginForm input[type="submit"]:active{
            animation:.3s onLoginButtonActive;
        }

        @keyframes onLoginButtonActive {
            from{
              transform:scale(0.9)
            }
            to{
              transform:scale(1);
            }
        }
        @keyframes hiding{
            from{
                opacity:1;
            }
            to{
                opacity:0;
                display:none;
            }
        }
        @keyframes show{
            from{
                opacity:0;
            }
            to{
                opacity:1;
            }
        }
        @media only screen  and (min-device-width: 200px)and (max-device-width: 480px) {

            .loginForm{
                width:auto;
            }
            .loginSection{
                width:80%;
            }
          }

        `;
        shadow.appendChild(style);
        shadow.appendChild(loginSeciton);

    }
}
customElements.define('login-form', LoginForm)