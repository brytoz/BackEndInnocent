export const initialState = {
    open: false,
    close: true
}

export function myCounter(state, action) {

    switch (action.type) {
        case 'openNav':
            return {
                open: true,
                close: false
            };
        case 'closeNav':
            return {
                open: false,
                close: true,
            };
        default:
            return initialState;
    }
}