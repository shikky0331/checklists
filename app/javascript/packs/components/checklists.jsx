import React, { Component } from 'react'
import { connect } from 'react-redux'
import loadChecklists from 'actions/checklists/load_index'
import Checklist from 'components/checklist'

class Checklists extends Component {
  componentWillMount() {
    this.props.loadChecklists()
  }

  render() {
    return (
      <ul>
        { this.props.checklists.map(checklist => {
          return <Checklist key={checklist.id} checklist={checklist} />
        }) }
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  loadIndexStatus: state.checklists.get('loadIndexStatus'),
  checklists:      state.checklists.get('checklists'),
})

const mapDispatchToProps = dispatch => ({
  loadChecklists() {
    dispatch(loadChecklists())
  }
})

Checklists = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Checklists)

export default Checklists
