document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
  
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);
  
    alert('Thank you for your message!');
  
    document.getElementById('contactForm').reset();
  });
  