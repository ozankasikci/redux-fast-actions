//
const { generateActionConstants, generateActionCreators } = require('./api');

module.exports = (componentActions) => {
  return {
    types: generateActionConstants(componentActions),
    actions: generateActionCreators(componentActions),
  }
};
