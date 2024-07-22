const quotes = [
    "The best way to predict your future is to create it.",
    "You only live once, but if you do it right, once is enough.",
    "Life is really simple, but we insist on making it complicated.",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "The purpose of our lives is to be happy.",
    "Motivation is what gets you started. Habit is what keeps you going.",
    "Wake up with determination. Go to bed with satisfaction."
];

function getDayOfYear(date) {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay) + 1;
}

function getDailyQuote() {
    const date = new Date();
    const dayOfYear = getDayOfYear(date);
    const index = (dayOfYear - 1) % quotes.length;
    return quotes[index];
}

document.getElementById('quote').innerText = getDailyQuote();