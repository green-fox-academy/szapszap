'use strict';

// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

function changeIt(st: string) {
    let newst: string;
    if (st.indexOf('x') > -1) {
        newst = st.replace(/x/i, 'y');
        changeIt(newst);
    } else {
        console.log(st);
    }
    
}
changeIt("Vox populi, vox Dei");