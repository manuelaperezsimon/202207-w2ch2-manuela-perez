const a = NaN;
const b = NaN;
let result;

const strictEquals = function(a,b) {
   
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return false
  }

  if (Object.is(a,b)) {
    return true
  } 
  
}

strictEquals();

console.log(strictEquals(1,1));
console.log(strictEquals(NaN,NaN));




// A	B	RESULT	
// 1	1	true	
// NaN	NaN	false	// Rule Exception
// 0	-0	true	// Rule Exception
// -0	0	true	// Rule Exception
// 1	"1"	false	
// true	false	false	
// false	false	true	
// "Water"	"oil"	false	
