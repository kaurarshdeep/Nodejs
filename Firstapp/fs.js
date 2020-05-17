var fs = require("fs");

fs.open('myfile.txt','r+',function(err,fd){
    if(err)
    {
        console.log((err));
    }else
    {
        console.log("file opened sucessfully");
    }
});