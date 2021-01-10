class Player{
    constructor(){

    }
    getCount(){
        var pcr = database.ref('playerCount');
        pcr.on("value", function(data){
            playerCount = data.val();        
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount : count
        })
    }
    update(name){
        var pi = "player" + playerCount;
        database.ref(pi).set({
            name : name
        })
    }
}