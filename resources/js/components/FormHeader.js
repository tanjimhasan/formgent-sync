import patchData from '@formgent/helper/patchData';
import arrowLeftIcon from '@icon/arrow-small-left.svg';
import favIcon from '@icon/fav.svg';
import { useDispatch, useSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import ReactSVG from 'react-inlinesvg';
import { FormHeaderStyle } from './style';

export default function FormHeader( props ) {
	const { id, useNavigate } = props;
	const navigate = useNavigate && useNavigate();
	const { publishFormRequest, publishFormSuccess, publishFormError } =
		useDispatch( 'formgent' );

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

	const { SingleFormReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getSingleFormState();
	}, [] );

	const { isUpdatingForm } = SingleFormReducer;

	const { NavLink } = CommonReducer.routerComponents;

	const forms = `/forms/${ id }`;

	const formPreview = () => {
		console.log( 'Form Preview clicked' );
	};
	function formPublish() {
		if ( isUpdatingForm ) return;
		publishFormRequest();
		try {
			const updatedForm = { ...SingleFormReducer.singleForm };
			const formStringyContent = JSON.stringify( {
				...updatedForm.content,
			} );
			Object.assign(
				updatedForm,
				{ font_family: 'Inter' },
				{ status: 'publish' },
				{ content: formStringyContent }
			);
			const updatingStatusResponse = patchData(
				`admin/forms/${ id }`,
				updatedForm
			);
			publishFormSuccess( 'publish' );
		} catch ( error ) {
			console.log( error );
			publishFormError( error );
		}
	}

	return (
		<FormHeaderStyle className="formgent-editor-header">
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
						{ __( 'Back', 'formgent' ) }
					</button>
				</div>

				{ /* <div className="formgent-editor-header__info__wrap">
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
						{ __( 'Saved in draft', 'formgent' ) }
					</span>
				</div> */ }
			</div>

			{ /* Editor Header Nav */ }
			<nav className="formgent-editor-header__nav">
				{ /* <NavLink to={ `${ forms }/edit` }>Editor</NavLink> */ }
				<NavLink to={ `${ forms }/settings` }>Settings</NavLink>
				<NavLink to={ `${ forms }/results` }>Results</NavLink>
			</nav>

			{ /* Editor Header Actions */ }
			<div className="formgent-editor-header__actions">
				{ /* <button
					className="formgent-editor-header__actions__button"
					onClick={ formPreview }
				>
					{ __( 'Preview', 'formgent' ) }
				</button>
				<button
					className="formgent-editor-header__actions__button active"
					onClick={ formPublish }
				>
					{ isUpdatingForm
						? __( 'Publishing', 'formgent' )
						: __( 'Publish', 'formgent' ) }
				</button> */ }
			</div>
		</FormHeaderStyle>
	);
}
