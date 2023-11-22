
function nextStep() {
    // Hide the first form and show the second form
    document.querySelector('.form-first').style.display = 'none';
    document.querySelector('.form-second').style.display = 'block';
  }

  function back() {
    // Hide the second form and show the first form
    document.querySelector('.form-first').style.display = 'block';
    document.querySelector('.form-second').style.display = 'none';
  }
  

  function submitForm() {
    // Handle form submission for Step 2 here
    const category = document.getElementById('catg').value; // Get category value
    const title = document.getElementById('title').value; // Get title value
    const photoFile = document.getElementById('photo').files[0];
  
    // You can perform further validation and submission here
  
    // Example: Display the selected data in an alert
    let message = `Category: ${category}\nTitle: ${title}\n`;
  
    if (photoFile) {
      message += `Photo Uploaded`;
      alert("Submitted Succesfully");
    } else {
      message += 'No photo selected';
      alert(message);
    }
  
    // Reload the page after displaying the alert
    window.location.reload();
  }
  


// Wait for the page to load before running animations
window.addEventListener("load", function () {
  
  gsap.from(".logo", {
    opacity: 0,
    duration: 1,
    delay: 0.5,
  });

  gsap.from("ul li", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.8,
    stagger: 0.2, // Stagger the animation for list items
  });

  gsap.from(".home h1", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1.2,
  });

  gsap.from(".home h4", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1.4,
  });

  gsap.from("button", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1.6,
  });
});




