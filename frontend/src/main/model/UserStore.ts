import {makeAutoObservable} from "mobx";


export class UserStore {

  private accessToken?: string

  constructor() {
    makeAutoObservable(this);
  }

  // This method will be wrapped into `action` automatically by `makeAutoObservable`
  // Only arrow functions are automatically bound as actions to the class
  getAccessToken = (): string | undefined => {
    return this.accessToken
  }

  setAccessToken = (value: string | undefined) => {
    this.accessToken = value
  }
}
