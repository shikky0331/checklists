import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import destroyChecklist from '../actions/checklists/destroy'

class Checklist extends Component {
  constructor(props) {
    super(props);
    this.handleDestroy = this.handleDestroy.bind(this);
  }

  handleDestroy(id) {
    this.props.destroyChecklist(id)
  }

  render() {
    return (
      <li>
        {this.props.checklist.title}
        <button className='delete-button' onClick={this.handleDestroy.bind(this, this.props.checklist.id)}>Delete</button>
      </li>
    )
  }
}


Checklist.defaultProps = {
  checklist: {}
}

Checklist.propTypes = {
  checklist: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  deletingStatus: state.checklists.get('deletingStatus'),
})

const mapDispatchToProps = dispatch => ({
  destroyChecklist(id) {
    dispatch(destroyChecklist({id: id}))
  }
})

Checklist = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Checklist)

export default Checklist
