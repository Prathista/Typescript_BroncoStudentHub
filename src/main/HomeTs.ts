function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
var quotes = [
    'Learn by Doing- Cal Poly Pomona',
    'The Best Way To Get Started Is To Quit Talking And Begin Doing. – Walt Disney',
    'If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You. – Steve Jobs',
    'Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do. – Johann Wolfgang Von Goethe',
    'Security Is Mostly A Superstition. Life Is Either A Daring Adventure Or Nothing. –  Helen Keller',
    'Do What You Can With All You Have, Wherever You Are. – Theodore Roosevelt',
    'You Are Never Too Old To Set Another Goal Or To Dream A New Dream. – C.S. Lewis'
]

class HomeTs {

    constructor() {

        let quoteBtn = document.getElementById("quoteBtn")

        quoteBtn.addEventListener("click", (e: Event) => {
            var myQuote = HomeTs.newQuote();
            return document.getElementById('quoteDisplay').innerHTML=myQuote;
        });


    }


    private static newQuote() {
        var ranNum = Math.floor(Math.random() * (quotes.length));
        return quotes[ranNum];
    }
}

    window.onload=function() {
    let homeTs = new HomeTs();
}
