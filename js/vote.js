// const session = JSON.parse(localStorage.getItem("session"));
// if (!session) window.location.href = "index.html";

// let candidates = JSON.parse(localStorage.getItem("candidates")) || [
//   { id: 1, name: "Rahul", votes: 0 },
//   { id: 2, name: "Amit", votes: 0 },
//   { id: 3, name: "Priya", votes: 0 },
//   { id: 4, name: "Sneha", votes: 0 },
//   { id: 5, name: "Vikram", votes: 0 }
// ];

// let votedUsers = JSON.parse(localStorage.getItem("votedUsers")) || [];

// // if (votedUsers.includes(session.id)) {
// //   alert("You already voted");
// //   window.location.href = "index.html";
// // }

// const div = document.getElementById("candidates");

// candidates.forEach(c => {
//   let d = document.createElement("div");
//   d.className = "candidate";
//   d.innerHTML = `
//     <h3>${c.name}</h3>
//     <button onclick="vote(${c.id})">Vote</button>
//   `;
//   div.appendChild(d);
// });

// function vote(id) {
//   candidates.find(c => c.id === id).votes++;
//   votedUsers.push(session.id);

//   localStorage.setItem("candidates", JSON.stringify(candidates));
//   localStorage.setItem("votedUsers", JSON.stringify(votedUsers));

//   alert("Vote submitted successfully");
//   window.location.href = "index.html";
// }

const electionTime = JSON.parse(localStorage.getItem("electionTime"));

if (!electionTime) {
  alert("Election not started yet");
  location.href = "index.html";
}

const now = Date.now();

if (now < electionTime.start) {
  alert("Voting not started yet");
  location.href = "index.html";
}

if (now > electionTime.end) {
  alert("Voting time over");
  location.href = "index.html";
}


const session = JSON.parse(localStorage.getItem("session"));
if (!session || session.role !== "user") location.href = "index.html";

let candidates = JSON.parse(localStorage.getItem("candidates")) || [
  { id: 1, name: "Rahul", votes: 0 },
  { id: 2, name: "Amit", votes: 0 },
  { id: 3, name: "Priya", votes: 0 },
  { id: 4, name: "Sneha", votes: 0 },
  { id: 5, name: "Vikram", votes: 0 }
];

if (session.voted) {
  alert("You already voted in this session");
  location.href = "index.html";
}

const box = document.getElementById("candidates");

candidates.forEach(c => {
  const d = document.createElement("div");
  d.className = "candidate";
  d.innerHTML = `
    <h3>${c.name}</h3>
    <button onclick="vote(${c.id})">Vote</button>
  `;
  box.appendChild(d);
});

function vote(id) {
  const c = candidates.find(x => x.id === id);
  c.votes++;

  localStorage.setItem("candidates", JSON.stringify(candidates));

  session.voted = true;
  localStorage.setItem("session", JSON.stringify(session));

  alert("Vote successful!");
  location.href = "index.html";
}

const timerEl = document.getElementById("timer");

setInterval(() => {
  const now = Date.now();
  const diff = electionTime.end - now;

  if (diff <= 0) {
    timerEl.innerText = "Voting Closed";
    return;
  }

  const h = Math.floor(diff / (1000 * 60 * 60));
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  timerEl.innerText = `Time Left: ${h}h ${m}m ${s}s`;
}, 1000);

// const session = JSON.parse(localStorage.getItem("session"));

if (!session) {
  alert("Login required");
  location.href = "index.html";
}


