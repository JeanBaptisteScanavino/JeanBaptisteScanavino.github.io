const app = {

    pageToDisplay: 'home',
    init:function(){
        switch (app.pageToDisplay){
            case 'home': 
            home.init();
            break;
        }
       
    },
}

document.addEventListener('DOMContentLoaded', app.init)