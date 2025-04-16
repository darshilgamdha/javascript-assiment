class RailwayForm {
    constructor(givenname,trainno){
        console.log("Constructor called ..." + givenname + " " + trainno);
            this.name = givenname;
            this.trainno = trainno;
        
    }
    submit(){
        alert(this.name + " form is submitted for train no " + this.trainno);
    }

    cancel(){
        alert(this.name + "  form is cancelled for train no " + this.trainno);  
    }
   }
//creat a form for harry and rohan
let harryForm = new RailwayForm("Harry", 12345);
let rohanForm = new RailwayForm("Rohan", 54321);

harryForm.submit();
harryForm.cancel();
rohanForm.submit();
rohanForm.cancel();
