import * as React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";
import {Dialogs} from "./Dialogs";

export const DialogsContainer = () => {


    return <StoreContext.Consumer>
        { 
        (store) => {
            let state = store.getState().dialogsPage

            let onNewMessageChange = (text) => {
                store.dispatch(updateNewMessageBodyCreator(text));
            };

            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            };

        return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
        }
        }
    </StoreContext.Consumer>;
};
