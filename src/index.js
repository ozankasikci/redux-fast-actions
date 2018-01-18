//@flow
const { generateActionConstants, generateActionCreators } = require('./api');

module.exports = (componentActions: componentActionsType) => {
  return {
    types: generateActionConstants(componentActions),
    actions: generateActionCreators(componentActions),
  }
};
