
class RegisterTs{
    username: string;
    password: string;
    password2:string;

    constructor() {

        let registerBtn = document.getElementById("enterR")

        registerBtn.addEventListener("click", (e: Event) => {
            this.username =(document.getElementById("re") as HTMLInputElement).value;
            this.password =(document.getElementById("rp") as HTMLInputElement).value;
            this.password2 =(document.getElementById("rrp") as HTMLInputElement).value;
            return RegisterTs.validateInput(this.password,this.password2)
        });

    }



    private static validateInput(password: string, password2:string) {
        if(password==password2){
            alert("success")
            window.location.href="home_view.html";
        }
        else{
            alert("Password inputs do not match")
        }
    }

}

window.onload= function() {
    let regTs = new RegisterTs();
}












