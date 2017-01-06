import React from 'react';
import {bindActionCreators} from 'redux';
import Seed from '../../seed.js'
import {addTag, removeTag, clearTags} from '../../actions/tag_actions.js'
import {submitNewPost} from '../../actions/post_actions.js'
import {browserHistory, Link} from 'react-router'


const NewInterest = React.createClass({
  navToProfile () {
    browserHistory.push('/profile/' + this.props.user.username)
  },

  renderPost(post, index) {
    return (
      <div key={index}>
        <p><strong>{post.author}</strong>
        {post.content}
        </p>
      </div>
    )
  },

  handleSubmit(e) {
    e.preventDefault();
    const content = this.refs.content.value;
    const title = this.refs.title.value;
    const category = this.refs.category.value;
    const user_id = this.props.user.id;
    const username = this.props.user.username;
    let postData = {user_id, username, content, title, category, twitterLink, facebookLink}
    this.props.dispatch(submitNewPost(postData));
    this.refs.newPostForm.reset();
  },

  render() {
    return (
      <div>
        <h2>Create a new Post!</h2><hr/>
        <div className="block">
          <h3> Hello {this.props.user.username}!</h3>
          <form ref="newPostForm" onSubmit={this.handleSubmit}>
          <div className ="form-group">
            <label>PostTitle</label>
            <input className="form-control" type="text" ref="title" placeholder="Title"/>
          </div>
          <div className ="form-group">
            <label>Content</label>
            <textarea className="form-control" type="text" ref="content" placeholder="new post"/>
          </div>
          <div className ="form-group">
            <label>Select a Category</label>
            <select ref="category">
              {this.props.categories.map((category) => {
                return <option key={category.id}>{category.name}</option>
              })}
            </select>
          </div>
          <div className ="form-group">
            <label>Add tags</label>
            <textarea className="form-control" type="text" ref="content" placeholder="new post"/>
          </div>
          <button className="btn btn-default">Submit Post</button>
          </form>
        </div>
        {this.props.posts.map((post, index)=>{
          return this.renderPost(post, index)
        })}
      </div>
    )
  }
})

export default NewInterest;



//   handleTag(toggle, str, e) {
//     e.preventDefault();
//     if(toggle === "add"){
//       this.props.addTag(this.refs.tags.value);
//     }
//     if(toggle === "remove"){
//       this.props.removeTag(str.tag);
//     }
//     this.refs.tags.value = "";
//   }
// class NewInterest extends React.Component {

//   handleSubmit(e) {
//     e.preventDefault();
//     const content = this.refs.content.value;
//     const title = this.refs.title.value
//     const category = [this.refs.category.value].concat(this.props.tags)
//     const user_id = this.props.user.id;
// 		const username = this.props.user.username;
//     let userData = {title, content, category, user_id, username}
//     this.props.submitNewPost(userData);
//     this.props.clearTags();
//     this.refs.interests.reset();
//   }

//   handleTag(toggle, str, e) {
//     e.preventDefault();
//     if(toggle === "add"){
//       this.props.addTag(this.refs.tags.value);
//     }
//     if(toggle === "remove"){
//       this.props.removeTag(str.tag);
//     }
//     this.refs.tags.value = "";
//   }

//   render () {
//     let options = Seed.choices.map((choice) => {
//       return <option key={choice}>{choice}</option>
//     })
//     let domTags = this.props.tags.map((tag) => {
//       return <p key={tag} onClick={this.handleTag.bind(this, "remove", {tag})}> {tag} </p>
//     })

//     return (
//       <div className="form-group">
//         <form ref="interestsForm" onSubmit={this.handleSubmit.bind(this)}>
//           <label>Title</label>
//           <input type="text" ref="title" placeholder="title"/><br />
//           <textarea ref="content" rows="5" cols="30"/><br />
//           <input ref="tags" type="text" placeholder="add a tag"/>
//           <button onClick={this.handleTag.bind(this, "add", null)}>add tag</button>
//           <div>
//             {domTags}
//           </div>
//           <br />
//           category:
//           <select ref="category">
//             {options}
//           </select>
//           <button>CREATE</button>
//         </form>
//       </div>
//     )
//   }
// }

