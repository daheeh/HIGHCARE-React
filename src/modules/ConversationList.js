const NEWPARTNER = 'conversationlist/NEWPARTNER';
const NEWMESSAGE = 'conversationlist/NEWMESSAGE';
const RECEIVED = 'conversationlist/RECEIVED';
const LEAVECHAT = 'conversationlist/LEAVECHAT'

export const insertPartner = (partner) => ({type:NEWPARTNER, payload:partner});
export const insertMessage = (msg) => ({type:NEWMESSAGE, payload:msg});
export const receive = (msg) => ({type:RECEIVED, payload:msg});
export const leaveChat = (partner) => ({type:LEAVECHAT, payload:partner})


// const initialState = {};

// const ConversationList = (state=initialState, action) => {
//     switch (action.type) {
//         case NEWPARTNER:       
//             state[action.payload.partner] = [...action.payload.list];
//             return {...state};
//         case NEWMESSAGE:
//             state[action.payload.to] = [...state[action.payload.to], action.payload];
//             return {...state};
//         case RECEIVED:
//             if(state[action.payload.author]===undefined){
//                 state[action.payload.author] = [action.payload];
//             } else {
//                 state[action.payload.author] = [...state[action.payload.author], action.payload];
//             }            
//             return {...state};
//         case LEAVECHAT:
//             delete state[action.payload];
//             return {...state};
//         default:
//             return state;
//     }
// }


const initialState = {};

const ConversationList = (state = initialState, action) => {
    switch (action.type) {
        case NEWPARTNER:
            return {
                ...state,
                [action.payload.partner]: [...action.payload.list],
            };
        case NEWMESSAGE:
            return {
                ...state,
                [action.payload.to]: [...state[action.payload.to], action.payload],
            };
        case RECEIVED:
            return {
                ...state,
                [action.payload.author]: state[action.payload.author]
                    ? [...state[action.payload.author], action.payload]
                    : [action.payload],
            };
        case LEAVECHAT:
            const newState = { ...state };
            delete newState[action.payload];
            return newState;
        default:
            return state;
    }
};

export default ConversationList;