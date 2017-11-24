const sortByOptions= {
   'Best Match': 'best_match',
   'Highest Rated': 'rating',
   'Most Reviewed': 'review_count'
 }
let x= Object.keys(sortByOptions);
console.log(x);   //Object.keys(OBJECT) returns an array whose elements are the KEYS of OBJECT
// statement above logs ['Best Match', 'Highest Rated', 'Most Reviewed']
//NOTE there exists an Object.values(...) method. Couldn't I use this to simplify code...?
//NOTE check out note above.

Object.keys(sortByOptions).map(sortByOption =>
{ let sortByOptionValue= sortByOptions[sortByOption];
  console.log(sortByOptionValue + ': ' + sortByOption);
});

/* then this next chunk of code. With our previous definition of x, we have essentially x.map(...). For the purpose of this comment
I am going to define news variables to make it more abstract. So we have x.map(y =>
{let z= sortByOptions[y]...) This callback function goes through our array x, and for every element we let a new variable z be defined as
the VALUE of the sortByOptions OBJECT (previously defined) y key. Remember we are iterating through array x, which coincidentally
contains all of the keys of sortByOptions (due to the Object.keys(...)). Then we simply console.log the value of the object followed
by the corresponding key. This is a VERY NIFTY way of going through an object. And in the real code './SearchBar.js' we use JSX to
put each key of our object in an <li></li> element that we then give a key attribute to that is equal to the corresponding value. 
