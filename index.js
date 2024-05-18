const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const todos = [
  {
    id: 1,
    title: "Learn JavaScript",
    description: "Complete JavaScript tutorials on Codecademy",
    completed: true,
  },
  {
    id: 2,
    title: "Build a Node.js App",
    description: "Create a REST API using Express and Node.js",
    completed: false,
  },
  {
    id: 3,
    title: "Read a Book",
    description: "Finish reading 'Clean Code' by Robert C. Martin",
    completed: false,
  },
  {
    id: 4,
    title: "Workout",
    description: "Do a 30-minute workout session",
    completed: true,
  },
  {
    id: 5,
    title: "Plan a Trip",
    description: "Plan the itinerary for the weekend getaway",
    completed: false,
  },
];

app.get("/todo", (req, res) => {
  const todo = todos.find((t) => t.id == req.query.id);
  res.json({
    todo,
  });
});

app.get("/todos", (req, res) => {
  const randomTodos = [];
  for (let i = 0; i < 5; i++) {
    if (Math.random() > 0.5) {
      randomTodos.push(todos[i]);
    }
  }
  res.json({
    todos: randomTodos,
  });
});

app.get("/sum", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const sum = a + b;
  res.send(sum.toString());
});

app.get("/interest", (req, res) => {
  const principal = parseInt(req.query.principal);
  const rate = parseInt(req.query.rate);
  const time = parseInt(req.query.time);
  const interest = (principal * rate * time) / 100;
  const total = principal + interest;
  res.send({
    total: total,
    interest: interest,
  });
});

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

app.get("/notifications", (req, res) => {
  res.json({
    network: getRandomNumber(10),
    jobs: getRandomNumber(10),
    messaging: getRandomNumber(10),
    notifications: getRandomNumber(10),
  });
});

app.listen(8080);
