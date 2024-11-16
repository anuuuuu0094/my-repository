// pattern printing 
function patternPrintingII(N) {
    for(let i=0; i<N; i++){
      let bag = "";
      for(let j=0; j<N; j++){
        if(j==N-1 || i == N-1 || j == 0 ){
            bag = bag + "*"+" ";
        }else{
          bag = bag + " "+ " "
        }
      }
      console.log(bag)
    }
}

// find even number in array 

// Example array
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function to get even numbers from the array
const getEvenNumbers = (arr) => {
    return arr.filter(number => number % 2 === 0);
};

// Call the function and store the result
const evenNumbers = getEvenNumbers(number);

// Output the result
console.log("Even numbers in the array:", evenNumbers);

// find odd numbe in the array

// Example array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function to get odd numbers from the array
const getOddNumbers = (arr) => {
    return arr.filter(number => number % 2 !== 0);
};

// Call the function and store the result
const oddNumbers = getOddNumbers(numbers);

// Output the result
console.log("Odd numbers in the array:", oddNumbers);
