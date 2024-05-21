import { useSelect } from '@wordpress/data';
import { useRef, useState, useEffect } from '@wordpress/element';
import MainContent from './components/MainContent';
import Header from './components/Header';

function Editor( props ) {
	const [ uiState, setUiState ] = useState( {
		isInserterActive: false,
	} );
	const { SingleFormReducer } = useSelect( ( select ) => {
		return select( 'newform' ).getSingleForm();
	}, [] );

	return (
		<div className="newform-editor-wrap">
			<Header uiState={ uiState } setUiState={ setUiState } />
			{ SingleFormReducer?.singleForm && (
				<MainContent uiState={ uiState } setUiState={ setUiState } />
			) }
		</div>
	);
}

export default function EditorModule( props ) {
	return <Editor { ...props } />;
}
