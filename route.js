const express = require("express");

const app = express();

app.use(express.json());

const data = [
  {
    id: 1,

    name: "Kiran Rana",

    number: "040-123456",
  },

  {
    id: 2,

    name: "Pratik Bhusal",

    number: "39-44-5323523",
  },

  {
    id: 3,

    name: "Jon Doe",

    number: "12-43-234345",
  },

  {
    id: 4,

    name: "Mary Poppendieck",

    number: "39-23-6423122",
  },
];

// Get all persons

app.get("/persons", (req, res) => {
  res.send(data);
});

// Get a specific person by id

app.get("/persons/:id", (req, res) => {
  const person = data.find((p) => p.id === parseInt(req.params.id));

  if (!person) return res.status(404).send("Person not found");

  res.send(person);
});

// Create a new person

app.post("/persons", (req, res) => {
  const person = {
    id: data.length + 1,

    name: req.body.name,

    number: req.body.number,
  };

  data.push(person);

  res.send(person);
});

// Update a person's information by id

app.put("/persons/:id", (req, res) => {
  const person = data.find((p) => p.id === parseInt(req.params.id));

  if (!person) return res.status(404).send("Person not found");

  person.name = req.body.name;

  person.number = req.body.number;

  res.send(person);
});

// Delete a person by id

app.delete("/persons/:id", (req, res) => {
  const person = data.find((p) => p.id === parseInt(req.params.id));

  if (!person) return res.status(404).send("Person not found");

  const index = data.indexOf(person);

  data.splice(index, 1);

  res.send(person);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
