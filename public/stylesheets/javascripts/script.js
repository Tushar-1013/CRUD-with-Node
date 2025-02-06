function togglePinField() {
    const role = document.getElementById("role").value;
    const pinGroup = document.getElementById("pin-group");

    if (role === "admin") {
        pinGroup.classList.remove("hidden");
    } else {
        pinGroup.classList.add("hidden");
    }
}