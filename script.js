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
  "“Above all, be the heroine of your life, not the victim.” – Nora Ephron"
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
