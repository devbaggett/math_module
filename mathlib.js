module.exports = function (){
  return {
    add: function(num1, num2) { 
         console.log("The sum is: ", num1 + num2);
    },
    multiply: function(num1, num2) {
         console.log("The product is: ", num1 * num2);
    },
    square: function(num) {
         console.log(num + " squared is: ", num * num);
    },
    random: function(num1, num2) {
        num1 = Math.ceil(num1);
        num2 = Math.floor(num2);
        console.log(Math.floor(Math.random() * (num2 - num1)) + num1); //The maximum is exclusive and the minimum is inclusive
    }
  }
};