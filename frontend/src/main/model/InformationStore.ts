import {makeAutoObservable} from "mobx";

import {BackendConnection} from "../services/BackendConnection";

export class InformationStore {

    backendConnection = new BackendConnection();

    readInformation: string | null = null;
    writeResponse: string | null = null;
    adminResponse: string | null = null;
    kafkaTopics: string | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    // This method will be wrapped into `action` automatically by `makeAutoObservable`
    // Only arrow functions are automatically bound as actions to the class
    setReadInformation = (readInformation: string | null) => {
        this.readInformation = readInformation;
    }

    setWriteResponse = (writeResponse: string | null) => {
        this.writeResponse = writeResponse;
    }

    setAdminResponse = (adminResponse: string | null) => {
        this.adminResponse = adminResponse;
    }

    setKafkaTopics = (kafkaTopics: string | null) => {
        this.kafkaTopics = kafkaTopics;
    }

    // Async functions are not considered to be actions. Use `runInAction` wrapper or separate arrow function as action.
    // See https://stackoverflow.com/questions/64770762/mobx-since-strict-mode-is-enabled-changing-observed-observable-values-withou
    read = async (accessToken: string | undefined) => {
        if (accessToken) {
            await this.backendConnection.read(accessToken)
                .then((response) => this.setReadInformation(response));
        } else {
            this.setReadInformation("Nice try, but you are not signed in");
        }
    }

    write = async (auth: string | undefined) => {
        if (auth) {
            await this.backendConnection.write(auth)
                .then((response) => this.setWriteResponse(response));
        } else {
            this.setWriteResponse("Nice try, but you are not signed in");
        }
    }

    adminAction = async (auth: string | undefined) => {
        if (auth) {
            await this.backendConnection.adminAction(auth)
                .then((response) => this.setAdminResponse(response));
        } else {
            this.setAdminResponse("Nice try, but you are not signed in");
        }
    }

    listKafkaTopics = async (auth: string | undefined) => {
        if (auth) {
            await this.backendConnection.listKafkaTopics(auth)
                .then((response) => this.setKafkaTopics(response));
        } else {
            this.setKafkaTopics("Nice try, but you are not signed in");
        }
    }


}