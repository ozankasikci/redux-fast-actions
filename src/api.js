// @flow
const _ = require('lodash');

const generateActionConstant = (componentName: componentNameType, name: string): actionConstantType => {
  return _.snakeCase(`${componentName}${_.upperFirst(name)}`).toUpperCase();
};


const generateActionCreator = (
  componentName: componentNameType,
  action: actionType,
  name: string
): actionCreatorType => {

  const actionConstant = generateActionConstant(componentName, name);

  if (!action.dispatch) {
    return (...args) => {
      const payload = action.payload ? _.zipObject(action.payload, args) : args[0];
      return { type: actionConstant, payload };
    };
  }

  return (...args) => {
    return dispatch => {
      _.forEach(action.dispatch, (subAction, subActionName) => {
        const argumentNames = subAction.argumentIndices.map(index => action.payload[index]);
        const subActionPayload = subAction.argumentIndices.map(index => args[index]);
        const subActionConstant = generateActionConstant(componentName, subActionName);
        const payload = _.zipObject(argumentNames, subActionPayload);
        dispatch({ type: subActionConstant, payload });
      })
    };
  };
};


const generateActionCreators = (componentActions: componentActionsType): Object => {
  const generatedActions = {};

  _.forEach(componentActions, (actions, componentName) => {
    if (!generatedActions[componentName]) {
      generatedActions[componentName] = {}
    }

    _.forEach(actions, (action, name) => {
      generatedActions[componentName][name] = generateActionCreator(componentName, action, name)
    })
  });

  return generatedActions;
};


const generateActionConstants = (componentActions: componentActionsType): Object => {
  const constants = {};

  _.forEach(componentActions, (actions, componentName) => {

    _.forEach(actions, (action, name) => {
      if (action.dispatch) {
        return _.forEach(action.dispatch, (action, name) => {
          const actionConstant = generateActionConstant(componentName, name);
          constants[actionConstant] = actionConstant;
        })
      }

      const actionConstant = generateActionConstant(componentName, name);
      constants[actionConstant] = actionConstant;
    })
  });

  return constants;
};


module.exports = {
  generateActionConstant,
  generateActionConstants,
  generateActionCreator,
  generateActionCreators
}