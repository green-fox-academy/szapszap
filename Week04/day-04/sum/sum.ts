'use strict';


export class sumIt {
    sumFunc(sum: any[]) {
        for(let i:number = 0; i < sum.length; i++) {
            if (typeof sum[i] === 'string') {
                return 0;
                } 
            }   
            try {
    let sum2 = sum.reduce((a, b) => a + b, 0);
    return sum2;
    } catch(err) {
        return 0;
    }
       
    }
}
