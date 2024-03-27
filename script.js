// Counter variables for each contestant
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;

// Function to update the bar graph based on the counter values
function updateGraph() {
  const bar1 = document.getElementById('bar1');
  const bar2 = document.getElementById('bar2');
  const bar3 = document.getElementById('bar3');
  const bar4 = document.getElementById('bar4');
  const bar5 = document.getElementById('bar5');

  bar1.style.height = counter1 + 'em';
  bar2.style.height = counter2 + 'em';
  bar3.style.height = counter3 + 'em';
  bar4.style.height = counter4 + 'em';
  bar5.style.height = counter5 + 'em';
}

// Function to handle button click
function handleButtonClick() {
  // Increment the respective counter based on the clicked button's ID
  switch (event.target.id) {
    case 'incrementBtn1':
      counter1++;
      break;
    case 'incrementBtn2':
      counter2++;
      break;
    case 'incrementBtn3':
      counter3++;
      break;
    case 'incrementBtn4':
      counter4++;
      break;
    case 'incrementBtn5':
      counter5++;
      break;
  }

  // Update the bar graph
  updateGraph();
}

// Attach event listener to the increment buttons
document.getElementById('incrementBtn1').addEventListener('click', handleButtonClick);
document.getElementById('incrementBtn2').addEventListener('click', handleButtonClick);
document.getElementById('incrementBtn3').addEventListener('click', handleButtonClick);
document.getElementById('incrementBtn4').addEventListener('click', handleButtonClick);
document.getElementById('incrementBtn5').addEventListener('click', handleButtonClick);
