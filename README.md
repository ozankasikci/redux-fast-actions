[![Build Status](https://travis-ci.org/ozankasikci/redux-fast-actions.svg?branch=master)](https://travis-ci.org/ozankasikci/redux-fast-actions)
# Why?
Because declaring action constants and action creator function for each action is a real pain.

# One object to rule them all
#### Create an action config object.
```javascript
// actions.js
import fastActions from 'redux-fast-actions';

const actions = {
  home: {
    fetchFeed: { payload: ['feeds'] },
  },
  profile: {
    uploadImage: { payload: ['imagePath', 'imageName'] }
  }
}

const fasActions = fastActions(actions);
export const types = fasActions.types;
export const actions = fasActions.actions;
```
#### Redux Fast Actions generates action constants and action creators.
```javascript
// import the file anywhere in your project
const { types, actions } = 'path/to/actions.js';


// console.log(types)
{
  HOME_FETCH_FEED: 'HOME_FETCH_FEED'
  PROFILE_UPLOAD_IMAGE: 'PROFILE_UPLOAD_IMAGE'
}

// console.log(actions)
{
  home: {
    fetchFeed: (feeds) => {
      return { type: HOME_FETCH_FEED, payload: { feeds } }
    }
  },
  profile: {
    uploadImage: (imagePath, imageName) => {
      return { type: PROFILE_UPLOAD_IMAGE, payload: { imagePath, imageName } }
    }
  }
}


//then you can dispatch the generated actions like;
dispatch(actions.profile.uploadImage(imagePath, imageName))
```

# Installation
```javascript
npm i redux-fast-actions --save
```
or if you prefer yarn:
```javascript
yarn add redux-fast-actions
```
