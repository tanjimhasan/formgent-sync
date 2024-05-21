import {SingleFormActions} from "./actions";
export const SingleFormResolvers = {
	*getSingleForm() {
        yield SingleFormActions.isSingleFormFetchLoading(true);
        try {
            //const data = yield FormActions.fetchForm( 'new-form/ping' );
            const data = {
                title: "new Form",
                content: {
                    fields:[]
                }
            }
            console.log(data);
            yield SingleFormActions.storeSingleForm( data );
            yield SingleFormActions.isSingleFormFetchLoading(false);
        } catch (error) {
            yield SingleFormActions.fetchSingleFormError(error);
            yield SingleFormActions.isSingleFormFetchLoading(false);
        }
	},
};