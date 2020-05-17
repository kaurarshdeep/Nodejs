var fs = require("fs");

fs.writeFile('myfile.txt','hy how are u ',function(err){
    if(err)
    {
       return console.error(err);
    }else
    {
        console.log("data written sucessfully");
    }
});