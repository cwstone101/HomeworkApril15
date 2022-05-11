//1. Define a function  maxOfTwoNumbers  that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.


maxOfTwoNumbers = (num1, num2) => {
    if (num1 > num2) return num1;
    else return num2;
}


/*
2. Define a function  maxOfThree  that takes three numbers as arguments and returns the largest of them.
*/
maxOfThree = (num1, num2, num3) => {
    let max = Math.max(num1, num2, num3);
    return max;   
}
console.log(max);


/*
3. Write a function  isCharacterAVowel  that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/
isCharacterAVowel = (h) => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.indexOf(h) !== -1){
        return true;
    }
    return false;
}

/*
4. Define a function  sumArray  and a function  multiplyArray  that sums and multiplies (respectively) all the numbers in an array of numbers. For example,  sumArray([1,2,3,4])  should return 10, and  multiplyArray([1,2,3,4])  should return 24.
*/

sumArray = () => {
    let sum = 0;
    for (let i = 0; i < Array.length; i++){
        sum += Array[i];
    }
    return sum;
}

/*
5.Write a function that returns the number of arguments passed to the function when called.
*/
    let numberOfArguments = function(){
        return arguments.length
    }


/*
6. Define a function  reverseString  that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

reverseString = (string) => {
    let arr = string.split('');
    let revArr = [];
    for (let i = array.length -1; i >= 0; i--){
        revArr.push(arr[i]);
    }
    return revArr.join('');

}

/*
7. Write a function  findLongestWord  that takes an array of words and returns the length of the longest one.
*/
findLongestWord = (arr) => {
    longest = 0;
    for (let i=0; i < arr.length; i++){
        if (arr[i].length > longest){
            longest = arr[i].length;
        }
    }
    return longest;
};

/*
8. Write a function  filterLongWords  that takes an array of words and a number  i  and returns the array of words that are longer than i characters long.
*/
filterLongWords = () => {
    newArr = [];
    for (let i = 0; i < arr.length; i++){
        if(arr[i].length > num){
            newarr.push(arr[i]);
        }
    }
    return newArr;
  
}

