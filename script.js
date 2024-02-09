function openNewTab1() {
    window.open('p1.html', '_blank'); 
}

function openNewTab2() {
    window.open('p2.html', '_blank'); 
}

function openNewTab3() {
    window.open('p3.html', '_blank'); 
}
function openNewTab4() {
    window.open('p4.html', '_blank'); 
}
function openNewTab5() {
    window.open('p5.html', '_blank'); 
}

function openNewTab6() {
    window.open('p6.html', '_blank'); 
}

function openNewTab7() {
    window.open('p7.html', '_blank'); 
}




function calculateDivision() {
    var userInput = document.getElementById('numberInput').value;
    
    if(userInput === "") {
        alert("Please enter a number.");
        return;
    }

    var divisionResult = 1000 / parseFloat(userInput);
    var roundedResult = Math.round(divisionResult);
    document.getElementById('result').innerText = "Course Price in desired Currency: " + roundedResult;
}
function buynow() {
    // Display message
    var messageElement = document.createElement('div');
    messageElement.textContent = 'Redirecting to payment gateway...';
    document.body.appendChild(messageElement);

   
  }