function *upper (items) {
  // your code goes here
  for (let str of items) {
    try { 
      yield str.toUpperCase();
    } catch (error) {
      yield null;
    }
  }
}

var bad_items = ['a', 'B', 1, 'c'];

for (var item of upper(bad_items)) {
  console.log(item);
}
// want to log: A, B, null, C