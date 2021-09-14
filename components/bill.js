import { rem } from 'prelude-ls';
import _ from 'underscore';

let pricing = {
    100: {
        100:0
    },
    200: {
        100:0,
        200:2.5
    },
    500: {
        100: 0,
        200: 2.5,
        500: 3
    },
    Infinity: {
        100: 0,
        200: 3.5,
        500: 4.6,
        Infinity: 6.6
    }
}

export function getPrice( units ){
    // let slabLimits = _keys());
    let slab = _.find(pricing,(x,i) => Number(i)>=units);
    console.log(slab);
    let total  = _.reduce(slab,(memo,val,i)=>{
        if(!memo.rem) return memo;
        console.log(memo,val,i);
        let width = Number(i) - memo.cons;
        let consumable = _.min([width,memo.rem]);
        console.log(val);
        // debugger;
        memo.total += val*consumable;
        memo.cons += consumable;
        memo.rem -= consumable;
        return memo;
        
    },({rem:units,total:0,cons:0}))
    console.log(total);
    return total.total;
}

