import { useSelect } from '@wordpress/data';
import { Dropdown } from 'antd';
import { EditorHeaderStyle } from './style';

export default function Header( props ) {
	const { id, uiState, setUiState } = props;

	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getCommonState();
	}, [] );

	const { NavLink } = CommonReducer.routerComponents;

	const forms = `/forms/${ id }`;

	const handleDropdownMenuClick = ( e ) => {
		switch ( e.key ) {
			case 'export':
				console.log( 'Export clicked' );
				break;
			case 'import':
				console.log( 'Import clicked' );
				break;
			case 'delete':
				console.log( 'Delete clicked' );
				break;
			default:
				break;
		}
	};

	const items = [
		{
			label: 'Export',
			key: 'export',
		},
		{
			label: 'Import',
			key: 'import',
		},
		{
			label: 'Delete',
			key: 'delete',
		},
	];

	return (
		<EditorHeaderStyle className="formgent-editor-header">
			<nav className="formgent-editor-header__nav">
				<NavLink to={ `${ forms }/edit` }>Editor</NavLink>
				<NavLink to={ `${ forms }/settings` }>Settings</NavLink>
			</nav>
			<div className="formgent-editor-header__actions">
				<div className="formgent-editor-header__actions__modify">
					<button>Undo</button>
					<button>Redo</button>
				</div>
				<div className="formgent-editor-header__actions__status">
					<button className="formgent-editor-header__actions__button">
						Preview
					</button>
					<button className="formgent-editor-header__actions__button active">
						Publish
					</button>
				</div>
				<div className="formgent-editor-header__actions__dropdown">
					<Dropdown
						menu={ { items, onClick: handleDropdownMenuClick } }
						trigger={ [ 'click' ] }
					>
						<button className="formgent-dropdown__button">
							...
						</button>
					</Dropdown>
				</div>
			</div>
		</EditorHeaderStyle>
	);
}
