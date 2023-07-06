import React, { createContext, useState } from "react";
// import React, { useState } from 'react'

// import ContextApiContext from "./ContextApiContext";
// // export const ContextApi = createContext();

// const ContexApifun = (props) =>{
//     // const ContextApi = createContext();
//     const contextState_init = {
//         "avalible_languages":[
//             {
//                 "id":1,
//                 "name":"English",
//                 "prefix":"_en"
//             },
//             {
//                 "id":2,
//                 "name":"Russian",
//                 "prefix":"_ru"
//             },
//         ],
//         "language":{
//             "id":1,
//             "name":"English",
//             "prefix":"_en"
//         },
//         // "language":{
//         //     "id":2,
//         //     "name":"Russian",
//         //     "prefix":"_ru"
//         // },
//         "user":{
//             id:"0",
//             name:"Guest",
//             token:"basictoken"
//         }
//     };
//     const [contextState,setContextState] = useState(contextState_init);

//     const updateContextState = (update_obj,obj_name)=>{
//         switch (obj_name) {
//             case 'language':
//                 let lang = contextState['avalible_languages'].find((element) => {
//                     console.log('element.id === update_obj',element.id , parseInt(update_obj));
//                     return element.id === parseInt(update_obj);
//                   });
//                   contextState[obj_name] = lang;
//                   setContextState(contextState)
//                   console.log('updated context',contextState);

//                 //   console.log('update_obj ',update_obj);
//                 //   console.log('found  contextState[avalible_languages ',contextState['avalible_languages']);
//                 //   console.log('found  lang ',lang);
//                 //   console.log('contextState obj_name ',obj_name);
//                 //   console.log('contextState ',contextState);
//                 //   console.log('contextState lang',contextState[obj_name]);
//                 break;

//             default:
//                 contextState[obj_name] = update_obj;
//                 setContextState(contextState)
//                 break;
//         }
//     }

//     return (
//         <ContextApiContext.Provider value={{...contextState,updateContext:updateContextState}}>
//             {props.children}
//         </ContextApiContext.Provider>
//     );
// }




// import React, { useState } from 'react'

export const ContextApiContext = React.createContext({
    "avalible_languages": [
        {
            "id": 1,
            "name": "English",
            "prefix": "_en"
        },
        {
            "id": 2,
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
    //     "id":2,
    //     "name":"Russian",
    //     "prefix":"_ru"
    // },
    "user": {
        id: "0",
        name: "Guest",
        token: "basictoken"
    },
    setContextState: (update_obj, obj_name) => {



        switch (obj_name) {
            case 'language':
                let lang = contextState['avalible_languages'].find((element) => {
                    console.log('element.id === update_obj', element.id, parseInt(update_obj));
                    return element.id === parseInt(update_obj);
                });
                contextState[obj_name] = lang;
                setContextState(contextState)
                console.log('updated context', contextState);

                //   console.log('update_obj ',update_obj);
                //   console.log('found  contextState[avalible_languages ',contextState['avalible_languages']);
                console.log('found  lang ', lang);
                //   console.log('contextState obj_name ',obj_name);
                //   console.log('contextState ',contextState);
                //   console.log('contextState lang',contextState[obj_name]);
                break;

            default:
                contextState[obj_name] = update_obj;
                setContextState(contextState)
                break;

        }

    }
})

export const ContexApifun = (props) => {

    let initState = {
        "avalible_languages": [
            {
                "id": 1,
                "name": "English",
                "prefix": "_en"
            },
            {
                "id": 2,
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
        //     "id":2,
        //     "name":"Russian",
        //     "prefix":"_ru"
        // },
        "user": {
            id: "0",
            name: "Guest",
            token: "basictoken"
        },

        // updateContext: setContextState
    }

    const setContextState = (update_obj, obj_name) => {



        switch (obj_name) {
            case 'language':
                let lang = initState['avalible_languages'].find((element) => {
                    console.log('element.id === update_obj', element.id, parseInt(update_obj));
                    return element.id === parseInt(update_obj);
                });
                initState[obj_name] = lang;
                setState(initState)
                console.log('updated context', initState);

                //   console.log('update_obj ',update_obj);
                //   console.log('found  contextState[avalible_languages ',contextState['avalible_languages']);
                console.log('found  lang ', lang);
                //   console.log('contextState obj_name ',obj_name);
                //   console.log('contextState ',contextState);
                //   console.log('contextState lang',contextState[obj_name]);
                break;

            default:
                initState[obj_name] = update_obj;
                setState(initState)
                break;

        }

    }
    initState = {...initState, updateContext: setContextState}

    const [state, setState] = useState(initState)

    return (
        <ContextApiContext.Provider value={state}>
            {props.children}
        </ContextApiContext.Provider>
    )
}

export default ContexApifun;
