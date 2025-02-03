// Exercise 01: Highlight words over 8 characters
const paragraph = document.getElementById('paragraph');
const words = paragraph.textContent.split(/\s+/);

const highlightedText = words.map(word => {
  if (word.length > 8) {
    return `<span style="background-color: yellow;">${word}</span>`;
  }
  return word;
}).join(' ');

paragraph.innerHTML = highlightedText;

// Exercise 02: Add a link back to the source
const link = document.createElement('a');
link.href = 'https://google.com/';
link.textContent = '(https://google.com/)';
paragraph.insertAdjacentElement('afterend', link);

// Exercise 03: Split sentences into separate lines
const sentences = paragraph.textContent.split('. ');

paragraph.innerHTML = sentences.join('<br>');

// Exercise 04: Count words and display the count after the heading
const wordCount = words.length;
const heading = document.querySelector('h2');
heading.textContent += ` (${wordCount} words)`;

// Exercise 06: Add required validation to inputs
const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');

inputs.forEach(input => {
  const errorSpan = document.getElementById(`${input.id}Error`); // Get the corresponding error span

  input.addEventListener('input', () => {
    if (input.value.trim() === '') {
      errorSpan.textContent = 'Required';
    } else {
      errorSpan.textContent = '';
    }
  });

  // Initial check on page load
  if (input.value.trim() === '') {
    errorSpan.textContent = 'Required';
  }
});