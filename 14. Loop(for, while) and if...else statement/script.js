// 1
function calcAge (age) {
    let days=365;
       return age * days 
   } 
     console.log(calcAge(65)); 
     console.log(calcAge(0)); 
     console.log(calcAge(20) );


// 2
let arrayExample=[];
for (let i=0; i< 8; i++) {
    arrayExample.push(i);
    console.log(arrayExample);
}
    


// 3
let sum=0;
for (let b=1; b<10; b++){
    b%2==0;
    sum+=b;
}
console.log(sum);


// 4
let multp =1;
for(let c=1;c<17;c++){
    c%2==1;
    multp *=c;
}
console.log(multp)

// 5
let multiply=1;
for (let d=1; d<=16; d++){
 if(d%2==1)   
 multiply *=d
}
console.log(multiply);

//6
let sum6  = 17;
for(let a=17;a<=30;a++){
   if( a==19)  { 
        continue;
      if( a==20)  {
            continue
        }
        sum6 +=a;
    }
}
console.log(sum6)

// 8
// for (let w=1;w<=16;w++){
//     w%2==0
//  power **=w
// }
// console.log(power)