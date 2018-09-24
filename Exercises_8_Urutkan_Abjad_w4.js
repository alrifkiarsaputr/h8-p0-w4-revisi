function urutkanAbjad(str) {
  // you can only write your code here!
  var pecahStr = str.split('')
  var strUrut = pecahStr.sort()
  var kata = ''

  for (var i=0; i < strUrut.length; i++) {
    kata = kata + strUrut[i]
  }
  return kata
  // return strUrut
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'