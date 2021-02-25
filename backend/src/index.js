const express = require('express');
const routes = require('./routes');

const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);
app.use('/static', express.static('uploads'));

app.listen(3333, () => {
    console.log("##################################");
});
















/* const { readFileSync } = require('fs');

const { Client } = require('ssh2');

const conn = new Client();
const command = 'en\nconfig\nscroll 512\ndisplay ont autofind all\n\n';

var dados = []
conn.on('ready', () => {
  console.log('Client :: ready');
  conn.exec(command, (err, stream) => {
    if (err) throw err;
    stream */
    /* .on('close', (code, signal) => {
      console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
      conn.end();
    }) *//* .on('data', (data) => {

      console.log('STDOUT: ' + data);
      dados = data;
    }).stderr.on('data', (data) => {
      console.log('STDERR: ' + data);
    });
  });
}).connect({
  host: '10.100.1.9',
  port: 22,
  username: 'pedro.rosa',
  password: 'Pedro@Rosa1'
});

console.log(dados) */
