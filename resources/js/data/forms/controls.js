import apiFetch from '@wordpress/api-fetch';
export const FormControls = {
    FETCH_FROM(action){
        return apiFetch({path: action.path});
    },
}