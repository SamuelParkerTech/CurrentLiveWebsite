

// Skill data with labels and progress percentages
const skills = [
    { label: "HTML & CSS", progress: 100 },
    { label: "Web Development", progress: 90 },
    { label: "Web Design", progress: 90 },
    { label: "Computer Science", progress: 14 },
    { label: "Python", progress: 71 },
    { label: "JavaScript", progress: 20 },
    { label: "Data Science", progress: 10 },
    { label: "Data Engineering", progress: 10 },
    { label: "Cyber Security", progress: 7 },
    { label: "C++", progress: 0 }
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