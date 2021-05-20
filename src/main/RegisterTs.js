var RegisterTs = /** @class */ (function () {
    function RegisterTs() {
        var _this = this;
        var registerBtn = document.getElementById("enterR");
        registerBtn.addEventListener("click", function (e) {
            _this.username = document.getElementById("re").value;
            _this.password = document.getElementById("rp").value;
            _this.password2 = document.getElementById("rrp").value;
            return RegisterTs.validateInput(_this.password, _this.password2);
        });
    }
    RegisterTs.validateInput = function (password, password2) {
        if (password == password2) {
            alert("success");
            window.location.href = "home_view.html";
        }
        else {
            alert("Password inputs do not match");
        }
    };
    return RegisterTs;
}());
window.onload = function () {
    var regTs = new RegisterTs();
};
