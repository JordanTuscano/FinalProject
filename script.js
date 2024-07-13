document.addEventListener("DOMContentLoaded", () => {
    const yearElement = document.querySelector("footer p");
    const currentYear = new Date().getFullYear();
    yearElement.textContent = `© ${currentYear} New Diamond Transport Co. All Rights Reserved.`;
});
