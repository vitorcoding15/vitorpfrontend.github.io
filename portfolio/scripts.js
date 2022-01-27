
//WEBSITE CLOCK START 
function date() {

    //creating date
    var today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    m = checkTime(m);
    s = checkTime(s);

    //Puting date to count at real time 
    document.getElementById('real-time').innerHTML = h + ":" + m + ":" + s;
    setTimeout(date, 1000);
}

//if time is less than 10 i = 0 || ex : 01, 02 , 03..
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

//WEBSITE CLOCK END

//QUOTE GENERATOR START

function generateQuote() {

    //Array of objects
    //TO ACCESS QUOTE AND NAME
    var quotes = [{
        quote: "“The best error message is the one that never shows up.”",
        name: "Thomas Fuchs"
      }, {
        quote: "“Sometimes it's better to leave something alone, to pause, and that's very true of programming.”",
        name: "Joyce Wheeler"
      }, {
        quote: "“Be yourself, everyone else is already taken.”",
        name: "Oscar Wilde"
      }, {
        quote: "“Two things are infinite: the universe and human stupidity, and I'm not sure about the universe.”",
        name: "Albert Einstein"
      }, {
        quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        name: " Bernard M. Baruch"
      }, {
        quote: "“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”",
        name: "Martin Fowler"
      }, {
        quote: "“The only way to learn a new programming language is by writing programs in it.”",
        name: "Dennis Ritchie"
      }, {
        quote: "“Don't write better error messages, write code that doesn't need them.”",
        name: "Jason C. McDonald"
      }, {
        quote: "“First, solve the problem. Then, write the code.”",
        name: "John Johnson"
      }, {
        quote: "“Code is like humor. When you have to explain it, it's bad.”",
        name: "Cory House"
      }, ];
      

        //randomize the quotes when click generator
        var randomQuote = Math.floor(Math.random() * (quotes.length));

        //add the text
        document.getElementById("quote").innerHTML = quotes[randomQuote].quote;

        //add the author
        document.getElementById("quote-author").innerHTML = "-" + quotes[randomQuote].name;
      


}

//QUOTE GENERATOR END


