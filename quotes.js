var quotes = [
    "\"Do one thing every day that scares you.”― Eleanor Roosevelt",
    "\"Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.” – Socrates",
    "\"Everything you can imagine is real.”― Pablo Picasso",
    "\"Hold the vision, trust the process.” – Unknown",
    "\"If you hire people just because they can do a job, they’ll work for your money. But if you hire people who believe what you believe, they’ll work for you with blood and sweat and tears.” – Simon Sinek",
    "\"Very often, a change of self is needed more than a change of scene.\" – A.C. Benson"
];
 

 function newQuote(){
     var randomNumber = Math.floor(Math.random() * (quotes.length));
     document.getElementById('text').innerHTML = quotes[randomNumber];

 }