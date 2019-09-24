function createPyramid(rows)
{
for(var i=0;i<rows;i++) {
var output="";
    for(var j=0;j<rows-i;j++) {
        output+=" ";
    }
    for(var k=0;k<=i;k++) { 
        myi =i+1   
       output += String(myi)+" ";
    }
    console.log(output);  
}  
}
createPyramid('5')  