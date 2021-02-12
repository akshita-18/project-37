class Contestant {
    constructor() {
        this.index = null;
        this.answer = 0;
        this.name = null;
    }
    gatCount() {
        var contestantCountRef = database.ref('contestantCount');
        contestantCountRef.on("value",(data)=>{
            contestantCount = data.val();
        })
        
    }
    static getPlayerInfo() {
        var contestantInfoRef = database.ref('contestants');
        contestantsInfoRef.on("value",(data)=>{
            allContestants = data.val();
        })
        
    }
    updateCount(count) {
        database.ref('/').update({
            contestantCount: count
        });
    }
    update() {
        var contestantIndex = "contestants/contestant" + this.index;
        database.ref(contestantIndex).set({
            name:this.name,
            answer:this.answer
        });
    }
    
    
}