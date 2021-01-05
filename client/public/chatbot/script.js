const bot = new RiveScript();

const messageContainer = document.querySelector('.messages');
const form = document.querySelector('form');
const inputBox = document.querySelector('input');

const brains = [
  './RiveBrain/begin.rive',
  './RiveBrain/hello.rive',
  './RiveBrain/mason.rive',
  './RiveBrain/test.rive',
];

bot.loadFile(brains).then(botReady).catch(botNotReady);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  selfReply(inputBox.value);
  inputBox.value = '';
});

function botReply(message) {
  messageContainer.innerHTML += `<div class="bot">@sys-bot: ${message}</div>`;
  location.href = '#edge';
}

function selfReply(message) {
  messageContainer.innerHTML += `<div class="self">#usr-trm: ${message}</div>`;
  location.href = '#edge';

  bot.reply('local-user', message).then(function (reply) {
    botReply(reply);
  });
}

function botReady() {
  bot.sortReplies();
  botReply('Hello, How may I help');
}

function botNotReady(err) {
  console.log('An error has occurred.', err);
}
