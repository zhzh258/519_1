const express = require('express');
const app = express();
const port = process.env.PORT || 3000

app.get('/api', (req, res) => {
  const Secret1 = process.env.MyAppSetting || "MyAppSetting not found...";
  res.send(Secret1);
});

app.use('/', express.static('frontend/build'));


app.listen(port, () => {
  console.log('Server listening on port '+ port);
});

// 
