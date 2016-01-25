var add = function(x,y) {
	return x+y;
 };

 var multiply = function(x,y) {
     return x*y;
 }

 var vowelRemover = function(string) {
  return string.replace(/[aeiou]/g,'')
}

var isOdd = function(n) {
  return Math.abs(n % 2) == 1
}

var numToString = function(num){
    return num.toString();
};

var arraySquarer = function(array) {
    return array.map(function(elem){
        return elem*elem;
    })
};


// TESTS
test( "Example test", function(assert) {
  var actual = example();
  assert.equal(actual, "example", "Passed!" );
});

test("add function works", function(assert){
  var x = 2;
  var y = 5;
  var actual = add(x,y);
  assert.deepEqual(actual, 7, "Passed!");
});

test("vowel remover function works", function(assert) {
  var str = "hello"
  var actual = vowelRemover(str);
  assert.deepEqual(actual, "hll", "Passed!");
});

test("function that checks if a number is odd works", function(assert) {
  var num = 9;
  var actual = isOdd(num);
  assert.deepEqual(actual, true, "Passed!");
});

test("numToString function works", function(assert) {
  var num = 10;
  var actual = numToString(num);
  assert.deepEqual(actual, "10", "Passed!");
});

test("arraySquarer function works", function(assert) {
  var arr = [2,3,4,5];
  var actual = arraySquarer(arr);
  assert.deepEqual(actual, [4,9,16,25], "Passed!");
});
