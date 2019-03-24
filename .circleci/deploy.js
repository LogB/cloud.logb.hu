var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

var config = {
  user: process.env.FTPUSERNAME,
  password: process.env.FTPPASS,
  host: process.env.FTPHOST,
  port: 21,
  localRoot: __dirname + "/../dist/",
  remoteRoot: "/subdoms/cloud/test",
  deleteRemote: true,
  forcePasv: true,
  include: ['*']
}

ftpDeploy.deploy(config, function (err) {
  if (err) console.log(err)
  else console.log('finished');
});
