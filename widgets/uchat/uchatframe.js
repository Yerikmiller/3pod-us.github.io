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
        <span class="closeuchat">
            ×
        </span>
        <uchat-frame>
            <iframe title="uchatframe" class="uchat-frame" src="https://uchatframe.my3pod.com" frameborder="0"></iframe>
        </uchat-frame>
        <style>
        .uchat-frame-container{
            position: absolute;
            bottom: 32px;
            right: 32px;
            display: none;
            z-index: 200;
            opacity: 0;
        }
        .uchat-frame{
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
        .closeuchat{
            position: absolute;
            right: 20px;
            top: 7px;
            font-size: 40px;
            font-weight: 100;
            color: #d02a2a;
            cursor: pointer;
        }
        </style>`;

        document.body.appendChild(nodeMain);

        this.closeuchat = this.container.querySelector(".closeuchat");

        this.closeuchat.addEventListener("click", function(){
            app.inactive();
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
}
