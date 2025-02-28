function togglePinField() {
    const role = document.getElementById("role").value;
    const pinGroup = document.getElementById("pin-group");
    const adminname = document.getElementById("admin-name");

    if (role === "admin") {
        pinGroup.classList.remove("hidden");
        adminname.classList.add("hidden");

    }
    else {
        pinGroup.classList.add("hidden");
        adminname.classList.remove("hidden");

    }
}