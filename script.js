// Encrypt function
function encrypt(text, shift) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (char.match(/[a-z]/i)) {
      let code = text.charCodeAt(i);
      let shiftAmount = shift % 26;
      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + shiftAmount) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + shiftAmount) % 26) + 97);
      }
    }
    result += char;
  }
  return result;
}

// Decrypt function
function decrypt(text, shift) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (char.match(/[a-z]/i)) {
      let code = text.charCodeAt(i);
      let shiftAmount = shift % 26;
      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 - shiftAmount + 26) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 - shiftAmount + 26) % 26) + 97);
      }
    }
    result += char;
  }
  return result;
}

// Encrypt and show result
function encryptText() {
  let text = document.getElementById("text").value;
  let shift = parseInt(document.getElementById("shift").value, 10);

  if (!text || isNaN(shift)) {
    alert("Please enter both text and a valid shift value.");
    return;
  }

  let encryptedText = encrypt(text, shift);
  document.getElementById("encryptedOutput").textContent = encryptedText;
}

// Decrypt and show result
function decryptText() {
  let text = document.getElementById("encryptedOutput").textContent;
  let shift = parseInt(document.getElementById("shift").value, 10);

  if (!text || text === "-" || isNaN(shift)) {
    alert("Please first encrypt some text before decrypting.");
    return;
  }

  let decryptedText = decrypt(text, shift);
  document.getElementById("decryptedOutput").textContent = decryptedText;
}

function openTab(tabId) {
  let tabs = document.querySelectorAll(".tab-content");

  // Hide all tabs
  tabs.forEach((tab) => {
    tab.style.display = "none";
  });

  // Show only the selected tab
  document.getElementById(tabId).style.display = "block";
}
// Dark Mode / Light Mode Toggle
function toggleMode() {
  let body = document.body;
  let modeButton = document.querySelector(".mode-toggle");

  body.classList.toggle("light-mode");
  body.classList.toggle("dark-mode");

  if (body.classList.contains("light-mode")) {
    modeButton.textContent = "☀️ Light Mode";
  } else {
    modeButton.textContent = "🌙 Dark Mode";
  }
}
function clearFields() {
  document.getElementById("text").value = "";
  document.getElementById("shift").value = "";

  document.getElementById("encryptedOutput").textContent = "-";
  document.getElementById("decryptedOutput").textContent = "-";
}

// Show the first tab by default
document.addEventListener("DOMContentLoaded", function () {
  openTab("cipher");
});
