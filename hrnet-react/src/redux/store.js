import { configureStore } from 'redux';

export const store = configureStore({
    reducer: {
        employees: employeesReducer,
    }
})

export default store;