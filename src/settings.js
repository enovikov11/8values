const fs = require('fs');
const YAML = require('yaml');

const { messages, buttons, questions } = YAML.parse(fs.readFileSync('./src/settings.yaml', 'utf8'));
const { apiKey, adminChatId, prefix } = require('../secret.json');

module.exports = {
    apiLogFilename: './data/api.json.log',
    stateFilename: './data/state.json',

    apiBase: "https://api.telegram.org/", // https://core.telegram.org/bots/api
    apiKey,
    adminChatId,
    prefix,

    messages: messages.ru,
    buttons: buttons.ru,
    questions: questions.map(q => { q.question = q.question.ru; return q; }),
    minQuestionsResult: 30
};

// DELETE AFTER DEBUG
// module.exports.questions = module.exports.questions.splice(52);
// module.exports.minQuestionsResult = 2;