import { useSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';
import Header from '../Editor/components/Header';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

function Results() {
	const [ uiState, setUiState ] = useState( {
		isInserterActive: false,
	} );
	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getCommonState();
	}, [] );

	const { useParams } = CommonReducer.routerComponents;

	const { id } = useParams();

	return (
		<div className="formgent-editor-wrap">
			<Header id={ id } uiState={ uiState } setUiState={ setUiState } />
			<div
				className="formgent-editor-wrap__content"
				style={ { display: 'flex' } }
			>
				<Sidebar id={ id } />
				<MainContent />
			</div>
		</div>
	);
}

export default function ResultsModule( props ) {
	return <Results { ...props } />;
}
