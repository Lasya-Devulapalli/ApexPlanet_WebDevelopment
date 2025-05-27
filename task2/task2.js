// Form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  const email = document.getElementById("email").value.trim();
  const name = document.getElementById("name").value.trim();

  // Email format regex (basic but effective)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !name) {
    alert("Please fill all fields.");
    e.preventDefault();
  } else if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    e.preventDefault();
  }
});

// To-Do list functionality
function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  const list = document.getElementById("taskList");

  if (task !== "") {
    const li = document.createElement("li");
    li.textContent = task;

    // Add delete option
    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.onclick = () => li.remove();
    li.appendChild(delBtn);

    list.appendChild(li);
    input.value = "";
  }
}