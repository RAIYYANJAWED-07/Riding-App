const http = require('http');
const app = require('./app');

const port = process.env.PORT 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});