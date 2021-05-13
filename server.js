const express = require('express');
const app = express();

const mockUserData = [
  { name: "Daniel" },
  { name: "Gio" },
];
//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const mockUsername = "GioRosales";
  const mockPassword = "123456";

  if (username === mockUsername && password === mockPassword)
    return res.json({
      success: true,
      message: "password and username match!",
      token: 'encrypted token goes here'
    });

  return res.json({
    success: false,
    message: "password and username do not match"
  })
})

app.listen(3000, () => {
  console.log("server is running");
});