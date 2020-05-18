
var fs = require("fs");

fs.unlink('duplicate.txt',function(err,data){
    if(err)
    {
       return console.error(err);
    }else
    {
        console.log('file deleted successfully');
    }
});