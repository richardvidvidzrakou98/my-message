    const name = prompt("Enter your first name");
    document.querySelector('#first-name').innerHTML = "Welcome " + name + "!";

function chat() {
    
    // Define an array of messages
    var messages = [
      "Hi! How are you doing?",
      "I just wanted to say that you've been on my mind a lot lately.",
      "I really enjoy spending time with you.",
      "I feel like we have a special connection.",
      "I'm not sure how to say this, but...I think I might be falling in love with you."
    ];
    
    // Define a variable to keep track of the index of the current message
    var currentMessage = 0;
    
    // Define a function to display the next message in the array
    function displayMessage() {
      var message = messages[currentMessage];
      var result = document.querySelector('.result');
      result.innerHTML += '<p>' + message + '</p>';
      currentMessage++;
      
      // If all messages have been displayed, show a final message
      if (currentMessage === messages.length) {
        setTimeout(function() {
          result.innerHTML += '<p>So...what do you think?</p>';
        }, 2000);
      }
    }
    
    // Start the conversation by displaying the first message
    displayMessage();
    
    // Use setTimeout to simulate a real-time conversation
    setTimeout(function() {
      displayMessage();
    }, 2000);
    setTimeout(function() {
      displayMessage();
    }, 4000);
    setTimeout(function() {
      displayMessage();
    }, 6000);
    setTimeout(function() {
      displayMessage();
    }, 8000);
  }
  