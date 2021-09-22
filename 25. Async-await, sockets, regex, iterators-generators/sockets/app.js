// http://
// https://

// ws://
// wss://

let wsUrl = "wss://mysite.com";

let socket = new WebSocket(wsUrl);

socket.onopen([DATA], {});
socket.send();
socket.onmessage();
socket.close();
socket.onerror();
