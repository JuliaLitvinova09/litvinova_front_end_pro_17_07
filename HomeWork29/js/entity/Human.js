function Human(name, age) {
  this.name = name;
  this.age = age;
}

Human.prototype.getHumanInfo = function () {
  document.write("Name: ", this.name, "<br> Age: ", this.age + "<br>");
};
