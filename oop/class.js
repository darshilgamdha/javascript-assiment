class RailwayForm {
    submit(){
        alert(this.name + " form is submitted for train no " + this.trainno);
    }

    cancel(){
        alert(this.name + "  form is cancelled for train no " + this.trainno);  
    }
    fill(givenname,trainno){
        this.name = givenname;
        this.trainno = trainno;
    }
}
//creat a form for harry and rohan
let harryForm = new RailwayForm();
let rohanForm = new RailwayForm();
// fill the form with harry and rohan
harryForm.fill("Harry", 12345);
rohanForm.fill("Rohan", 54321);

harryForm.submit();
harryForm.cancel();
rohanForm.submit();
rohanForm.cancel();
