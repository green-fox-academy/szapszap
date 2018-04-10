// Create a prison function, that has your name as a private fugitive variable
// The function should return an object that has two methods:
//  - visit() // logs "[yourname] is visited [x] time(s)" to the console.
//    - the [x] times displayes the numbers the function is called
//    - If the fugitive variable is empty, then display "Nobody is here anymore"
//  - escape() // logs "BREAKING NEWS, [yourname] escaped the prison" to the console.
//    - it should empties the fugitive variable

function prison() {
  privateFug = 'Szapszap';
  x = 0;
  return {
    visit: function alcatraz(x) {
    if (x === 0) {
      console.log('Nobody is here anymore');
       }
       else {
        console.log(`${privateFug} is visited ${x} times`);
          }
        }, 
      escape: function alcatraz() {
        console.log(`BREAKING NEWS, ${privateFug} escaped the prison!`);
        privateFug = '';
        }
      }
    }

  let fugitive = prison();
  fugitive.visit(2); 
  fugitive.escape(); 

