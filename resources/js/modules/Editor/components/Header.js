import { useSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';
import { Dropdown, Input } from 'antd';
import ReactSVG from 'react-inlinesvg';
import { EditorHeaderStyle } from './style';

import arrowLeftIcon from '@icon/arrow-small-left.svg';
import checkIcon from '@icon/check.svg';
import favIcon from '@icon/fav.svg';
import pencilIcon from '@icon/pen-nib.svg';

export default function Header( props ) {
	const { id, useNavigate, uiState, setUiState } = props;
	const navigate = useNavigate && useNavigate();

	const [ isEditing, setIsEditing ] = useState( false );
	const [ title, setTitle ] = useState( 'Form Name' );

	const handleBackButtonClick = () => {
		navigate( -1 );
	};

	const handleEditClick = () => {
		setIsEditing( true );
	};
	const handleInputChange = ( e ) => {
		setTitle( e.target.value );
	};

	const handleBlur = () => {
		setIsEditing( false );
		// Perform save action here (e.g., API call) when blurred
	};

	const handleSaveClick = () => {
		setIsEditing( false );
		// Perform save action here (e.g., API call)
	};

	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getCommonState();
	}, [] );

	const { NavLink } = CommonReducer.routerComponents;

	const forms = `/forms/${ id }`;

	const undoCurrentTask = () => {
		console.log( 'Form Undo clicked' );
	};

	const redoPreviousTask = () => {
		console.log( 'Form Redo clicked' );
	};

	const formPreview = () => {
		console.log( 'Form Preview clicked' );
	};

	const formPublish = () => {
		console.log( 'Form Publish clicked' );
	};

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
			<div className="formgent-editor-header__info">
				<div className="formgent-editor-header__info__redirect">
					<div className="formgent-editor-header__info__logo">
						<ReactSVG src={ favIcon } />
					</div>
					<button
						className="formgent-editor-header__info__previous"
						onClick={ handleBackButtonClick }
					>
						<ReactSVG src={ arrowLeftIcon } />
						Back
					</button>
				</div>
				<div className="formgent-editor-header__info__wrap">
					<div className="formgent-editor-header__info__title">
						{ isEditing && (
							<ReactSVG
								src={ checkIcon }
								width="16"
								height="16"
								onClick={ handleSaveClick }
							/>
						) }
						{ isEditing ? (
							<Input
								value={ title }
								onChange={ handleInputChange }
								onBlur={ handleBlur }
								autoFocus
							/>
						) : (
							<>
								<ReactSVG
									src={ pencilIcon }
									onClick={ handleEditClick }
								/>
								<span>{ title }</span>
							</>
						) }
					</div>
					<span className="formgent-editor-header__info__status">
						<ReactSVG src={ checkIcon } />
						Saved in draft
					</span>
				</div>
			</div>
			<nav className="formgent-editor-header__nav">
				<NavLink to={ `${ forms }/edit` }>Editor</NavLink>
				<NavLink to={ `${ forms }/settings` }>Settings</NavLink>
			</nav>
			<div className="formgent-editor-header__actions">
				<div className="formgent-editor-header__actions__modify">
					<button onClick={ undoCurrentTask }>Undo</button>
					<button onClick={ redoPreviousTask }>Redo</button>
				</div>
				<div className="formgent-editor-header__actions__status">
					<button
						className="formgent-editor-header__actions__button"
						onClick={ formPreview }
					>
						Preview
					</button>
					<button
						className="formgent-editor-header__actions__button active"
						onClick={ formPublish }
					>
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
