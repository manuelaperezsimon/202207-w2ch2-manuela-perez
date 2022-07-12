
const strictEquals = function(a,b) { 
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return false
  }
  
  if(!a && !b) {
      return true
  }

  if (Object.is(a,b)) {
      return true
    }  else {
      return false
  }
}

strictEquals();

console.log(strictEquals(1,1));
console.log(strictEquals(NaN,NaN));
console.log(strictEquals(0,-0));
console.log(strictEquals(-0,0));
console.log(strictEquals(1,'1'));
console.log(strictEquals(true, false));
console.log(strictEquals(false, false));
console.log(strictEquals("Water", "oil"));




