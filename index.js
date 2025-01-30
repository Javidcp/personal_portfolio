function sendEmail(event) {
    event.preventDefault();
    
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    
    const serviceId = "service_mboj3i6";
    const templateId = "template_aety64d";

    
    emailjs.send(serviceId, templateId, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";

            console.log(res);
            alert("Your message sent successfully");
        })
        .catch(err => console.log(err));
}
