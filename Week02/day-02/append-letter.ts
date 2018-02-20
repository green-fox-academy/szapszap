'use strict';
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.

let far: string[] = ['kuty', 'macsk', 'kacs', 'rók', 'halacsk'];

function appendA(item: string[]) {
    for (let i = 0; i < item.length; i++) {
        item[i] += 'a';
}
console.log(item);
return item;
}

appendA(far);
