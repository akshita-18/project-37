class Question{
    constructor() {
        this.title = createElement('h2')
        this.input1 = createInput("Enter your name...");
        this.input1 = createInput("Enter correct option...");
        this.button = createButton('submit');
        this.question = createElement('h3');
        this.option1 = createElement('h4');
        this.option2 = createElement('h4');
        this.option3 = createElement('h4');
        this.option4 = createElement('h4');
       }
       
     }
     display(){
         this.title.html("My Quiz Game");
         this.title.position(340,0);
         this.question.html("Question:- what starts and ends with the letter 'E', but has only one letter? ");
         this.question.postion(140, 75);
         this.option1.html("1: Everyone");
         this.option1.postion(140,100);
         this.option2.html("2: Envelope");
         this.option2.postion(140,110);
         this.option3.html("3: Estimate");
         this.option3.postion(140,130);
         this.option4.html("4: Example");
         this.option4.postion(140,150);

         this.input1.position(140,220);
         this.input2.position(340,220);
         this.input3.position(280,300);
        
         this.button.mousePressed(()=>{
             this.title.hide();
             this.input1.hide();
             this.input2.hide();
             this.button.hide();
             contestant.name = this.input1.value();
             contestant.answer = this.input2.value();
             contestantCount+=1;
             contestant.index = contestantCount;
             contestant.update();
             contestant.updateCount(contestantCount);
             
         })

     }
     hide() {
         this.title.hide();
         this.input1.hide();
         this.button.hide();
         this.input2.hide();
}