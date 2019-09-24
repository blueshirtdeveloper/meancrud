// function createPyramid(rows)
// {
// for(var i=0;i<rows;i++) {
// var output="";
//     for(var j=0;j<rows-i;j++) {
//         output+=" ";
//     }
//     for(var k=0;k<=i;k++) { 
//         myi =i+1   
//        output += String(myi)+" ";
//     }
//     console.log(output);  
// }  
// }
 diamond(5)  
function diamond(number) {
    line='';
    //up
    for(i=1;i<=number;i++) {
        
        for(j=1;j<=i;j++) {
            
            line+=' '+j; //left
            
        }
        for(j=i;j>1;j--) {
            
            line+=' '+(j-1); //right
            
        }
        
        
        line+= "\n";
    }
    
    //down
    for(i=number-1;i>=1;i--) {
        
        for(j=1;j<=i;j++) {
            
            line+=' '+j; //left
            
        }
        for(j=i;j>1;j--) {
            
            line+=' '+(j-1); //right
            
        }
        line+='\n';
    }
       console.log(line);
        
    }