class uchatframe_instance {
    constructor(){
        this.container = null;
    }
    create(){
        var exists = document.querySelector(".uchat-frame-container");
        if(exists){
            exists.remove(); 
        }
        var app = this;
        var nodeMain = document.createElement("div");
        nodeMain.classList.add("uchat-frame-container")
        this.container = nodeMain;
        nodeMain.innerHTML = `
        <span class="goback is-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.37235 4.66632C9.55665 4.87196 9.53933 5.18807 9.33368 5.37236L6.57778 7.84206C6.47407 7.93501 6.47407 8.065 6.57778 8.15795L9.33368 10.6276C9.53933 10.8119 9.55665 11.128 9.37235 11.3337C9.18806 11.5393 8.87195 11.5567 8.66631 11.3724L5.91041 8.90267C5.36319 8.41228 5.36319 7.58773 5.91041 7.09734L8.66631 4.62765C8.87195 4.44335 9.18806 4.46067 9.37235 4.66632Z" fill="#2962FF"></path>
            </svg>
            Volver
        </span>
        <span class="closeuchat">
            ×
        </span>
        <uchat-frame>
            <iframe title="uchatframe" class="uchat-frame" src="https://uchatframe.my3pod.com" frameborder="0"></iframe>
        </uchat-frame>
        <style>
        .uchat-frame-container{
            position: fixed;
            bottom: 32px;
            right: 32px;
            display: none;
            z-index: 200;
            opacity: 0;
        }
        .is-hidden{
            display: none !important;
        }
        .uchat-frame, .uchat-frame-container{
            border-radius: 8px;
            min-height: 380px;
            max-height: 595px;
            max-width: 400px;
            min-width: 300px;
            height: 100%;
            width: 100%;
        }
        .uchat-frame{
            border: 1px solid #c8e1f285;
            box-shadow: 1px 1px 28px #2d303d2e;
            transition: all 0.3s ease-out;
        }
        .uchat-frame-container.active, .uchat-frame-container.active .uchat-frame{
            display: block;
            opacity: 1;
            transition: all 0.3s ease-in;
        }
        .goback{
            position: absolute;
            top: 1px;
            left: 8px;
            color: #2968ff;
            font-weight: 500;
            display: flex;
            align-items: center;
            cursor: pointer;
        }
        .closeuchat{
            position: absolute;
            right: 20px;
            top: 7px;
            font-size: 40px;
            font-weight: 100;
            color: #d02a2a;
            cursor: pointer;
        }
        @media only screen and (max-width: 768px){
            .uchat-frame-container{
                top: 0px;
                right: 0px;
            }
        }
        </style>`;

        document.body.appendChild(nodeMain);

        this.closeuchat = this.container.querySelector(".closeuchat");

        this.closeuchat.addEventListener("click", function(){
            app.inactive();
        })

        this.goback = this.container.querySelector(".goback");

        this.goback.addEventListener("click", function(){
            app.goToInit();
        })
    }
    active(){
        if(this.container === null){return;}
        this.container.classList.add("active");
    }
    inactive(){
        if(this.container === null){return;}
        this.container.classList.remove("active");
    }
    goToInit(){
        if(this.container === null){return;}

        // Obtener el contenedor del iframe
        let iframeContainer = this.container.querySelector('uchat-frame') ?? null;
        let mainChatIframe = iframeContainer.firstElementChild;
        let liveChatIframe = mainChatIframe.querySelector('iframe#chatbot_live_chat_widget');
        let welcomeChat = mainChatIframe.querySelector(".container-start");

        let closeItenContainer = this.container.querySelector('.closeuchat');
        let goBackItemContainer = this.container.querySelector('.goback');

        liveChatIframe.classList.add('is-hidden');
        closeItenContainer.classList.add('has-gray-color');
        goBackItemContainer.classList.add('is-hidden');
        welcomeChat.classList.remove('is-hidden');

        if (iframeContainer) {
            // Validamos si el iframe existe y si existe lo eliminamos y reemplazamos por el iframe del chat principal
            let uchatIframe = iframeContainer.querySelector('.uchat-frame') ?? null;

            if (uchatIframe) {
                uchatIframe.remove();
                iframeContainer.innerHTML = '<iframe title="uchatframe" class="uchat-frame" src="https://uchatframe.my3pod.com" frameborder="0"></iframe>';
            }else{
                return;
            }
        } else {
            return;
        }
    }
}
