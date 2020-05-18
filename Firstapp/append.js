var fs = require("fs");

fs.appendFile('newfile.txt','\n this is an amazing task' , function(err,data){
    if(err)
    {
       return console.error(err);
    }else
    {
        console.log('data appended successfully');
    }
});