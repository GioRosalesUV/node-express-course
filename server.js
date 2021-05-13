const express = require('express');
const app = express();

const mockUserData = [
  { name: "Daniel" },
  { name: "Gio" },
];

app.get('/users', (req, res) => {
  res.json({
    success: true,
    message: "successfully got users. Nice!!",
    users: mockUserData
  });
});

app.get('/users/:id', (req, res) => {
  console.log(req.params.id);
  res.json({
    success: true,
    message: "got one user",
    user: req.params.id
  });
});

app.listen(3000, () => {
  console.log("server is running");
});