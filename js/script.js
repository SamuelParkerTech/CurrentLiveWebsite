// Get the modal
var modal = document.getElementById("contactModal");

// Get the button that opens the modal
var btn = document.getElementById("contactBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Skill data with labels and progress percentages
const skills = [
  { label: "HTML & CSS", progress: 90 },
  { label: "Web Development", progress: 90 },
  { label: "Web Design", progress: 90 },
  { label: "Computer Science", progress: 12 },
  { label: "Python", progress: 54 },
  { label: "JavaScript", progress: 20 },
  { label: "Data Science", progress: 10 },
  { label: "Data Engineering", progress: 10 }
];

// Function to create skill divs dynamically
function createProgressBar(skill) {
  return `
    <div class="skill">
      <div class="skill-label">${skill.label}</div>
      <div class="progress-bar-background">
        <div class="progress-bar" style="width: ${skill.progress}%;"></div>
        <div class="progress-value">${skill.progress}%</div>
      </div>
    </div>
  `;
}

// Sort skills by progress in descending order
skills.sort((a, b) => b.progress - a.progress);

// Insert sorted skill divs into the container
const container = document.getElementById("progressContainer");
skills.forEach(skill => {
  container.innerHTML += createProgressBar(skill);
});