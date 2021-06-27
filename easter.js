function setup() {  
     
    // Create Canvas of given size 
    var cvs = createCanvas(600, 250);
}
  
function draw() {
    
    // Set the background color
    background('aqua'); 
    
    // Use createDiv() function to
    // create a div element
    var myDiv = createDiv('Jesus is Risen');
    
    var myDiv1 = createDiv('Blessed Easter');
    
    // Use child() function
    myDiv.child(myDiv1);
    
    // Set the position of div element
    myDiv.position(150, 100);  
    
    myDiv.style('text-align', 'center');
    
    // Set the font-size of text
    myDiv.style('font-size', '30px');
    
    // Set the font color
    myDiv.style('color', 'white');
  
}