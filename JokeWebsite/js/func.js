function getJoke(){
    $.getJSON("https://icanhazdadjoke.com/", function(data) {
$("#joke").text(data.joke);
});
}