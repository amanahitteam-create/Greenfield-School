// Tomar Excel / Google Sheet backend er link ekhane boshao
const API_URL = "tomar-link-ekhane";

// Contact form theke data ei function diye pathabe.
// Data: { name, email, phone, subject, message }
export async function sendInquiry(data) {
  await fetch(API_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify(data),
  });
}