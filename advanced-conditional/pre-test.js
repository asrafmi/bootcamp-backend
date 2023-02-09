var condition = [true,undefined,undefined,false]

for (let i=0;i < condition.length; i++) {
    if (typeof(condition[i]) === undefined ) {
        console.log('The condition is undefinded');
    } else {
        console.log(`The condition is ${condition[i]}`);
    }    
}


