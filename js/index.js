let quoteContent = document.querySelector(".quote-content");
let nameAuthor = document.querySelector(".name h2");
let imgAuthor = document.querySelector(".img-author img");
let like = document.getElementById("like");
let sound = document.getElementById("sound");
let copy = document.getElementById("copy");
let twitter = document.getElementById("twitter");
let btnQuote = document.querySelector(".new");



let quotes = [
    {
        myQuote : "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”" ,
        author : "Bernard M. Baruch",
        imgAuthor : "imgs/a1_.jpg"
    },
    {
        myQuote : "“Don’t walk in front of me… I may not followDon’t walk behind me… I may not leadWalk beside me… just be my friend” " ,
        author : " Albert Camus",
        imgAuthor : "imgs/a2_.jpg"
    },
    {
        myQuote : "“A friend is someone who knows all about you and still loves you.” " ,
        author : "  Elbert Hubbard",
        imgAuthor : "imgs/a3_.jpg"
    },
    {
        myQuote : "““In three words I can sum up everything I've learned about life: it goes on.” " ,
        author : "   Robert Frost",
        imgAuthor : "imgs/r.jpg"
    },
    {
        myQuote : "“If you tell the truth, you don't have to remember anything.” " ,
        author : "  Mark Twain",
        imgAuthor : "imgs/m.jpg"
    },

]

let currentQuoteIndex;
function  randomIndex(){


    let newIndex = Math.floor(Math.random() * quotes.length);
    while (newIndex === currentQuoteIndex) {
      newIndex = Math.floor(Math.random() * quotes.length);
    }
    currentQuoteIndex = newIndex;
    return currentQuoteIndex;
}



btnQuote.addEventListener('click' , function(){
   let index = randomIndex() ;
   quoteContent.innerText = quotes[index].myQuote ;
   nameAuthor.innerText = quotes[index].author ;
   imgAuthor.setAttribute('src', quotes[index].imgAuthor );
   imgAuthor.setAttribute('alt', quotes[index].author );
});



sound.addEventListener('click', function() {
   
      
  let utterance = new SpeechSynthesisUtterance(quoteContent.innerText);
  speechSynthesis.speak(utterance);
    
});
copy.addEventListener('click', function() {
   
    navigator.clipboard.writeText(quoteContent.innerText);
    
});
twitter.addEventListener('click', function() {
    let tweetText = `${quoteContent.innerText} — ${nameAuthor.innerText}`;
    let tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(tweetUrl, '_blank');
});