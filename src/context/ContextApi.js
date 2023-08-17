import React, { createContext, useState } from "react";

export const ContextApiContext = React.createContext()


let initState = {
    "avalible_languages": [
        {
            "id": '1',
            "name": "English",
            "prefix": "_en"
        },
        {
            "id": '2',
            "name": "Russian",
            "prefix": "_ru"
        }
    ],
    "language": {
        "id": 1,
        "name": "English",
        "prefix": "_en"
    },
    // "language":{
    //     "id":'2',
    //     "name":"Russian",
    //     "prefix":"_ru"
    // },
    "user": {
        id: "0",
        name: "Guest",
        access_token: "Basic cmVlbHNwcm8tYXBwLW1vYmlsZTogY21WbGJITndjbTh0WVhCd0xXMXZZbWxzWlE9PQ==",
        role_id: 2,
    },
}

export const ContexApiProvider = (props) => {


    const [contextState, setContextState] = useState(initState)

    
    const updateContextState = (update_obj, obj_name) => {

        let objContextState = contextState;

        switch (obj_name) {
            case 'language':
                let lang = contextState['avalible_languages'].find((element) => {
                    console.log('element.id === update_obj', element.id, parseInt(update_obj));
                    return element.id === update_obj;
                });
                objContextState[obj_name] = lang;
                setContextState({...contextState,objContextState})
                console.log('updated context', contextState);

                //   console.log('update_obj ',update_obj);
                //   console.log('found  contextState[avalible_languages ',contextState['avalible_languages']);
                console.log('found  lang ', lang);
                //   console.log('contextState obj_name ',obj_name);
                //   console.log('contextState ',contextState);
                //   console.log('contextState lang',contextState[obj_name]);
                break;

            default:
                objContextState[obj_name] = update_obj;
                setContextState({...contextState,objContextState})
                break;

        }

    }

    return (
        <ContextApiContext.Provider value={{contextState,updateContextState}}>
            {props.children}
        </ContextApiContext.Provider>
    )
}

export default ContexApiProvider;
