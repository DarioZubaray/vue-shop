import state from './state'
import * as mutations from './mutation'
import * as actions from './actions'

const namespaced = true

export default {
    namespaced,
    state,
    mutations,
    actions
}