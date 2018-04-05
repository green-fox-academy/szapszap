const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

 app.get('/', (req, res) => {
  const name = req.query.name || 'Guest';
  res.render('home', {
     message: `Welcome back, ${name}!`,
   });
 });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});