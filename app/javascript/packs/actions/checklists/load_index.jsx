import * as ChecklistActionTypes from 'constants/ChecklistActionTypes'
import handleResponse from 'utilities/response_handler'

export const loadChecklistsStart = () => ({
  type: ChecklistActionTypes.CHECKLIST_LOAD_INDEX_START,
})

export const loadChecklistsSuccess = (data, params) => ({
  type: ChecklistActionTypes.CHECKLIST_LOAD_INDEX_SUCCESS,
  data,
  params,
})

export const loadChecklistsFailed = error => ({
  type: ChecklistActionTypes.CHECKLIST_LOAD_INDEX_FAILED,
  error,
})

export default function loadChecklists(params = {}) {
  return (dispatch, getState) => {
    dispatch(loadChecklistsStart())

    fetch('/api/checklists')
    .then(response => {
      return handleResponse(response)
    })
    .then(json => {
      dispatch(loadChecklistsSuccess(json, params))
    })
    .catch(error => {
      alert(error)
      dispatch(loadChecklistsFailed(error))
    })
  }
}
