import React, { ReactNode } from 'react';
 

export type PopupViews= "WELCOME"|"CORRECT"|"WRONG";

interface State {
    view?: PopupViews;
    data?: any;
    isOpen: boolean; 
}
type Action = { type: 'open'; view?: PopupViews; payload?: any }
    | { type: 'close'; };

const initialState: State = {
    view: "WELCOME",
    isOpen: true, 
    data: null,
};

function popupReducer(state: State, action: Action): State {
    switch (action.type) {
        case 'open':
            return {
                view: action.view,
                data: action.payload,
                isOpen: true,
             
            };
 
        case 'close':
            return {
                view: undefined,
                data: null,
                isOpen: false,
            };
        default:
            throw new Error('Unknown Action');
    }
}

const PopupStateContext = React.createContext<State>(initialState);
PopupStateContext.displayName = 'PopupStateContext';
const PopupActionContext = React.createContext<
    React.Dispatch<Action> | undefined
>(undefined);
PopupActionContext.displayName = 'PopupActionContext';

type Props = {

    children: ReactNode,

}


export const PopupProvider = (props: Props) => {
    const [state, dispatch] = React.useReducer(popupReducer, initialState);
    const { children } = props;

    return (
        <PopupStateContext.Provider value={state}>
            <PopupActionContext.Provider value={dispatch}>
                {children}
            </PopupActionContext.Provider>
        </PopupStateContext.Provider>
    );
};

export function usePopupState() {
    const context = React.useContext(PopupStateContext);
    if (context === undefined) {
        throw new Error(`usePopupState must be used within a PopupProvider`);
    }

    return context;
}

export function usePopupAction() {
    const dispatch = React.useContext(PopupActionContext);
    if (dispatch === undefined) {
        throw new Error(`usePopupAction must be used within a PopupProvider`);
    }

    return {
        openPopup(view?: PopupViews, payload?: any) { 
            dispatch({ type: 'open', view, payload });
        },
        closePopup() {
            dispatch({ type: 'close'});
        },
    };
}
