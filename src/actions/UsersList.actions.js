export function setList() {
    return (dispatch, getState) => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: "SET_USERS_LIST",
                    payload: json
                })
            })
    }
}


export function addItem(item) {
    return (dispatch) => {
        dispatch({
            type: "ADD",
            payload: item
        })
    }
}

export function delItem(ID) {
    return (dispatch) => {
        dispatch({
            type: "DEL",
            payload: ID
        })
    }
}
