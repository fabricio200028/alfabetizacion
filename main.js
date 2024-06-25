function mostrar() {
    var anclasDiv = document.getElementById("anclas");
    if (anclasDiv.style.display === "none" || anclasDiv.style.display === "") {
        anclasDiv.style.display = "block";
    } else {
        anclasDiv.style.display = "none";
    }
}
