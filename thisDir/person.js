var person = {
    firstName: "hidoos",
    lastName: "man",
    getFullName: function() {
        return this.firstName + this.lastName;
    }
}
console.log(person.getFullName());
var p = person;
person.firstName = "joysk";
console.log(p.getFullName());

var anithorPerson = {
    firstName : "anithor hidoos",
    lastName : "anithor man"
}

// 第一种情况
console.log("anithorPerson", person.getFullName.apply(anithorPerson));

// 第二种情况和jquery混合使用的使用
// http://jsbin.com/exanul/1/edit
