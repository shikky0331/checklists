import * as ChecklistActionTypes from 'constants/ChecklistActionTypes'
import handleResponse from 'utilities/response_handler'

export const destroyChecklistsStart = () => ({
  type: ChecklistActionTypes.CHECKLIST_DESTROY_START,
})

export const destroyChecklistsSuccess = (data, params) => ({
  type: ChecklistActionTypes.CHECKLIST_DESTROY_SUCCESS,
  data,
  params,
})

export const destroyChecklistsFailed = error => ({
  type: ChecklistActionTypes.CHECKLIST_DESTROY_FAILED,
  error,
})


export default function destroyChecklist(params = {}) {
  return (dispatch, getState) => {
    dispatch(destroyChecklistsStart())

    fetch(`/api/checklists/${params.id}` ,{
      method: 'DELETE',
    })
    .then(response => {
      return handleResponse(response)
    })
    .then(json => {
      dispatch(destroyChecklistsSuccess(json, params))
    })
    .catch(error => {
      alert(error)
      dispatch(destroyChecklistsFailed(error))
    })
  }
}
