/* VARIABLE TYPES */

export type componentActionsType = {
  [string]: Object
};

export type componentNameType = string;

export type actionType = {
  dispatch: { [string]: Object },
  arguments: Array<Object>
};

export type actionConstantType = string;

export type actionCreatorType = function;



/* RETURN TYPES */

type generateActionCreatorsReturn = {
  [string]: {
    [string]: actionCreatorType
  }
};

type generateActionConstantsReturn = {
  [string]: string
};
