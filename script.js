const form = document.getElementById('myForm');
const responseDiv = document.getElementById('response');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const whatsappid = document.getElementById('whatsappid').value;
  const text = document.getElementById('text').value;

  const formData = {
    username,
    whatsappid,
    text
  };

  const response = await fetch('https://c53bfqfdo0.execute-api.eu-central-1.amazonaws.com/feedback/', {
    mode: 'no-cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });

  if (!response.ok) {
    responseDiv.textContent = `Error: ${response.statusText}`;
    return;
  }

  const responseData = await response.json();
  responseDiv.textContent = `API Response: ${JSON.stringify(responseData)}`;
});
