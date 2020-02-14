export default class ChatList extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode:'open'});

        let userList = document.createElement("div");
        userList.setAttribute("class","user-list");

        ref.once('value',function(snapshot){
            snapshot.forEach(function(data){
            console.log(data.val());
                for(let json in data.key){
                 console.log(json);
                 console.log(data.val()[json]);

                 let userSection = document.createElement("div");
                 userSection.setAttribute("class","userSection");

                 let user = document.createElement("div");
                 user.setAttribute("class","user"+json);
                 userSection.appendChild(user);
                 
                 let goChatSection = document.createElement("div");
                 goChatSection.setAttribute("id",json);
                 userSection.appendChild(goChatSection);

                 userList.appendChild(userSection);
                }
            })
        });
        shadow.appendChild(userList);
    }
}

customElements.define('chat-list',ChatList);