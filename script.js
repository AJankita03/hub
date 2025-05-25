const quotes = [
  "“I raise up my voice—not so I can shout, but so that those without a voice can be heard.” – Malala Yousafzai",
  "“The most courageous act is still to think for yourself. Aloud.” – Coco Chanel",
  "“There is no limit to what we, as women, can accomplish.” – Michelle Obama",
  "“A woman is the full circle. Within her is the power to create, nurture and transform.” – Diane Mariechild",
  "“You should never let your fears prevent you from doing what you know is right.” – Aung San Suu Kyi",
  "“The question isn’t who’s going to let me; it’s who is going to stop me.” – Ayn Rand",
  "“Think like a queen. A queen is not afraid to fail. Failure is another steppingstone to greatness.” – Oprah Winfrey",
  "“Feminism is not about making women stronger. Women are already strong. It’s about changing the way the world perceives that strength.” – G.D. Anderson",
  "“If you want something said, ask a man; if you want something done, ask a woman.” – Margaret Thatcher",
  "“Above all, be the heroine of your life, not the victim.” – Nora Ephron",
  "“I am not free while any woman is unfree, even when her shackles are very different from my own.” – Audre Lorde",
  "“I hate to hear you talk about all women as if they were fine ladies instead of rational creatures.” – Mary Wollstonecraft",

"“A woman with a voice is, by definition, a strong woman.” – Melinda Gates",

"“It is our choices that show what we truly are, far more than our abilities.” – J.K. Rowling",

"“The best protection any woman can have is courage.” – Elizabeth Cady Stanton",

"“You don’t have to play masculine to be a strong woman.” – Mary Elizabeth Winstead",

"“Empowered women empower women.” – Unknown",

"“A strong woman looks a challenge dead in the eye and gives it a wink.” – Gina Carey",

"“I always wanted to be somebody, but now I realize I should have been more specific.” – Lily Tomlin",

"“Women belong in all places where decisions are being made.” – Ruth Bader Ginsburg",

"“I am deliberate and afraid of nothing.” – Audre Lorde",

"“Do not bring people in your life who weigh you down. And trust your instincts.” – Oprah Winfrey",

"“There is nothing stronger than a broken woman who has rebuilt herself.” – Hannah Gadsby",

"“I don't care what you think about me. I don’t think about you at all.” – Coco Chanel",

"“The future belongs to those who believe in the beauty of their dreams.” – Eleanor Roosevelt",

"“Don’t wait for opportunities. Create them.” – Madam C.J. Walker",

"“I’m tough, ambitious, and I know exactly what I want. If that makes me a bitch, okay.” – Madonna",

"“I want every girl to know that her voice can change the world.” – Malala Yousafzai",

"“To tell a woman everything she cannot do is to tell her what she can.” – Spanish Proverb",

"“One is not born, but rather becomes, a woman.” – Simone de Beauvoir",

"“You educate a man; you educate a man. You educate a woman; you educate a generation.” – Brigham Young",

"“A feminist is anyone who recognizes the equality and full humanity of women and men.” – Gloria Steinem" 

];

function showRandomQuote() {
  const quoteBox = document.getElementById("quoteBox");
  if (quoteBox) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteBox.textContent = quotes[randomIndex];
  }
}

window.addEventListener("DOMContentLoaded", showRandomQuote);
function filterItems() {
  const input = document.getElementById("searchInput");
  const filter = input.value.toLowerCase();
  const items = document.querySelectorAll(".link-item");

  items.forEach(item => {
    const text = item.textContent || item.innerText;
    item.style.display = text.toLowerCase().includes(filter) ? "" : "none";
  });
}
document.addEventListener("DOMContentLoaded", () => {
  showRandomQuote();

  const themeBtn = document.getElementById("toggleTheme");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });
  }
});
