class Quiz {
    constructor() {}
        getState() {
            var gameStateRef = database.ref('gameState');
            gameStateRef.on("value",function(data){
                gameState = data.val();
            })
        }
        
        async start() {
            if(gameState===0) {
                contestant = new contestant();
                var contestantCountRef = await database.ref('contestantCount').once("value");
                if(contestantCountRef.exists()) {
                    contestantCount = contestantCountRef.val();
                    contestant.getCount();
                }
                question = new Question()
                question.display();
            }
        }
        update(state) {
            database.ref('/').update({
                gameState: state
            });
        }

        play() {
            question.hide();
            textSize(30);
            fill(0);
            background("yellow");
            text("result of the Quiz",330, 50);
            text("--------------",325,60);
            contestant.getPlayerInfo();
            if(allContestant !== undefined){
                var display_Answers = 230;
                fill("blue");
                textSize(20);
                text("*NOTE: Contestant who answered correct are highlighted in green colour! ",130, 240);

                for(var plr in allContestant) {
                    debugger;
                    var correctAns = "2";
                    if (correctionAns===allContestant[plr].answer)
                    fill("green")
                    else
                    fill("red");
                    display_Answers+=30;
                    textSize(20);
                    text(allContestant[plr].name + ":" + allContestant[plr].answer, 250,display_Answers)


                }
            }
        }

}