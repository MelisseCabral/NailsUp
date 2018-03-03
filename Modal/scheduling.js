//IMPORTS

var id;
var nameClient;
var date;
var time;
var services;
var methodPayment;
var statusPay;
var totalPrice;

export default class Scheduling {
    constructor(cNameClient, cDate, cTime, cServices,cMethodPayment, cStatusPay){
        
    }
    //Confirm scheduling
    confirmScheduling(){
        //TODO

        //1. save scheduling on DB
        //2. clear enviroment
    };
    //Edit scheduling
    editSchueduling(){
        //TODO
        // Can change date, time, service, methodPayment and cStatusPayment
    };
    //Cancel Scheduling
    cancelScheduling(){
        //TODO

        //Verify if is on DB
        //Verify if is payed;
            //if is return money
                //cancel
            //else just cancel
        //Delet from DB
    };

}