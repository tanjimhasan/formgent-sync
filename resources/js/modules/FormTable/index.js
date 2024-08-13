import { lazy, Suspense, useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import Header from './components/Header';
const Table = lazy( () => import( './components/Table' ) );
import FormTableHead from '@formgent/admin/Slots/FormTableHead';
import CreatePopup from '@formgent/components/Form/CreatePopup';
import { AntSkeleton } from '@formgent/components';
import StarterContent from './components/StarterContent';
import Filter from './components/Filter';

function FormTable( props ) {
	const { FormReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getForms();
	}, [] );

	const {
		forms,
		pagination,
		isLoading,
		form_edit_url,
		isFormDeleting,
		isStatusUpdating,
		sortBy,
		dateType,
	} = FormReducer;

	return (
		<div className="formgent-page-inner">
			<FormTableHead.Slot fillProps={ { testProps: 10 } }>
				{ ( fills ) => (
					<>
						{ /* { fills } */ }
						<Header />
					</>
				) }
			</FormTableHead.Slot>
			<Filter pagination={ pagination } isLoading={ isLoading } />
			{ forms.length > 0 ? (
				<Suspense fallback={ <AntSkeleton active /> }>
					<Table
						forms={ forms }
						pagination={ pagination }
						isLoading={ isLoading }
						form_edit_url={ form_edit_url }
						isFormDeleting={ isFormDeleting }
						sortBy={ sortBy }
						dateType={ dateType }
						isStatusUpdating={ isStatusUpdating }
					/>
				</Suspense>
			) : isLoading ? (
				<AntSkeleton active />
			) : (
				<StarterContent />
			) }
			<CreatePopup />
		</div>
	);
}

export default function FormTableModule( props ) {
	return <FormTable { ...props } />;
}
