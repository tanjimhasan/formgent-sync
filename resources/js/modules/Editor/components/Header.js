import { EditorHeaderStyle } from './style';

export default function Header( props ) {
	const { uiState, setUiState } = props;
	return (
		// <span
		// 	className="formgent-insert-field"
		// 	onClick={ () =>
		// 		setUiState( {
		// 			...uiState,
		// 			isInserterActive: ! uiState?.isInserterActive,
		// 		} )
		// 	}
		// >
		// 	Insert
		// </span>
		<EditorHeaderStyle className="formgent-editor-header"></EditorHeaderStyle>
	);
}
