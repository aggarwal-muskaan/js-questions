/*
    Is Javascript pass-by-reference or pass-by-value language?
    Ans => It is ALWAYS pass-by-value, but for objects the value of the variable is a reference
*/

var passByValue = "old value";
var passByReference = { check: "unchanged" };

console.log("before calling function: ", passByValue, passByReference);
changeObjects(passByValue, passByReference);
function changeObjects(passByValue, passByReference) {
  passByValue = "new string";
  passByReference.check = "changed!!!";
  passByReference = { check: "reset" };
}

console.log("after calling function: ", passByValue, passByReference);

/*
 This means that if you change the parameter itself,
 that won't affect the item that was fed into the parameter. 
 But if you change the internals of the parameter, 
 that will propagate back up which is known as CALL-BY-SHARING  
*/
