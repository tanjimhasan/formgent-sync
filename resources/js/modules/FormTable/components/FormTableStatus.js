//import useStore from '@helpgent/hooks/useStore.js';
//import useUpdateMutation from '@helpgent/hooks/useUpdateMutation.js';
//import handleUpdateFormStatus from '../helper/handleUpdateFormStatus';
import { ToggleControl } from '@wordpress/components';
//import { useFormTableState } from '../context/FormTableStateContext';
//import { useQueryClient } from '@tanstack/react-query';

export default function FormTableStatus( props ) {
	//const { formTableState } = useFormTableState();
	//const { fetchParams, filterKey } = formTableState;
	//const { id, status, baseApiRoute } = props;
	//const statusText = status === 'publish' ? 'Active' : 'Inactive';
	//const { setStoreData, getStoreData } = useStore();
	// const forms = getStoreData( [
	// 	`helpgent-form-${ filterKey }-${ fetchParams?.page }`,
	// ] );
	//const queryClient = useQueryClient();

	/* Form Update Mutation */
	// const { mutateAsync: updateStatusFormMutation, isLoading } =
	// 	useUpdateMutation( `${ baseApiRoute?.forms }/${ id }/status` );

	const status = 'publish';
	const statusText = status === 'publish' ? 'Active' : 'Inactive';

	return (
		<div className="formgent-toggle formgent-toggle-success">
			<ToggleControl
				onChange={ ( e ) => {
					// handleUpdateFormStatus(
					// 	id,
					// 	forms,
					// 	status,
					// 	updateStatusFormMutation,
					// 	setStoreData,
					// 	fetchParams?.page,
					// 	filterKey,
					// 	queryClient
					// )
					console.log( e );
				} }
				checked={ status === 'publish' }
				label={ statusText }
			/>
		</div>
	);
}
