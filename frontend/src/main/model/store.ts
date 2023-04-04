/**
 * Collection of all stores in order to make them globally available within
 * the application.
 */

import {InformationStore} from "./InformationStore";
import {UserStore} from "./UserStore";

const informationStore = new InformationStore()
const userStore = new UserStore()

export function useStore() {
    return {
        informationStore: informationStore,
        userStore: userStore
    }
}