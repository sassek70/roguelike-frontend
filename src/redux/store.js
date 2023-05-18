import { render } from "@testing-library/react";


const configureStore = () => {
    let state;
    
    const dispatch = (action) => {
        state = reducer(state, action);
        render();
    }

    const getState = () => {
        return state;
    }

    return {
        dispatch,
        getState
    }
}

// const reducer = (state = ) =>{

}