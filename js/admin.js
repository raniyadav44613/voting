// const session = JSON.parse(localStorage.getItem("session"));
// if (!session || session.role !== "admin") {
//   window.location.href = "index.html";
// }

// let candidates = JSON.parse(localStorage.getItem("candidates")) || [];

// const ctx = document.getElementById("chart");

// new Chart(ctx, {
//   type: "bar",
//   data: {
//     labels: candidates.map(c => c.name),
//     datasets: [{
//       data: candidates.map(c => c.votes)
//     }]
//   }
// });

// function resetElection() {
//   localStorage.clear();
//   alert("Election reset");
//   window.location.href = "index.html";
// }

const session = JSON.parse(localStorage.getItem("session"));
if (!session || session.role !== "admin") location.href = "index.html";

let candidates = JSON.parse(localStorage.getItem("candidates")) || [];

const ctx = document.getElementById("chart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: candidates.map(c => c.name),
    datasets: [{
      data: candidates.map(c => c.votes)
    }]
  }
});

function resetElection() {
  if (!confirm("Reset all votes?")) return;
  localStorage.removeItem("candidates");
  alert("Election reset successfully");
  location.href = "index.html";
}

function saveElectionTime() {
  const start = document.getElementById("startTime").value;
  const end = document.getElementById("endTime").value;

  if (!start || !end) {
    alert("Please select time");
    return;
  }

  localStorage.setItem("electionTime", JSON.stringify({
    start: new Date(start).getTime(),
    end: new Date(end).getTime()
  }));

  alert("Election time saved");
}
