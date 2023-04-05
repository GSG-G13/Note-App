const {app} = require('./app');

const port = 3000;

app.listen(port, () => {
  console.log(`server is working on http://localhost:${port}`);
})