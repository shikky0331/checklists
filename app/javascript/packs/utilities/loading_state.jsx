export default class LoadingState {
  constructor(state) {
    this.state = state;
  }

  getLoadingState() {
    return this.state;
  }

  isNotYet() {
    return this.state === 'NotYet';
  }

  isDoing() {
    return this.state === 'Doing';
  }

  isDone() {
    return this.state === 'Done';
  }

  isFailed() {
    return this.state === 'Failed';
  }
}

LoadingState.LoadingStates = {
  NotYet:  'NotYet',
  Doing:   'Doing',
  Done:    'Done',
  Failed:  'Failed',
};
LoadingState.NotYet  = new LoadingState(LoadingState.LoadingStates.NotYet);
LoadingState.Doing   = new LoadingState(LoadingState.LoadingStates.Doing);
LoadingState.Done    = new LoadingState(LoadingState.LoadingStates.Done);
LoadingState.Failed  = new LoadingState(LoadingState.LoadingStates.Failed);
