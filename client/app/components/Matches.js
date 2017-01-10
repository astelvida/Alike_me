import React  from 'react'
import Post from './Post.js'
import {getMatches} from '../actions/match_actions.js'
// import {getPostsByUsername} from '../actions/post_actions.js'

class Matches extends React.Component {
  displayCurrent () {
    console.log(this.props.userPosts)
    return this.props.userPosts.filter((post) => {
      return post.id === parseInt(this.props.params.postid)
    }).map((post) => {
      return ( //todo -replace post with custom rendering
        <Post key={post.id} post={post} />
      )
    })
  }

  //todo - run in componentWillMount as well ONLY if props.userposts is not null
  // componentWillMount () {
  // }

  componentWillReceiveProps(nextProps) {
    let post = nextProps.userPosts.filter((p) => {
      return p.id === parseInt(this.props.params.postid)
    })[0]
    let agreeableness = this.props.user.agreeableness
    let conscientiousness = this.props.user.conscientiousness
    let emotionalRange = this.props.user.emotionalRange
    let extraversion = this.props.user.extraversion
    let openness = this.props.user.openness
    this.props.dispatch(getMatches({post, agreeableness, conscientiousness, emotionalRange, extraversion, openness}))
  }

  render () {
    return (
      <div>
        <h1>Matches for post #{this.props.params.postid}</h1>
        {this.displayCurrent()}
      </div>
    )
  }
}

export default Matches