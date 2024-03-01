
<script src="https://cdn.emailjs.com/dist/email.min.js"></script>

    // Initialize EmailJS with your User ID
    emailjs.init("jBVCGF02eiOxIxDUv");

    // Function to send email on form submission
    document.getElementById('hire-form').addEventListener('submit', function(event) {
        event.preventDefault();
        console.log("Form submitted!");
        const templateParams = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        console.log("Template params:", templateParams);
        
        // Send email using EmailJS send function
        emailjs.send('service_p5eg0nw', 'template_9czbgsb', templateParams)
            .then(function(response) {
                console.log('EmailJS Response:', response);
                alert('Message sent successfully!');
                document.getElementById('hire-form').reset();
            }, function(error) {
                console.error('Error sending message:', error);
                alert('Error sending message. Please try again later.');
            });
    });


