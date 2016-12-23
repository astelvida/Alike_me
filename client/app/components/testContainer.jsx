import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Demo extends React.Component {

  testAction(item){
  } //are you kidding me

  handleUsername(e){
    this.setState({username: e.target.value})
  }

  render() {
    return (
      <div>
        TEST
        <br />
        {this.props.text}
        <h4>{this.props.other}</h4>

        <form onSubmit={() => this.props.testAction(this.props.text)}>
          <input type="text" value={this.props.text} onChange={this.handleUsername.bind(this)} />
          <input type="submit" value="CHECK IT OUT" />
        </form>
      </div>
    );
  }
}

function testAction(item) {
    console.log('input text: ', item);
    return {
        type: 'TEST_ACTION',
        payload: item
    }
}

function mapStateToProps(state) {
  return {
    text: state.text,
    other: state.other
  };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({testAction: testAction}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Demo);