var bulbasaur = {
    name:"Bulbasaur",
    healthPoints: 22,
    attackPower: 4,
    counterAttackPower: 10,
    image: "./assets/images/bulbasaur.png"
}
var charmander = {
    name:"Charmander",
    healthPoints: 15,
    attackPower: 8,
    counterAttackPower: 4,
    image: "./assets/images/charmander.png"
}
var squirtle = {
    name:"Squirtle",
    healthPoints: 18,
    attackPower: 6,
    counterAttackPower: 8,
    image: "./assets/images/squirtle.png"
}
var pikachu = {
    name:"Pikachu",
    healthPoints: 18,
    attackPower: 10,
    counterAttackPower: 10,
    image: "./assets/images/pikachu.png"
}

function attack(a, b)
{
    var damage = Math.floor(Math.random()*parseInt($(a).attr("attackPower")));
    console.log(damage);
    var health = parseInt($(b).attr("health"));
    health -= damage;
    console.log(health);
    $(b).attr("health",health);
    $(b + " .health").text(health);
};

function combatantSelected()
{
    if($("#defenders").html().trim() == "")
    {
        return false;
    }
    return true;
};

$(document).ready(function() {
    var characters = [bulbasaur,charmander,squirtle,pikachu]
    characterDiv = $("#characterSection")
    for (var i = 0; i < characters.length; i++) {
        var image = $("<img>");
        image.attr("src",characters[i].image);
        var name = $("<h1></h1>");
        name.text(characters[i].name);
        var health = $("<h1></h1>");
        health.text(characters[i].healthPoints);
        health.addClass("health");
        var character = $("<div></div>");
        character.addClass("character");
        character.attr("health", characters[i].healthPoints);
        character.attr("name",characters[i].name);
        character.attr("attackPower",characters[i].attackPower);
        character.attr("counterAttackPower",characters[i].counterAttackPower);
        character.append(name);
        character.append(image);
        character.append(health);
        characterDiv.append(character);
    }

    $("#characterSection").on("click", ".character", function() {
        if(combatantSelected())
        {
            $(this).attr("id","attacker");
            $(this).css("background-color", "red");
            $("#attackers").html(this);
        }
        else{
            $(this).attr("id","defender");
            $(this).css("background-color", "green")
            $("#defenders").html(this);
        }
      });
    
    $("#buttons").on("click", "#attack", function() {
        attack("#attacker","#defender");
        attack("#defender","#attacker");
        if(parseInt($("#defender").attr("health")) <= 0)
        {
            $("#defenders").html("");
        }
        else if(parseInt($("#attacker").attr("health"))<= 0)
        {
            $("#attackers").html("");
        }
    });
});