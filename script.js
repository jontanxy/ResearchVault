const year = new Date().getFullYear();
const footerText = document.querySelector("footer p");

if (footerText) {
  footerText.textContent = `© ${year} ResearchVault. Built for secure collaborative research.`;
}