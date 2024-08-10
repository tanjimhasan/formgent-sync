import { useState, useEffect } from '@wordpress/element';
import { useDispatch, resolveSelect } from '@wordpress/data';
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
import Filter from './Filter';

export default function Table( props ) {
	const [ selectedRowKeys, setSelectedRowKeys ] = useState( [] );
	const [ selectedForms, setSelectedForms ] = useState( [] );
	const [ editableForm, setEditableForm ] = useState( null );
	const [ copiedText, setCopiedText ] = useState( '' );
	const [ isCopied, setIsCopied ] = useState( false );
	const [ isCopying, setIsCopying ] = useState( false );
	const [ copiedShortcode, setCopiedShortcode ] = useState( null );
	const [ inputPosition, setInputPosition ] = useState( null );
	const [ copyingTimeoutId, setCopyingTimeoutId ] = useState( null );
	const [ copiedTimeoutId, setCopiedTimeoutId ] = useState( null );
	const [ formType, setFormType ] = useState( 'all' );
	const [ searchQuery, setSearchQuery ] = useState( '' );
	const [ defaultSorting, setDefaultSorting ] = useState( 'date_created' );
	const [ formDateType, setFormDateType ] = useState( 'all' );

	const {
		updateCurrentPage,
		updateFormSortBy,
		updateFormDateType,
		updateFormDateFrom,
		updateFormDateTo,
	} = useDispatch( 'formgent' );
	const { forms, pagination, isLoading, form_edit_url, isFormDeleting } =
		props;
	const [ filteredForms, setFilteredForms ] = useState( forms );

	const rowSelection = {
		selectedRowKeys,
		onChange: handleRowSelection,
	};

	function handleRowSelection( newSelectedRowKeys ) {
		setSelectedRowKeys( newSelectedRowKeys );

		const selectedFormsNames = forms
			.filter( ( form ) => newSelectedRowKeys.includes( form.id ) )
			.map( ( form ) => form.title );

		setSelectedForms( selectedFormsNames );
	}

	// useEffect( () => {
	// 	resolveSelect( 'formgent' ).getForms(
	// 		pagination.current_page,
	// 		pagination.per_page,
	// 		Date.now(),
	// 		defaultSorting,
	// 		formDateType
	// 	);
	// }, [ defaultSorting, pagination.current_page ] );

	useEffect( () => {
		let sortedForms = [ ...forms ];
		if ( defaultSorting === 'date_created' ) {
			sortedForms.sort(
				( a, b ) => new Date( b.created_at ) - new Date( a.created_at )
			);
		} else if ( defaultSorting === 'title' ) {
			sortedForms.sort( ( a, b ) => a.title.localeCompare( b.title ) );
		}
		setFilteredForms( sortedForms );
	}, [ forms, defaultSorting ] );

	useEffect( () => {
		const filteredForms = forms.filter( ( form ) => {
			const matchesFormType =
				formType === 'all' || form.type === formType;
			const matchesSearchQuery = form.title
				?.toLowerCase()
				.includes( searchQuery?.toLowerCase() );
			return matchesFormType && matchesSearchQuery;
		} );
		setFilteredForms( filteredForms );
	}, [ forms, formType, searchQuery ] );

	const handleFormTypeChange = ( type ) => {
		setFormType( type );
	};

	const handleSearchQueryChange = ( query ) => {
		setSearchQuery( query );
	};

	const handleFormSorting = ( key ) => {
		setDefaultSorting( key );
		updateFormSortBy( key );
		resolveSelect( 'formgent' ).getForms(
			pagination.current_page,
			pagination.per_page,
			Date.now(),
			key
		);
	};

	const handleFormDateType = ( value ) => {
		updateFormDateType( value );
		setFormDateType( value );
		resolveSelect( 'formgent' ).getForms(
			pagination.current_page,
			pagination.per_page,
			Date.now(),
			defaultSorting,
			value
		);
	};

	function handleFormDateRange( dateStrings ) {
		const [ dateFrom, dateTo ] = dateStrings;
		updateFormDateFrom( `${ dateFrom } 00:00:01` );
		updateFormDateTo( `${ dateTo } 23:59:59` );
		resolveSelect( 'formgent' ).getForms(
			pagination.current_page,
			pagination.per_page,
			Date.now(),
			defaultSorting,
			formDateType,
			`${ dateFrom } 00:00:01`,
			`${ dateTo } 23:59:59`
		);
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
			title: __( 'Status', 'formgent' ),
			className: 'formgent-head-status',
			render: ( text, record ) => (
				<div className="formgent-form-status">
					<FormTableStatus
						form={ record }
						setEditableForm={ setEditableForm }
					/>
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
			pagination?.pageSize,
			Date.now(),
			defaultSorting
		);
	}

	return (
		<>
			<Filter
				onFormTypeChange={ handleFormTypeChange }
				onSearchQueryChange={ handleSearchQueryChange }
				onSortingChange={ handleFormSorting }
				onFormDateTypeChange={ handleFormDateType }
				onFormDateRangeChange={ handleFormDateRange }
			/>
			<TableStyle>
				<AntSpin spinning={ isLoading }>
					{ selectedRowKeys.length !== 0 && (
						<TableBulkSelection
							data={ forms }
							selectedRowKeys={ selectedRowKeys }
							setSelectedRowKeys={ setSelectedRowKeys }
							isFormDeleting={ isFormDeleting }
							selectedForms={ selectedForms }
							setSelectedForms={ setSelectedForms }
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
						dataSource={ filteredForms }
						rowKey={ ( record ) => record?.id }
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
		</>
	);
}
