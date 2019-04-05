import React, {Component} from 'react';
import {connect} from 'react-redux';
import createChecklists from '../actions/checklists/create'

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      title: e.target.value,
    })
  }

  handleSubmit(e) {
    const { title } = this.state;
    this.props.createChecklists(this.state.title);
    this.setState({
      title: " ",
    })
  }

  render() {
    return(
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.title}
          placeholder='New Checklist Title'
        />
        <button className='create-button' onClick={this.handleSubmit}>create</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  createStatus: state.checklists.get('createStatus'),
})

const mapDispatchToProps = dispatch => ({
  createChecklists(title) {
    dispatch(createChecklists({title: title}))
  }
})

Input = connect(
mapStateToProps,
mapDispatchToProps
)(Input)

export default Input
