var express = require('express');
var app = express();
var childprocess = require('child_process')
app.get('/', function (req, res) {
    // console.log(req.query.foo)
    var boardParams = JSON.parse(req.query.foo)
    var args = boardParams.BoardFarm_USER 
                + ' ' + boardParams.BoardFarm_IP 
                    + ' ' + boardParams.BoardFarm_PASS 
                        + ' '  + boardParams.DeviceUSB 
                            + ' ' + boardParams.Boot_With
                                + ' ' + boardParams.Board_IP
                                    + ' ' + boardParams.MMC_BLOCK
                                        + ' ' + boardParams.BIN_PATH

    // console.log(args)
    var yourscript = childprocess.exec('./connection.sh ' + args,
  (error, stdout, stderr) => {
      console.log(stdout);
      console.log(stderr);
      if (error !== null) {
          
      }
  });
   res.send('Hello World');
})
var server = app.listen(3008, function () {
   var host = server.address().address
   var port = server.address().portyyyyyy
   console.log("Example app listening at http://%s:%s", host, port)
})