document.addEventListener("DOMContentLoaded", function() {
    var chatbotLink = document.getElementById("chatbot-link");
    var chatbotContainer = document.getElementById("chatbot");
    
    chatbotLink.addEventListener("click", function(event) {
      event.preventDefault();
      toggleChatbot();
    });
  
    function toggleChatbot() {
      if (chatbotContainer.style.display === "none") {
        chatbotContainer.style.display = "block";
      } else {
        chatbotContainer.style.display = "none";
      }
    }
  });
  