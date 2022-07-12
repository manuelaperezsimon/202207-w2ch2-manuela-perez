const a = 1;
const b = 1;
let result;

const strictEquals = function(a,b) {
  if (Object.is(a,b)) {
    return true
  }  
}

strictEquals();



// A	B	RESULT	
// 1	1	true	
// NaN	NaN	false	// Rule Exception
// 0	-0	true	// Rule Exception
// -0	0	true	// Rule Exception
// 1	"1"	false	
// true	false	false	
// false	false	true	
// "Water"	"oil"	false	
