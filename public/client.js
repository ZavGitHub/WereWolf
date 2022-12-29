function showRole() {
    var x = document.getElementById("role");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}