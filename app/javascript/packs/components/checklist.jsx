import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Checklist extends Component {
  render() {
    return (
      <li>
        {this.props.checklist.title}
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
  deleteChecklist(id) {
    dispatch(deleteChecklist({id: id}))
  }
})

Checklist = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Checklist)

export default Checklist
