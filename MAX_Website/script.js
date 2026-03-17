// Console check
console.log("MAX Educational Council website loaded!");

// SUCCESS MESSAGE
function showSuccess() {
    document.getElementById("successMsg").style.display = "block";
    return false;
}

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// SIMPLE FORM VALIDATION
const form = document.querySelector(".register-form");

form.addEventListener("submit", function(e) {
    const name = form.querySelector("input[type='text']").value;
    const email = form.querySelector("input[type='email']").value;
    const phone = form.querySelector("input[type='tel']").value;

    if (name === "" || email === "" || phone === "") {
        alert("Please fill all fields!");
        e.preventDefault();
    }
});