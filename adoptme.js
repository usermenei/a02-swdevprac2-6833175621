function validateForm() {
    var uname    = document.forms["adoption"]["full-name"];
    var utel     = document.forms["adoption"]["phone"];
    var upet     = document.forms["adoption"]["pet-count"];
    var uconsent = document.forms["adoption"]["consent"];
    var isValid  = true;

    if (uname.value.trim() === "") {
        document.getElementById("fn-error").textContent = "Full name is required.";
        uname.classList.add("error");
        isValid = false;
    } else {
        document.getElementById("fn-error").textContent = "";
        uname.classList.remove("error");
    }

    if (utel.value.trim() === "") {
        document.getElementById("tel-error").textContent = "Phone number is required.";
        utel.classList.add("error");
        isValid = false;
    } else if (!/^\d+$/.test(utel.value.trim())) {          // ← added
        document.getElementById("tel-error").textContent = "Phone number must contain numbers only.";
        utel.classList.add("error");
        isValid = false;
    } else {
        document.getElementById("tel-error").textContent = "";
        utel.classList.remove("error");
    }

    var petVal = upet.value.trim();
    if (petVal === "" || isNaN(petVal)) {
        alert("Please enter a number of current pets.");
        upet.classList.add("error");
        isValid = false;
    } else if (Number(petVal) < 0 || Number(petVal) > 100) {
        alert("Number of current pets must be between 0 and 100.");
        upet.classList.add("error");
        isValid = false;
    } else {
        upet.classList.remove("error");
    }

    if (!uconsent.checked) {
        alert("กรุณารับทราบว่าการส่งแบบฟอร์มนี้เป็นการแจ้งความสนใจ โดยไม่รับรองการได้รับอุปการะสุนัข");
        isValid = false;
    }

    return isValid;
}