class RailwayForm {
    constructor(givenname,trainno,address){
        console.log("Constructor called ..." + givenname + " " + trainno);
            this.name = givenname;
            this.trainno = trainno;
            this.address = address;
        
    }
    preview(){
        alert(this.name + " : train number : " + this.trainno + " and address is " + this.address);
    }
    submit(){
        alert(this.name + " : Your form is submitted for train number : " + this.trainno);
    }

    cancel(){
        alert(this.name + " : This form is cancelled for train number : " + this.trainno);  
        this.trainno = 0;   
    }
   }
//create a form for harry
let harryForm = new RailwayForm("Harry", 12345,"rajkot");

harryForm.preview();
harryForm.submit();
harryForm.cancel();
harryForm.preview();

