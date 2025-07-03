// Rozszerzanie/zwijanie sidebar
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("expanded");
});

// Podpowiedzi w wyszukiwarce (stub)
const searchInput = document.getElementById("searchInput");
const suggestions = document.getElementById("suggestions");
const sampleWords = ["muzyka", "programowanie", "vlog", "tutorial", "gaming"];

searchInput.addEventListener("input", () => {
  const q = searchInput.value.toLowerCase();
  suggestions.innerHTML = "";
  if (q.length < 2) {
    suggestions.classList.add("hidden");
    return;
  }
  sampleWords
    .filter(w => w.startsWith(q))
    .forEach(w => {
      const li = document.createElement("li");
      li.textContent = w;
      li.onclick = () => searchInput.value = w;
      suggestions.append(li);
    });
  suggestions.classList.toggle("hidden", !suggestions.childElementCount);
});

// Menu konta
const accountBtn = document.getElementById("accountBtn");
const accountMenu = document.getElementById("accountMenu");
accountBtn.addEventListener("click", () => {
  accountMenu.classList.toggle("hidden");
});

// Przekierowania w menu konta
document.getElementById("myChannel").onclick = () => {/* … */}
document.getElementById("createChannel").onclick = () => {/* … */}
document.getElementById("studio").onclick = () => {
  window.location.href = "https://greentube.example.com/studio";
};import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const auth = getAuth();

document.getElementById("logout").addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      // ✅ Po wylogowaniu przekieruj do logowania
      window.location.href = "https://greenblox-creator.github.io/accounts";
    })
    .catch((error) => {
      console.error("Błąd wylogowania:", error);
    });
});

};
