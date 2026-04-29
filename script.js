document.getElementById("applicationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Application submitted successfully! Wait for interview.");

    this.reset();
});
