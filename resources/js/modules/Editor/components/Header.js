import { EditorHeaderStyle } from './style';

export default function Header( props ) {
	const { uiState, setUiState } = props;
	return (
		// <span
		// 	className="newform-insert-field"
		// 	onClick={ () =>
		// 		setUiState( {
		// 			...uiState,
		// 			isInserterActive: ! uiState?.isInserterActive,
		// 		} )
		// 	}
		// >
		// 	Insert
		// </span>
		<EditorHeaderStyle className="newform-editor-header"></EditorHeaderStyle>
	);
}
