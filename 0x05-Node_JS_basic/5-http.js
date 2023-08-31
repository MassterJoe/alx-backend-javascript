const countStudents = require('./3-read_file_async');

const http = require('http');
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
    res.write('This is the list of our students');
    countStudents(process.argv[2]);
      
    
}
});
app.listen(1245)
module.exports = app;
