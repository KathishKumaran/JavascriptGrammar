let fruits=[{name:"banana",count:10},
{name:"orange",count:15},
{name:"apple",count:3},
{name:"grapes",count:56}];
let result=(a,b)=>a.count-b.count;
let endresult=fruits.sort(result)
console.log(endresult);