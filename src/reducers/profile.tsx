type ProfileReducerAction = {
    type: string
    field?: string
    value?: string
    payload?: any
}

export function profileReducer(state: any, action: ProfileReducerAction) {
    switch (action.type) {
        case 'initialize':
            return {
                ...state,
                ...action.payload
            }
        case 'submitted':
            return {
                ...state,
                loading: true
            }
        case 'success':
            return {
                ...state,
                loading: false
            }
        case 'error':
            return {
                ...state,
                loading: false,
                error: true,
                errorMessages: action.payload
            }
        case 'updateField':
            if (!action.field)
                throw new Error('Dispatch action field is undefined')
            return {
                ...state,
                [action.field]: action.value
            }
        default:
            return state
    }
}
