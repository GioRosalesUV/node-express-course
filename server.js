const express = require('express');
const app = express();

const mockUserData = [
  { name: "Daniel" },
  { name: "Gio" },
];

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: "successfully got users. Nice!!",
    users: mockUserData
  });
});

app.listen(3000, () => {
  console.log("server is running");
});