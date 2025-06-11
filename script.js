
function toggleText() {
  
    // Get all the elements from the page
    var points = 
        document.getElementById("points");
  
    var showMoreText =
        document.getElementById("moreText");
  
    var buttonText =
        document.getElementById("textButton");
  
   
    if (points.style.display === "none") {
        showMoreText.style.display = "none";
        // Hide the text between the span
        // elements
        points.style.display = "inline";
       
        buttonText.innerHTML = "Know Less";

       
  
      
    }
  
    
    else {
  
        // Show the text between the
        // span elements
      
        points.style.display = "none";
       
        showMoreText.style.display = "inline";
  
        // Hide the dots after the text
       
  
        // Change the text on button
        // to 'Show Less'
        buttonText.innerHTML = "Know Less";
    }
}
