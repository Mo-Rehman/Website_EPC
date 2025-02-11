document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    
    fetch("https://formspree.io/f/xbldagbb", {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
    }).then(response => {
        if (response.ok) {
            alert("Your request has been submitted successfully!");
            document.getElementById("contactForm").reset();
        } else {
            alert("There was an error submitting your request. Please try again.");
        }
    });
});
