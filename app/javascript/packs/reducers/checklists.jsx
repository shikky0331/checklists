import * as ChecklistActionTypes from 'constants/ChecklistActionTypes'
import Immutable from 'immutable'
import LoadingState from 'utilities/loading_state'

const initialState = Immutable.Map({
  checklists: [],
  loadingIndexStatus: LoadingState.NotYet,
  loadingIndexError: null,
})

export default function checklists(state = initialState, action) {
  switch (action.type) {
    case ChecklistActionTypes.CHECKLIST_LOAD_INDEX_START:
      return state
        .set('loadingIndexStatus', LoadingState.Doing)
        .set('loadingIndexError', null)

    case ChecklistActionTypes.CHECKLIST_LOAD_INDEX_SUCCESS: {
      return state
        .set('loadingIndexStatus', LoadingState.Done)
        .set('checklists', action.data)
    }

    case ChecklistActionTypes.CHECKLIST_LOAD_INDEX_FAILED:
      return state
        .set('loadingIndexStatus', LoadingState.Failed)
        .set('loadingIndexError', action.error)

    default:
      return state
  }
}
