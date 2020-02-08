var Person = function(firstAndLast) {

    this.getFullName = function(){
        return firstAndLast;
    }
    this.getFirstName = function(){
        return firstAndLast.split(" ")[0]
    }
    this.getLastName = function(){
        return firstAndLast.split(" ")[1]
    }
    this.setFullName = function(name){
        firstAndLast = name
    }
    this.setFirstName = function(name){
        firstAndLast = name + " " + firstAndLast.split(" ")[1]
    }
    this.setLastName = function(name){
        firstAndLast = firstAndLast.split(" ")[0] + " " + name
    }
}
  
  var bob = new Person("Bob Ross")
  bob.setFirstName("Michael")
  console.log(bob.getFullName())
