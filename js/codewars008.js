
//If number of x's and o's in a string is the same return true : false 

function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}



//Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including 
//them and return it. If the two numbers are equal return a or b.

function getSum(a,b)
    {
       if (a == b) return a;
       else if (a < b) return a + getSum(a+1, b);
       else return a + getSum(a-1,b);
    }

