var fs = require("fs");

fs.rename('myfile.txt', 'newfile.txt',function(err,data){
    if(err)
    {
       return console.error(err);
    }else
    {
        console.log('file renamed successfully');
    }
});