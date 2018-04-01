//imports

var id;
var name;
var description;
var price;
var categore;

//ALERT: Unsed by now
var photo;

//This class implements all the definition of service and his behavior
class Service {
    constructor(nName, nDescription, nPrice, nCategore) {
        id = name.hash();
        name = nName;
        description = nDescription;
        price = nPrice;
        categore = nCategore;
    }
    //Change name of service
    setName(newName) {
        name = newName;
    }
    //Change Description
    setDescription(newDesc) {
        description = newDesc;
    }
    //Change price
    setPrice(newPrice) {
        price = newPrice;
    }
    //Change categore
    setCategore(newCategore) {
        categore = newCategore;
    }
    //Return name
    getName() {
        return name;
    }
    //Return description
    getDescription() {
        return description;
    }
    //Return price
    setPrice() {
        return price;
    }
    //return categore
    setCategore() {
        return categore;
    }
}