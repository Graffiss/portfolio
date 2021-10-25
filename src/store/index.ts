import { ProjectsState } from "reducers/reducer.interface"
import { createStore, Store } from "redux"
import Reducer from "../reducers"

/* eslint-disable no-underscore-dangle */
const store: Store<ProjectsState> = createStore(
  Reducer,
  // @ts-ignore
  /* preloadedState, */ window.__REDUX_DEVTOOLS_EXTENSION__ &&
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__()
)
/* eslint-enable */

export default store
