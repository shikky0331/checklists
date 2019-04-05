import * as ChecklistActionTypes from 'constants/ChecklistActionTypes'
import Immutable from 'immutable'
import LoadingState from 'utilities/loading_state'

const initialState = Immutable.Map({
  checklists: [],
  loadingIndexStatus: LoadingState.NotYet,
  loadingIndexError: null,
  createStatus: LoadingState.NotYet,
  createError: null,
  destroyStatus: LoadingState.NotYet,
  destroyError: null,
})

export default function checklistsReducer(state = initialState, action) {
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

    case ChecklistActionTypes.CHECKLIST_CREATE_START:
      return state
        .set('createStatus', LoadingState.Doing)
        .set('createError', null)

    case ChecklistActionTypes.CHECKLIST_CREATE_SUCCESS: {
      const updateChecklists = state.get('checklists').concat(action.data)
      return state
        .set('createStatus', LoadingState.Done)
        .set('checklists', updateChecklists)
    }

    case ChecklistActionTypes.CHECKLIST_CREATE_FAILED:
      return state
        .set('createStatus', LoadingState.Failed)
        .set('createError', action.error)

    case ChecklistActionTypes.CHECKLIST_DESTROY_START:
      return state
        .set('destroyStatus', LoadingState.Doing)
        .set('destroyError', null)

    case ChecklistActionTypes.CHECKLIST_DESTROY_SUCCESS:
      const updateChecklists = state.get('checklists').filter((checklists) => checklists.id !== action.data)

      return state
        .set('destroyStatus', LoadingState.Doing)
        .set('checklists', updateChecklists)

    case ChecklistActionTypes.CHECKLIST_DESTROY_FAILED: {
      return state
        .set('destroyStatus', LoadingState.Done)
        .set('checklists', action.data)
    }

    default:
      return state
  }
}
