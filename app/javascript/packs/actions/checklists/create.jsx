import * as ChecklistActionTypes from 'constants/ChecklistActionTypes'
import handleResponse from 'utilities/response_handler'

export const createChecklistsStart = () => ({
  type: ChecklistActionTypes.CHECKLIST_CREATE_START,
})

export const createChecklistsSuccess = (data, params) => ({
  type: ChecklistActionTypes.CHECKLIST_CREATE_SUCCESS,
  data,
  params,
})

export const createChecklistsFailed = error => ({
  type: ChecklistActionTypes.CHECKLIST_CREATE_FAILED,
  error,
})


export default function createChecklists(params = {}) {
  return (dispatch, getState) => {
    dispatch(createChecklistsStart())

    fetch('/api/checklists' ,{
      method: 'POST',
      body : JSON.stringify({ title: params.title }),
      headers: { 'Content-Type': 'application/json' },
    })
    .then(response => {
      return handleResponse(response)
    })
    .then(json => {
      dispatch(createChecklistsSuccess(json, params))
    })
    .catch(error => {
      alert(error)
      dispatch(createChecklistsFailed(error))
    })
  }
}
