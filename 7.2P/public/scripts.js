const socket = io();

// When server sends a message, display it
socket.on('chat message', (msg) => {
  const li = document.createElement('li');
  li.textContent = msg;
  const ul = document.getElementById('messages');
  ul.appendChild(li);
  ul.scrollTop = ul.scrollHeight; // auto scroll
});

// Send message to server
function sendMessage() {
  const input = document.getElementById('input');
  const msg = input.value.trim();
  if (msg === '') return;          // ignore empty
  socket.emit('chat message', msg);
  input.value = '';                // clear box
  input.focus();                   // keep cursor in box
}

// Send on Enter key
document.getElementById('input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});

// Send on button click
document.getElementById('send-btn').addEventListener('click', sendMessage);