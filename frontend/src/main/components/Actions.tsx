import React, {useContext} from 'react';
import {observer} from "mobx-react";

import {useStore} from "../model/store";
// @ts-ignore
import {I18nContext} from "../services/I18nService";

function Actions() {

    const {informationStore, userStore} = useStore()
    const {word, formattedNumber, setLocale, localeCode} = useContext(I18nContext);

    return (
        <>
            <h1 style={{margin: "10px", fontSize: "larger"}}>Actions</h1>

            {userStore.getAccessToken() &&
                <div>
                    <button style={{margin: "5px"}}
                            onClick={() => {
                                informationStore.read(userStore.getAccessToken())
                            }}>{word('read_secured_information')}</button>
                    <span>{" "}{informationStore.readInformation}</span>
                    <br/>

                    <button style={{margin: "5px"}}
                            onClick={() => {
                                informationStore.write(userStore.getAccessToken())
                            }}>{word('write_information')}</button>
                    <span>{" "}{informationStore.writeResponse}</span>
                    <br/>

                    <button style={{margin: "5px"}}
                            onClick={() => {
                                informationStore.adminAction(userStore.getAccessToken())
                            }}>{word('perform_config_action')}</button>
                    <span>{" "}{informationStore.adminResponse}</span>
                    <br/>

                    <button style={{margin: "5px"}}
                            onClick={() => {
                                informationStore.listKafkaTopics(userStore.getAccessToken())
                            }}>Kafka topics</button>
                    <span>{" "}{informationStore.kafkaTopics}</span>
                    <br/>
                </div>}
        </>
    )
}

export default observer(Actions);
