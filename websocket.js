let socket = null;

document.getElementById('connectBtn').addEventListener('click', () => {
  const domain = 'cyocrawler.local';
  socket = new WebSocket(`ws://${domain}:81`);

  socket.onopen = () => logOutput('Підключено до ESP32 ' + domain);
  socket.onclose = () => logOutput('Відключено від ESP32');
  socket.onerror = e => logOutput('Помилка WebSocket: ' + e.message);
  socket.onmessage = event => logOutput('ESP32: ' + event.data);
});

function sendCode(code) {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(code);
    logOutput('Відправлено код на ESP32');
  } else {
    alert('Спершу підключіться до ESP32');
  }
}

function logOutput(text) {
  const out = document.getElementById('output');
  out.textContent += text + '\n';
  out.scrollTop = out.scrollHeight;
}
