import { useSelect, useDispatch } from '@wordpress/data';
import { doAction } from '@wordpress/hooks';
import { AntInput } from '@formgent/components';
import ReactSVG from 'react-inlinesvg';
import { formatDate } from '@formgent/helper/utils';
import times from '@icon/times.svg';
import check from '@icon/check.svg';
import { __ } from '@wordpress/i18n';
import { TitleBoxStyle } from './style';
import patchData from '@formgent/helper/patchData';

export default function TItleBox( props ) {
	const { form, editableForm, setEditableForm } = props;
	const { id, title, created_at } = form;

	const { updateTitleRequest, updateTitleSuccess, updateTitleError } =
		useDispatch( 'formgent' );

	const dateFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};

	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getCommonState();
	}, [] );

	const { FormReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getForms();
	}, [] );

	const { isTitleUpdating } = FormReducer;

	const { Link } = CommonReducer.routerComponents;

	function handleCancelEditMode() {
		setEditableForm( null );
	}

	function handleUpdateEditableForm( e ) {
		setEditableForm( {
			...editableForm,
			title: e.target.value,
		} );
	}

	async function handleUpdateFormTitle() {
		if ( title === editableForm.title ) {
			setEditableForm( null );
			return;
		}
		if ( isTitleUpdating ) return;
		updateTitleRequest();
		try {
			const titleUpdateResponse = await patchData(
				`admin/forms/${ editableForm.id }/title`,
				{ title: editableForm.title }
			);
			doAction( 'formgent-toast', {
				message: titleUpdateResponse.message,
			} );
			updateTitleSuccess( editableForm );
		} catch ( error ) {
			updateTitleError( error );
		}
		setEditableForm( null );
	}

	return (
		<TitleBoxStyle className="formgent-titleBox">
			{ editableForm && editableForm.id === id ? (
				<div className="formgent-titleBox__editor">
					<div className="formgent-titleBox__data">
						<AntInput
							tokens={ { colorBorder: '#ededed' } }
							value={ editableForm.title }
							onChange={ handleUpdateEditableForm }
						/>
					</div>
					<div className="formgent-titleBox__actions">
						<span
							className="formgent-titleBox-action-item formgent-titleBox__actions-cancel"
							onClick={ handleCancelEditMode }
						>
							<ReactSVG src={ times } />
						</span>
						<span
							className="formgent-titleBox-action-item formgent-titleBox__actions-yes"
							onClick={ handleUpdateFormTitle }
						>
							{ isTitleUpdating ? (
								<span className="formgent-circle-loader"></span>
							) : (
								<ReactSVG src={ check } />
							) }
						</span>
					</div>
				</div>
			) : (
				<div className="formgent-titlebox__content">
					<div className="formgent-titleBox-text">
						<Link to={ `forms/${ id }/edit` }>
							<span className="formgent-title">{ title }</span>
						</Link>
						<ul className="formgent-titleBox-meta">
							<li className="formgent-titleBox-meta__id">
								{ __( 'ID', 'formgent' ) } #{ id }
							</li>
							<li className="formgent-titleBox-meta__date">
								{ __( 'Created:', 'formgent' ) }{ ' ' }
								{ formatDate(
									'en-US',
									created_at,
									dateFormatOptions
								) }
							</li>
						</ul>
					</div>
				</div>
			) }
		</TitleBoxStyle>
	);
}
