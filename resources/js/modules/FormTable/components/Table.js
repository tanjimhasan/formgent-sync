import { useState } from '@wordpress/element';
import { useSelect, useDispatch, resolveSelect } from '@wordpress/data';
import { applyFilters } from '@wordpress/hooks';
import { AntTable, AntSpin } from '@formgent/components';
import { formatDate } from '@formgent/helper/utils';
import TitleBox from './TitleBox';
import { TableStyle } from './style';
import TableAction from './TableAction';
import TableBulkSelection from './TableBulkSelection';
import ReactSVG from 'react-inlinesvg';
import copyIcon from '@icon/copy.svg';
import checkIcon from '@icon/check.svg';
import spinnerIcon from '@icon/spinner.svg';
import { Tooltip } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import handleTextSelect from '@formgent/helper/handleTextSelect';
import FormTableStatus from './FormTableStatus';

export default function Table() {
	const [ selectedRowKeys, setSelectedRowKeys ] = useState( [] );
	const [ editableForm, setEditableForm ] = useState( null );

	const [ copiedText, setCopiedText ] = useState( '' );
	const [ isCopied, setIsCopied ] = useState( false );
	const [ isCopying, setIsCopying ] = useState( false );
	const [ copiedShortcode, setCopiedShortcode ] = useState( null );
	const [ inputPosition, setInputPosition ] = useState( null );
	const [ copyingTimeoutId, setCopyingTimeoutId ] = useState( null );
	const [ copiedTimeoutId, setCopiedTimeoutId ] = useState( null );

	const { updateCurrentPage } = useDispatch( 'formgent' );

	const { FormReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getForms();
	}, [] );

	const { forms, pagination, isLoading, form_edit_url } = FormReducer;

	const rowSelection = {
		selectedRowKeys,
		onChange: handleRowSelection,
	};

	function handleRowSelection( newSelectedRowKeys ) {
		setSelectedRowKeys( newSelectedRowKeys );
	}

	const dateFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};

	const handleShortcodeCopy = ( event ) => {
		const copyableText = event.target.value;
		handleTextSelect( { copyableText, setCopiedText } );
		const inputRect = event.target.getBoundingClientRect();
		setInputPosition( inputRect );
		if ( copyingTimeoutId ) {
			clearTimeout( copyingTimeoutId );
		}
		if ( copiedTimeoutId ) {
			clearTimeout( copiedTimeoutId );
		}
		setIsCopying( true );
		const copyingTimeout = setTimeout( () => {
			setIsCopying( false );
			setIsCopied( true );
			const copiedTimeout = setTimeout( () => {
				setIsCopied( false );
			}, 3000 );
			setCopiedTimeoutId( copiedTimeout );
		}, 500 );
		setCopyingTimeoutId( copyingTimeout );
	};

	document.addEventListener( 'scroll', () => {
		const inputRects = document.querySelector(
			`input[data-shortcode_id="${ copiedShortcode }"]`
		);
		setInputPosition( inputRects && inputRects.getBoundingClientRect() );
	} );

	const formTableColumns = applyFilters( 'formgent_form_table_columns', [
		{
			title: 'Name',
			className: 'formgent-form-checkbox',
			render: ( text, record ) => (
				<TitleBox
					form={ record }
					form_edit_url={ form_edit_url }
					editableForm={ editableForm }
					setEditableForm={ setEditableForm }
				/>
			),
		},
		{
			title: 'Shortcode',
			className: 'formgent-form-shortcode',
			render: ( text, record ) => (
				<Tooltip
					text={
						isCopied && copiedShortcode === record.id
							? ''
							: __( 'Click to copy', 'formgent' )
					}
					delay="0"
					placement="bottom"
					hideOnClick={ true }
				>
					<label
						className={
							isCopying && copiedShortcode === record.id
								? 'formgent-form-shortcode__copying'
								: ! isCopying &&
								  isCopied &&
								  copiedShortcode === record.id
								? 'formgent-form-shortcode__copied'
								: ''
						}
					>
						{ isCopying && copiedShortcode === record.id ? (
							<ReactSVG src={ spinnerIcon } />
						) : ! isCopying &&
						  isCopied &&
						  copiedShortcode === record.id ? (
							<ReactSVG src={ checkIcon } />
						) : (
							<ReactSVG src={ copyIcon } />
						) }
						<input
							type="text"
							readOnly
							value={
								isCopying & ( copiedShortcode === record.id )
									? ''
									: ! isCopying &&
									  isCopied &&
									  copiedShortcode === record.id
									? __( 'Copied!', 'formgent' )
									: `[formgent-form id="${ record.id }"]`
							}
							data-shortcode_id={ record.id }
							onClick={ ( e ) => {
								setCopiedShortcode( record.id );
								handleShortcodeCopy( e );
							} }
						/>
					</label>
				</Tooltip>
			),
		},
		{
			title: 'Responses',
			className: 'formgent-head-response',
			render: ( text, record ) => (
				<div className="helpgent-form-responses">
					<a
					//to={ `responses` }
					>
						{ record.total_unread_responses > 0 ? (
							<div className="helpgent-badge helpgent-badge-danger helpgent-badge-circle helpgent-badge-small">
								{ record.total_unread_responses }
							</div>
						) : (
							''
						) }
					</a>
				</div>
			),
		},
		{
			title: 'Created By',
			className: 'formgent-head-created-by',
			render: ( text, record ) => (
				<div className="helpgent-form-username">
					{ record.username }
				</div>
			),
		},
		{
			title: 'Updated',
			className: 'formgent-head-updated-at',
			render: ( text, record ) => {
				const date =
					'string' === typeof record.updated_at
						? record.updated_at
						: record.created_at;
				return (
					<div className="helpgent-form-date">
						{ formatDate( 'en-US', date, dateFormatOptions ) }
					</div>
				);
			},
		},
		{
			title: __( 'Status', 'helpgent' ),
			className: 'formgent-head-status',
			render: ( text, record ) => (
				<div className="formgent-form-status">
					<FormTableStatus />
				</div>
			),
		},
		{
			title: 'More',
			className: 'formgent-head-action',
			render: ( text, record ) => {
				const date =
					'string' === typeof record.updated_at
						? record.updated_at
						: record.created_at;
				return (
					<div className="formgent-form-action">
						<TableAction
							form={ record }
							editableForm={ editableForm }
							setEditableForm={ setEditableForm }
						/>
					</div>
				);
			},
		},
	] );
	function handleFormTableChange( pagination ) {
		updateCurrentPage( pagination?.current );
		resolveSelect( 'formgent' ).getForms(
			pagination?.current,
			10,
			Date.now()
		);
	}

	return (
		<TableStyle>
			<AntSpin spinning={ isLoading }>
				{ selectedRowKeys.length !== 0 && (
					<TableBulkSelection
						data={ forms }
						selectedRowKeys={ selectedRowKeys }
						setSelectedRowKeys={ setSelectedRowKeys }
					/>
				) }
				<AntTable
					componentTokens={ {
						Table: {
							headerColor: '#6e6e6e',
							headerBg: '#d5d5d5',
							headerSplitColor: '#d5d5d5',
							cellPaddingBlock: 20,
						},
					} }
					showHeader={ selectedRowKeys.length === 0 }
					rowSelection={ rowSelection }
					columns={ formTableColumns }
					dataSource={ forms }
					rowKey={ ( record ) => record.id }
					pagination={ {
						current: pagination?.current_page,
						pageSize: 10,
						total: pagination?.total_items,
						position: [ 'bottomCenter' ],
						showTotal: ( total, range ) =>
							`${ range[ 0 ] } - ${ range[ 1 ] } of ${ total } forms`,
					} }
					onChange={ handleFormTableChange }
				/>
			</AntSpin>
		</TableStyle>
	);
}
