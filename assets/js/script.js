// Sample texts for the typing test grouped by difficulty
const SAMPLES = {
  easy: [
    "The cat sat on the mat.",
    "A quick walk to the park is fun.",
    "Blue skies make me smile today."
  ],
  medium: [
    "Typing quickly takes practice and patience.",
    "The weather forecast predicted rain but the sun stayed out.",
    "Many people enjoy reading books in the quiet of the evening."
  ],
  hard: [
    "Complex sentences with varied punctuation help build advanced typing skills.",
    "Sublime syntax and challenging vocabulary encourage focused practice sessions.",
    "Efficiency improves when you maintain proper posture and consistent finger placement."
  ]
};

// Returns a random element from an array
function pickRandom(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return "";
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

// Chooses a sample based on difficulty and returns it
function getSampleForDifficulty(level) {
  const key = String(level || 'easy').toLowerCase();
  if (!SAMPLES.hasOwnProperty(key)) return pickRandom(SAMPLES.easy);
  return pickRandom(SAMPLES[key]);
}

// Updates the #sample-text element with a random sample for the current difficulty
function updateSampleText() {
  const select = document.getElementById('difficulty');
  const display = document.getElementById('sample-text');
  if (!select || !display) return;
  const level = select.value || 'easy';
  const text = getSampleForDifficulty(level);
  display.textContent = text;
  // Update the results area level text (if present)
  const levelSpan = document.getElementById('level');
  if (levelSpan) levelSpan.textContent = level.charAt(0).toUpperCase() + level.slice(1);
}

// Initialize: set sample on page load and attach listener for difficulty changes
document.addEventListener('DOMContentLoaded', function () {
  updateSampleText();
  const select = document.getElementById('difficulty');
  if (select) {
    select.addEventListener('change', updateSampleText);
  }
  // Optionally allow clicking sample text to get a new random sample at same difficulty
  const display = document.getElementById('sample-text');
  if (display) {
    display.style.cursor = 'pointer';
    display.title = 'Click to load a different sample of the same difficulty';
    display.addEventListener('click', updateSampleText);
  }
});
