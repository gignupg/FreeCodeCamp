var Person = function(firstAndLast) {

    let firstName = firstAndLast.split(" ")[0]
    let lastName = firstAndLast.split(" ")[1]
    this.getFullName = function(){
      return firstName + " " + lastName;
    };
    this.getFirstName = function(){
        return firstName
    }
    this.getLastName = function(){
        return lastName
    }
    this.setFirstName = function(name){
        firstName = name
    }
    this.setLastName = function(name){
        lastName = name
    }
    this.setFullName = function(name){
        firstName = name.split(" ")[0]
        lastName = name.split(" ")[1]
    }
    return firstAndLast;
  };
  
  var bob = new Person('Bob Ross');
  bob.getFullName();