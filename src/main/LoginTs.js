var LoginTs = /** @class */ (function () {
    function LoginTs() {
        var _this = this;
        var submitBtn = document.getElementById("enter");
        submitBtn.addEventListener("click", function (e) {
            _this.username = document.getElementById("se").value;
            _this.password = document.getElementById("sp").value;
            return LoginTs.validateInput(_this.username, _this.password);
        });
        var forgotBtn = document.getElementById("forgotPass");
        forgotBtn.addEventListener("click", function (e) { return LoginTs.forgotPassword(); });
    }
    LoginTs.validateInput = function (username, password) {
        if (username == "billy" && password == "bronco1") {
            alert("success");
            window.location.href = "home_view.html";
        }
        else {
            alert("wrong username or password");
        }
    };
    LoginTs.forgotPassword = function () {
        alert("tough luck lmao");
    };
    return LoginTs;
}());
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
window.onload = function () {
    var loginTs = new LoginTs();
};
