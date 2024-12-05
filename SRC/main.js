const form = document.querySelector("form");
const commentList = document.getElementById("comment-list");
const errorMessage = document.getElementById("error-message");

function handleSubmit(e) {
  e.preventDefault();

  // découverte de .trim() pour supprimer les espaces blancs au début et à la fin sans modifier la chaine de caractère à l'intérieur
  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const message = document.getElementById("message").value.trim();

  if (firstName === "" || lastName === "" || message === "") {
    errorMessage.style.display = "block";
    return;
  }

  errorMessage.style.display = "none";

  const newComment = document.createElement("div");
  newComment.className = "flex space-x-4 text-sm text-gray-500";
  newComment.innerHTML = `
        <div class="flex-1 py-10 border-t border-gray-200">
          <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
          <div class="prose prose-sm mt-4 max-w-none text-gray-500">
            <p>${message}</p>
          </div>
        </div>
      `;

  commentList.appendChild(newComment);

  form.reset();
}

// Ajout d'une fonctionnalité pour envoyer le formulaire avec la touche 'enter' depuis le field 'commentaire'&& saut de ligne avec 'shift+enter'
form.addEventListener("submit", handleSubmit);
form.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    handleSubmit(e);
  }
});