var fs = require("fs");

fs.stat('myfile.txt',function(err,stats){
    if(err)
    {
      return console.error(err);
    }
    console.log(stats);
    console.log(" got into file sucessfully");
    console.log("isfile ?" + stats.isFile());
    console.log("isdir ?" + stats.isDirectory());
    console.log("isblockdevice ?" + stats.isBlockDevice());
    console.log("isCharacterDevice ?" + stats.isCharacterDevice());
    console.log("isSymbolicLink ?" + stats.isSymbolicLink());
    console.log("isSocket ?" + stats.isSocket());
    console.log("isFIFO?" + stats.isFIFO());
});