import { useSelect } from '@wordpress/data';
import { AntInput } from '@formgent/components';
import ReactSVG from 'react-inlinesvg';
import { formatDate } from '@formgent/helper/utils';
import times from '@icon/times.svg';
import check from '@icon/check.svg';
import { __ } from '@wordpress/i18n';
import { TitleBoxStyle } from './style';

export default function TItleBox( props ) {
	const { form, editableForm, setEditableForm } = props;
	const { id, title, created_at } = form;
	const dateFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};

	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getCommonState();
	}, [] );

	const { Link } = CommonReducer.routerComponents;

	function handleCancelEditMode() {
		setEditableForm( null );
	}

	return (
		<TitleBoxStyle className="formgent-titleBox">
			{ editableForm && editableForm.id === id ? (
				<div className="formgent-titleBox__editor">
					<div className="formgent-titleBox__data">
						<AntInput tokens={ { colorBorder: '#ededed' } } />
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
							// onClick={ () =>
							// 	handleRenameFormTitle(
							// 		renameFormMutation,
							// 		id,
							// 		allForms,
							// 		formTableState,
							// 		setFormTableState,
							// 		setStoreData,
							// 		setRenameFormId,
							// 		queryClient,
							// 		isLoading,
							// 		fetchParams?.page,
							// 		filterKey
							// 	)
							// }
						>
							<ReactSVG src={ check } />
							{ /* { isLoading ? (
								<span className="formgent-circle-loader"></span>
							) : (
								<ReactSVG src={ check } />
							) } */ }
						</span>
					</div>
				</div>
			) : (
				<div className="formgent-titlebox__content">
					<div className="formgent-titleBox-text">
						<Link>
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
