 // This data variable is a global variable​
  var data = [
  {name:"Samantha", age:12},
  {name:"Alexis", age:14}
  ];
  ​
  var user = {
  // this data variable is a property on the user object​
  data :[
  {name:"T. Woods", age:37},
  {name:"P. Mickelson", age:43}
  ],
  showData:function (event) {
  var randomNum = ((Math.random () * 2 | 0) + 1) - 1; // random number between 0 and 1​
  ​
  // This line is adding a random person from the data array to the text field​
  console.log (this.data[randomNum].name + " " + this.data[randomNum].age);
  }
  ​
  }
  ​
  // Assign the user.showData to a variable​
  var showUserData = user.showData;
  ​
  // When we execute the showUserData function, the values printed to the console are from the global data array, not from the data array in the user object​
  //​
  showUserData (); // Samantha 12 (from the global data array)​

  //Fix this when method is assigned to a variable
  var showUserDataAnothor = user.showData.bind(user);