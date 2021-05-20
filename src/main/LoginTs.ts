
class LoginTs{
    username: string;
    password: string;

    constructor() {

        let submitBtn = document.getElementById("enter")

        submitBtn.addEventListener("click", (e: Event) => {
            this.username =(document.getElementById("se") as HTMLInputElement).value;
            this.password =(document.getElementById("sp") as HTMLInputElement).value;
            return LoginTs.validateInput(this.username,this.password)
        });

        let forgotBtn= document.getElementById("forgotPass")
        forgotBtn.addEventListener("click",(e:Event) =>LoginTs.forgotPassword());


    }



    private static validateInput(username: string, password: string) {
        if(username =="billy" && password =="bronco1"){
            alert("success")
            window.location.href="home_view.html";
        }
        else{
            alert("wrong username or password")
        }
    }

    private static forgotPassword() {
         alert("tough luck lmao")
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


window.onload=function() {
    let loginTs = new LoginTs();
}
































































































































































