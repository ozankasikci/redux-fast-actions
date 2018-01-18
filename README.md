[![Build Status](https://travis-ci.org/ozankasikci/redux-fast-actions.svg?branch=master)](https://travis-ci.org/ozankasikci/redux-fast-actions)
# Why?
Because declaring action constants and action creator function for each action is a real pain.

# One object to rule them all
#### Create an action config object.
```javascript
import fastActions from 'redux-fast-actions';

const = actions = {
  home: {
    fetchFeed: { payload: ['feeds'] },
  }
}

fastActions(actions);
```
#### Redux Fast Actions generates actions constants and action creators.
```javascript
{
  types:{
    HOME_FETCH_FEED: 'HOME_FETCH_FEED'
  },
  actions: {
    home: {
      fetchFeed: (feeds) => {
        return { type: HOME_FETCH_FEED, payload: { feeds } }
      }
    }
  }
}
```

# Installation
```javascript
npm i redux-fast-actions --save
```
or if you prefer yarn:
```javascript
yarn add redux-fast-actions
```
