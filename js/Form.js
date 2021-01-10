class Form{
    constructor() {

    }
    display() {
        var title = createElement ('h2')
        title.html("CAR RACING GAME")
        title.position(150,50)

        var input = createInput ("NAME")

        var button = createButton ("PLAY")

        var greeting = createElement ("h3")
        input.position(100,100)
        button.position(120,200)

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();

            playerCount = playerCount + 1;
            player.update(name);
            player.updateCount(playerCount);

            greeting.html("Hello " + name);
            greeting.position (200,200);
        })
    }
}