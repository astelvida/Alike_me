import {combineReducers} from 'redux';
import {auth} from './auth.js'
import {userPosts, allPosts, publicPosts, starredPosts} from './post.js'
import {tags} from './tags.js'
import {stats} from './stats.js'
import {categories} from './categories.js'
import {matches, personalityMatches} from './matches.js'
import {routerReducer} from 'react-router-redux';
import {LOGOUT_USER} from '../actions/index.js';
import chat, { getIds } from './chat.js'


//combine all Reducers
const appReducer = combineReducers({
  user: auth,
  userPosts,
  allPosts,
  publicPosts,
  tags,
  categories,
  matches,
  stats,
  personalityMatches,
  starredPosts,
  chat,
  routing: routerReducer
})



const defaultState = {
  user: {
    isAuthenticated: false,
    followers: [],
    following: []
  },
  userPosts: [],
  starredPosts: [],
  allPosts: [],
  categories: [],
  tags: [],
  publicPosts: [],
  personalityMatches: [],
  chat: {},
}

const reducer = (state, action) => {
  if (action.type === LOGOUT_USER) {
    state = defaultState;
  }
  return appReducer(state, action)
}

export default reducer;
