 // Function to handle button click
    function handleClick() {
      // Disable the button
      document.getElementById("myButton").disabled = true;
      // Add loading class
      document.getElementById("myButton").classList.add("loading");

      // Simulate a delay
      setTimeout(function() {
        // Enable the button
        document.getElementById("myButton").disabled = false;
        // Remove loading class
        document.getElementById("myButton").classList.remove("loading");
          document.getElementById("message").innerText = "THANK YOU!";
        // Clear success message after 2 seconds
        setTimeout(function() {
          document.getElementById("message").innerText = "";

        }, 2000);
      }, 2000); // Simulating a 2-second delay
    }