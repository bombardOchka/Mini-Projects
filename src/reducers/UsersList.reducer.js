
let intialState = {
    list: []
}

export const usersListReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'SET_USERS_LIST': {
            state = {
                ...state,
                list: [...state.list, ...action.payload]
            };
            break;
        }
    }

    switch (action.type) {
        case 'ADD': {
            state = {
                ...state,
                list: [...state.list, action.payload]
            };
            break;
        }
    }

    switch (action.type) {
        case 'DEL': {
            state = {
                ...state,
                list: state.list.filter((elem) => elem.id != action.payload)
            };
            break;
        }
    }

    return state;
}


