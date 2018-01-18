type componentActionsType = {
  [string]: Object
};

type componentNameType = string;

export type actionType = {
  dispatch: { [string]: Object },
  payload: Array<Object>
};

type actionConstantType = string;

type actionCreatorType = function;

