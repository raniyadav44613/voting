const USERS = [
  { id: 1, username: "user1", password: "1234", role: "user" },
  { id: 2, username: "user2", password: "123", role: "user" },
  { id: 3, username: "user3", password: "123", role: "user" },
  { id: 4, username: "user4", password: "123", role: "user" },
  { id: 5, username: "user5", password: "123", role: "user" },
  { id: 99, username: "admin", password: "admin123", role: "admin" }
];

function login() {
  const u = username.value.trim();
  const p = password.value.trim();

  const user = USERS.find(x => x.username === u && x.password === p);

  if (!user) {
    alert("Invalid credentials");
    return;
  }

  // New session (fresh)
  localStorage.setItem("session", JSON.stringify({
    id: user.id,
    role: user.role,
    voted: false
  }));

  if (user.role === "admin")
    location.href = "admin.html";
  else
    location.href = "vote.html";
}

function logout() {
  localStorage.removeItem("session");
  location.href = "index.html";
}
