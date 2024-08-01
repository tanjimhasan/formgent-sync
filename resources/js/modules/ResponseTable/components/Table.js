import { AntDropdown, AntSpin, AntTable, AntTabs } from '@formgent/components';
import patchData from '@formgent/helper/patchData';
import postData from '@formgent/helper/postData';
import { formatDate } from '@formgent/helper/utils';
import { resolveSelect, useDispatch, useSelect } from '@wordpress/data';
import { useEffect, useRef, useState } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';
import TableHeader from './TableHeader';
import { ModalStyle, TableStyle } from './style';

// Icon
import arrowLeftIcon from '@icon/arrow-left.svg';
import arrowRightIcon from '@icon/arrow-right.svg';
import arrowsDownIcon from '@icon/arrows-down.svg';
import arrowsUpIcon from '@icon/arrows-up.svg';
import calendarIcon from '@icon/calendar.svg';
import closeIcon from '@icon/close.svg';
import downloadIcon from '@icon/download.svg';
import ellipsisVIcon from '@icon/ellipsis-v.svg';
import expandIcon from '@icon/expand.svg';
import hideIcon from '@icon/eye-off.svg';
import gridIcon from '@icon/grid.svg';
import mailOpenIcon from '@icon/mail-open.svg';
import mailIcon from '@icon/mail.svg';
import pinIcon from '@icon/pin.svg';
import plusIcon from '@icon/plus.svg';
import printIcon from '@icon/print.svg';
import starIcon from '@icon/star.svg';
import tagIcon from '@icon/tag.svg';
import transformIcon from '@icon/transform.svg';
import userIcon from '@icon/user.svg';

export default function Table() {
	const [ selectedRowKeys, setSelectedRowKeys ] = useState( [] );
	const [ totalCompletedItems, setTotalCompletedItems ] = useState( null );
	const [ totalPartialItems, setTotalPartialItems ] = useState( null );
	const [ activeTab, setActiveTab ] = useState( 'completed' );
	const [ activeModalTab, setActiveModalTab ] = useState( 'answers' );
	const [ enableSubmissionInput, setEnableSubmissionInput ] =
		useState( false );
	const [ responseModal, setResponseModal ] = useState( false );
	const [ filteredData, setFilteredData ] = useState( [] );
	const [ starredItems, setStarredItems ] = useState( {} );
	const [ customColumns, setCustomColumns ] = useState( [] );
	const [ frozenColumns, setFrozenColumns ] = useState( [] );
	const [ hiddenColumns, setHiddenColumns ] = useState( [] );
	const [ visibleColumns, setVisibleColumns ] = useState( [] );
	const [ fieldColumnHide, setFieldColumnHide ] = useState( [] );
	const [ responseFields, setResponseFields ] = useState( [] );

	// Retrieve from the store
	const { updateCurrentResponsePage } = useDispatch( 'formgent' );

	const { SingleFormReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getSingleFormState();
	}, [] );

	const { responses, pagination, isLoading, fields, selected_fields } =
		SingleFormReducer;

	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getCommonState();
	}, [] );
	const { useParams } = CommonReducer.routerComponents;
	const { id } = useParams();

	// Modal Tab Items
	const modalTabItems = [
		{
			key: 'answers',
			label: 'Answers',
		},
		{
			key: 'submission',
			label: 'Submission Info',
		},
	];

	// handleSelectItems
	function handleSelectItems( { key } ) {
		const selectFunctions = {
			all: () => responses,
			read: () => responses?.filter( ( item ) => item.is_read === '1' ),
			unread: () => responses?.filter( ( item ) => item.is_read === '0' ),
			starred: () =>
				responses?.filter( ( item ) => item.is_starred === '1' ),
			unstarred: () =>
				responses?.filter( ( item ) => item.is_starred === '0' ),
		};

		// Get the sorted data based on the key
		const selectedData = selectFunctions[ key ]
			? selectFunctions[ key ]()
			: responses;
		setFilteredData( selectedData );
	}

	// handleSortby
	function handleSortby( item, dropdownId ) {
		const { key } = item;
		const sortFunctions = {
			ascending: () =>
				[ ...responses ].sort(
					( a, b ) =>
						new Date( a[ dropdownId ] ) -
						new Date( b[ dropdownId ] )
				),
			descending: () =>
				[ ...responses ].sort(
					( a, b ) =>
						new Date( b[ dropdownId ] ) -
						new Date( a[ dropdownId ] )
				),
			freeze: () => {
				setFrozenColumns( ( prevFrozenColumns ) => {
					return [ ...prevFrozenColumns, dropdownId ];
				} );
			},
			hide: () => {
				setHiddenColumns( ( prevHiddenColumns ) => {
					return [ ...prevHiddenColumns, dropdownId ];
				} );
			},
		};

		// Get the sorted data based on the key
		if ( key === 'freeze' || key === 'hide' ) {
			sortFunctions[ key ]();
		} else {
			const sortedData = sortFunctions[ key ]
				? sortFunctions[ key ]()
				: filteredData;
			setFilteredData( sortedData );
		}
	}

	// handleStarred
	async function handleStarred( id, isStarredStatus ) {
		const reverseStarredStatus = isStarredStatus ? 0 : 1;
		const updateStarredStatus = await patchData(
			`admin/responses/${ id }/starred/`,
			{ is_starred: reverseStarredStatus }
		);
		if ( updateStarredStatus ) {
			setStarredItems( ( prevStarredItems ) => ( {
				...prevStarredItems,
				[ id ]: reverseStarredStatus,
			} ) );
		}
	}

	// handleResponseModal
	function handleResponseModal( id ) {
		console.log( 'handleResponseModal', id );
		setResponseModal( id );
	}

	// Date Format
	const dateFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};

	// Filter data based on active tab
	function handleFilterData() {
		const completedItems = responses?.filter(
			( item ) => item.is_completed === '1'
		);
		const partialItems = responses?.filter(
			( item ) => item.is_completed === '0'
		);

		setTotalCompletedItems( completedItems?.length || 0 );
		setTotalPartialItems( partialItems?.length || 0 );

		console.log(
			'handleFilterData',
			responses,
			completedItems,
			partialItems
		);

		if ( activeTab === 'completed' ) {
			return completedItems;
		} else if ( activeTab === 'partial' ) {
			return partialItems;
		}
		return [];
	}

	// Select Items Data
	const selectItems = [
		{
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="14" height="14" src={ gridIcon } />
					All
				</span>
			),
			key: 'all',
		},
		{
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="14" height="14" src={ mailOpenIcon } />
					Read
				</span>
			),
			key: 'read',
		},
		{
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="14" height="14" src={ mailIcon } />
					Unread
				</span>
			),
			key: 'unread',
		},
		{
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="14" height="14" src={ starIcon } />
					Starred
				</span>
			),
			key: 'starred',
		},
		{
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="14" height="14" src={ starIcon } />
					Unstarred
				</span>
			),
			key: 'unstarred',
		},
	];

	// Sort Items Data
	const sortItems = [
		{
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="14" height="14" src={ arrowsUpIcon } />
					Ascending
				</span>
			),
			key: 'ascending',
		},
		{
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="14" height="14" src={ arrowsDownIcon } />
					Descending
				</span>
			),
			key: 'descending',
		},
		{
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="14" height="14" src={ pinIcon } />
					Freeze Column
				</span>
			),
			key: 'freeze',
		},
		{
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="14" height="14" src={ hideIcon } />
					Hide Column
				</span>
			),
			key: 'hide',
		},
	];

	// Default Column Data
	const defaultColumns = [
		{
			key: 'id',
			dataIndex: 'id',
			title: () => (
				<div className="formgent-column-action formgent-column-action__id">
					<AntDropdown
						menu={ {
							items: selectItems,
							onClick: handleSelectItems,
						} }
						trigger={ [ 'click' ] }
						placement="bottomLeft"
						overlayStyle={ { minWidth: '240px' } }
					>
						<a onClick={ ( e ) => e.preventDefault() }>
							<ReactSVG
								width="14"
								height="14"
								src={ ellipsisVIcon }
							/>
						</a>
					</AntDropdown>
				</div>
			),
			render: ( text, record ) => {
				const isStarred =
					starredItems[ record.id ] !== undefined
						? starredItems[ record.id ]
						: record.is_starred === '1';
				return (
					<div className="formgent-form-table-item-wrap">
						{ record.id }
						<ReactSVG
							width="14"
							height="14"
							src={ starIcon }
							className={ isStarred ? 'starred' : '' }
							onClick={ () =>
								handleStarred( record.id, isStarred )
							}
						/>
					</div>
				);
			},
		},
		{
			key: 'created_at',
			dataIndex: 'created_at',
			title: () => (
				<div className="formgent-column-action">
					<span className="formgent-column-action__title">
						<ReactSVG width="14" height="14" src={ calendarIcon } />
						Submission Date
					</span>
					<AntDropdown
						menu={ {
							items: sortItems,
							onClick: ( item ) =>
								handleSortby( item, 'created_at' ),
						} }
						trigger={ [ 'click' ] }
						placement="bottomRight"
						overlayStyle={ { minWidth: '240px' } }
					>
						<a onClick={ ( e ) => e.preventDefault() }>
							<ReactSVG
								width="14"
								height="14"
								src={ ellipsisVIcon }
							/>
						</a>
					</AntDropdown>
				</div>
			),
			render: ( text, record ) => {
				return (
					<div className="formgent-form-date">
						{ formatDate(
							'en-US',
							record.created_at,
							dateFormatOptions
						) }
						<button
							className="response-table__modal__open"
							onClick={ () => {
								handleResponseModal( record.id );
							} }
						>
							<ReactSVG
								width="12"
								height="12"
								src={ expandIcon }
							/>
							View
						</button>
					</div>
				);
			},
		},
		{
			key: 'created_by',
			dataIndex: 'created_by',
			title: () => (
				<div className="formgent-column-action">
					<span className="formgent-column-action__title">
						<ReactSVG width="14" height="14" src={ userIcon } />
						Submitted By
					</span>
					<AntDropdown
						menu={ {
							items: sortItems,
							onClick: ( item ) =>
								handleSortby( item, 'created_by' ),
						} }
						trigger={ [ 'click' ] }
						placement="bottomRight"
						overlayStyle={ { minWidth: '240px' } }
					>
						<a onClick={ ( e ) => e.preventDefault() }>
							<ReactSVG
								width="14"
								height="14"
								src={ ellipsisVIcon }
							/>
						</a>
					</AntDropdown>
				</div>
			),
		},
		{
			key: 'shortText',
			dataIndex: 'shortText',
			title: () => (
				<div className="formgent-column-action">
					<span className="formgent-column-action__title">
						<ReactSVG width="14" height="14" src={ userIcon } />
						Short Text
					</span>
					<AntDropdown
						menu={ {
							items: sortItems,
							onClick: ( item ) =>
								handleSortby( item, 'shortText' ),
						} }
						trigger={ [ 'click' ] }
						placement="bottomRight"
						overlayStyle={ { minWidth: '240px' } }
					>
						<a onClick={ ( e ) => e.preventDefault() }>
							<ReactSVG
								width="14"
								height="14"
								src={ ellipsisVIcon }
							/>
						</a>
					</AntDropdown>
				</div>
			),
		},
		{
			key: 'longText',
			dataIndex: 'longText',
			title: () => (
				<div className="formgent-column-action">
					<span className="formgent-column-action__title">
						<ReactSVG width="14" height="14" src={ userIcon } />
						Long Text
					</span>
					<AntDropdown
						menu={ {
							items: sortItems,
							onClick: ( item ) =>
								handleSortby( item, 'longText' ),
						} }
						trigger={ [ 'click' ] }
						placement="bottomRight"
						overlayStyle={ { minWidth: '240px' } }
					>
						<a onClick={ ( e ) => e.preventDefault() }>
							<ReactSVG
								width="14"
								height="14"
								src={ ellipsisVIcon }
							/>
						</a>
					</AntDropdown>
				</div>
			),
		},
		{
			key: 'multiple',
			dataIndex: 'multiple',
			title: () => (
				<div className="formgent-column-action">
					<span className="formgent-column-action__title">
						<ReactSVG width="14" height="14" src={ userIcon } />
						Multiple Select
					</span>
					<AntDropdown
						menu={ {
							items: sortItems,
							onClick: ( item ) =>
								handleSortby( item, 'multiple' ),
						} }
						trigger={ [ 'click' ] }
						placement="bottomRight"
						overlayStyle={ { minWidth: '240px' } }
					>
						<a onClick={ ( e ) => e.preventDefault() }>
							<ReactSVG
								width="14"
								height="14"
								src={ ellipsisVIcon }
							/>
						</a>
					</AntDropdown>
				</div>
			),
		},
		{
			key: 'dropdown',
			dataIndex: 'dropdown',
			title: () => (
				<div className="formgent-column-action">
					<span className="formgent-column-action__title">
						<ReactSVG width="14" height="14" src={ userIcon } />
						Dropdown
					</span>
					<AntDropdown
						menu={ {
							items: sortItems,
							onClick: ( item ) =>
								handleSortby( item, 'dropdown' ),
						} }
						trigger={ [ 'click' ] }
						placement="bottomRight"
						overlayStyle={ { minWidth: '240px' } }
					>
						<a onClick={ ( e ) => e.preventDefault() }>
							<ReactSVG
								width="14"
								height="14"
								src={ ellipsisVIcon }
							/>
						</a>
					</AntDropdown>
				</div>
			),
		},
	];

	// Table Operations
	const rowSelection = {
		selectedRowKeys,
		onChange: handleRowSelection,
	};

	function handleRowSelection( newSelectedRowKeys ) {
		setSelectedRowKeys( newSelectedRowKeys );
	}

	function handleTableChange() {
		console.log( 'Table Changed', responses, pagination, isLoading );
		updateCurrentResponsePage( pagination?.current );
		resolveSelect( 'formgent' ).getSingleFormResponse(
			pagination?.current,
			10,
			parseInt( id )
		);
	}

	// Handle Modal Tab Change
	function handleModalTabChange( key ) {
		setActiveModalTab( key );
	}

	// Use effect to update filtered data when the active tab changes
	useEffect( () => {
		setFilteredData( handleFilterData() );
	}, [ responses, activeTab ] );

	useEffect( () => {
		const newColumns = customColumns.map( ( col ) => {
			return {
				...col,
				hidden: hiddenColumns.includes( col.key ),
			};
		} );

		setCustomColumns( newColumns );
	}, [ hiddenColumns ] );

	useEffect( () => {
		const newColumns = defaultColumns.map( ( col ) => {
			return {
				...col,
				fixed: frozenColumns.includes( col.dataIndex )
					? 'left'
					: col.fixed,
			};
		} );

		setCustomColumns( newColumns );
	}, [ frozenColumns ] );

	useEffect( () => {
		setResponseFields( fields );
		resolveSelect( 'formgent' ).getSingleFormFields( parseInt( id ) );
	}, [ fields ] );

	// Generate Column
	const generateCustomColumns = ( selectedFields, responses, fields ) => {
		return ( selectedFields || [] ).map( ( fieldId ) => {
			const field = fields?.find( ( f ) => f.id === fieldId );
			const title = field ? field.label : `Field ${ fieldId }`;

			return {
				key: fieldId,
				dataIndex: fieldId,
				title: () => (
					<div className="formgent-column-action">
						<span className="formgent-column-action__title">
							{ title }
						</span>
						<AntDropdown
							menu={ {
								items: sortItems,
								onClick: ( item ) =>
									handleSortby( item, fieldId ),
							} }
							trigger={ [ 'click' ] }
							placement="bottomRight"
							overlayStyle={ { minWidth: '240px' } }
						>
							<a onClick={ ( e ) => e.preventDefault() }>
								<ReactSVG
									width="14"
									height="14"
									src={ ellipsisVIcon }
								/>
							</a>
						</AntDropdown>
					</div>
				),
				render: ( text, record ) => {
					const response = responses.find(
						( r ) => r.id === record.id
					);
					if ( response ) {
						const answer = response.answers?.find(
							( a ) => a.field_id === fieldId
						);
						if ( answer ) {
							return <div>{ answer.value }</div>;
						}
					}
					return <div>No data</div>;
				},
			};
		} );
	};

	const isInitialRender = useRef( true );

	// Handle Show/Hide Column
	async function handleColumn() {
		if ( ! fieldColumnHide ) {
			const updateColumn = await postData( 'admin/responses/fields', {
				form_id: id,
				field_ids: visibleColumns,
			} );

			if ( updateColumn ) {
				resolveSelect( 'formgent' ).getSingleFormFields(
					parseInt( id ),
					visibleColumns
				);
			}
		} else {
			setHiddenColumns( [ ...hiddenColumns, fieldColumnHide ] );
		}
	}

	useEffect( () => {
		setFilteredData( responses );
		const generatedColumns = generateCustomColumns(
			selected_fields,
			responses,
			fields
		);
		const allColumns = [ ...defaultColumns, ...generatedColumns ];

		setCustomColumns( allColumns );
	}, [ selected_fields, responses ] );

	useEffect( () => {
		setVisibleColumns( selected_fields );
	}, [ selected_fields ] );

	useEffect( () => {
		if ( isInitialRender.current ) {
			isInitialRender.current = false;
		} else {
			handleColumn();
		}
	}, [ visibleColumns ] );

	useEffect( () => {
		handleTableChange();
		setCustomColumns( defaultColumns );
	}, [] );

	return (
		<TableStyle>
			<AntSpin spinning={ isLoading }>
				<TableHeader
					id={ id }
					responses={ responses }
					selectedRowKeys={ selectedRowKeys }
					setSelectedRowKeys={ setSelectedRowKeys }
					totalCompletedItems={ totalCompletedItems }
					totalPartialItems={ totalPartialItems }
					activeTab={ activeTab }
					setActiveTab={ setActiveTab }
					visibleColumns={ visibleColumns }
					setVisibleColumns={ setVisibleColumns }
					responseFields={ responseFields }
					setResponseFields={ setResponseFields }
					setFieldColumnHide={ setFieldColumnHide }
				/>

				<AntTable
					componentTokens={ {
						Table: {
							headerColor: '#6e6e6e',
							headerBg: '#d5d5d5',
							headerSplitColor: '#ffffff',
							cellPaddingBlock: 20,
						},
					} }
					rowSelection={ rowSelection }
					columns={ customColumns }
					dataSource={ filteredData }
					rowKey={ ( record ) => record.id }
					pagination={ {
						current: pagination?.current_page,
						pageSize: 10,
						total: pagination?.total_items,
						showTotal: ( total, range ) =>
							`${ range[ 0 ] }-${ range[ 1 ] } of ${ total } items`,
					} }
					className="formgent-result-table"
					onChange={ handleTableChange }
				/>
			</AntSpin>
			{ responseModal && (
				<ModalStyle className="response-table__modal">
					<div className="response-table__modal__header">
						<div className="response-table__modal__header__response">
							<div className="response-table__modal__header__response__btns">
								<button className="response-table__modal__header__response__btn">
									<ReactSVG
										width="14"
										height="14"
										src={ arrowLeftIcon }
									/>
								</button>
								<button className="response-table__modal__header__response__btn">
									<ReactSVG
										width="14"
										height="14"
										src={ arrowRightIcon }
									/>
								</button>
							</div>
							<span className="">1 of 4 Responses</span>
						</div>
						<div className="response-table__modal__header__action">
							<button className="response-table__modal__header__action__btn">
								<ReactSVG
									width="14"
									height="14"
									src={ downloadIcon }
								/>
							</button>
							<div className="response-table__modal__header__dropdown">
								<AntDropdown
									menu={ {
										items: selectItems,
										onClick: handleSelectItems,
									} }
									trigger={ [ 'click' ] }
									placement="bottomLeft"
									overlayStyle={ { minWidth: '240px' } }
								>
									<button
										className="response-table__modal__header__action__btn"
										onClick={ ( e ) => e.preventDefault() }
									>
										<ReactSVG
											width="14"
											height="14"
											src={ ellipsisVIcon }
										/>
									</button>
								</AntDropdown>
							</div>
							<button
								className="response-table__modal__close"
								onClick={ () => {
									setResponseModal( false );
								} }
							>
								<ReactSVG
									width="14"
									height="14"
									src={ closeIcon }
								/>
							</button>
						</div>
					</div>
					<div className="response-table__modal__content">
						<div className="response-table__modal__tab">
							<AntTabs
								activeKey={ activeModalTab }
								onChange={ handleModalTabChange }
								items={ modalTabItems }
							/>
							{ activeModalTab === 'answers' && (
								<div className="response-table__modal__tab__content">
									<div className="response-table__modal__tab__item">
										<div className="response-table__modal__tab__item__icon">
											<ReactSVG
												width="14"
												height="14"
												src={ tagIcon }
											/>
										</div>
										<h5 className="response-table__modal__tab__item__title">
											Tags:
										</h5>
										<ul className="response-table__modal__tab__tag">
											<li className="response-table__modal__tab__tag__item">
												<span className="response-table__modal__tab__tag__item__single">
													Tag one
												</span>
												<button className="response-table__modal__tab__tag__item__single__close">
													x
												</button>
											</li>
											<li className="response-table__modal__tab__tag__item">
												<span className="response-table__modal__tab__tag__item__single">
													Tag two
												</span>
												<button className="response-table__modal__tab__tag__item__single__close">
													<ReactSVG
														width="14"
														height="14"
														src={ closeIcon }
													/>
												</button>
											</li>
										</ul>

										<button className="response-table__modal__tab__item__add">
											+ Add tag
										</button>
									</div>
									<div className="response-table__modal__tab__wrapper">
										<div className="response-table__modal__tab__item">
											<div className="response-table__modal__tab__item__icon">
												<ReactSVG
													width="14"
													height="14"
													src={ transformIcon }
												/>
											</div>
											<div className="response-table__modal__tab__item__content">
												<h5 className="response-table__modal__tab__item__title">
													Show question title here
												</h5>
												<p className="response-table__modal__tab__item__desc">
													Lorem ipsum dolor sit amet
													consectetur. Suspendisse
													morbi mattis gravida aliquet
													nunc suscipit aliquam.
													Turpis sed id elementum
													auctor.
												</p>
											</div>
										</div>
										<div className="response-table__modal__tab__item">
											<div className="response-table__modal__tab__item__icon">
												<ReactSVG
													width="14"
													height="14"
													src={ printIcon }
												/>
											</div>
											<div className="response-table__modal__tab__item__content">
												<h5 className="response-table__modal__tab__item__title">
													Select multiple answers
												</h5>
												<div className="response-table__modal__tab__item__btns">
													<button className="response-table__modal__tab__item__btn">
														Option 1
													</button>
													<button className="response-table__modal__tab__item__btn">
														Option 2
													</button>
												</div>
											</div>
										</div>
										<div className="response-table__modal__tab__item">
											<div className="response-table__modal__tab__item__icon">
												<ReactSVG
													width="14"
													height="14"
													src={ printIcon }
												/>
											</div>
											<div className="response-table__modal__tab__item__content">
												<h5 className="response-table__modal__tab__item__title">
													Select your answers
												</h5>
												<div className="response-table__modal__tab__item__btns">
													<button className="response-table__modal__tab__item__btn">
														Yes
													</button>
												</div>
											</div>
										</div>
									</div>
									<div className="response-table__modal__tab__submission">
										<div className="response-table__modal__tab__submission__header">
											<h4 className="response-table__modal__tab__submission__title">
												Submission Note
											</h4>
											<button
												className="response-table__modal__tab__submission__add"
												onClick={ () => {
													setEnableSubmissionInput(
														! enableSubmissionInput
													);
												} }
											>
												<ReactSVG
													width="14"
													height="14"
													src={ plusIcon }
												/>
												Add Note
											</button>
										</div>
										{ enableSubmissionInput ? (
											<div className="response-table__modal__tab__submission__note">
												<textarea
													placeholder="You can create your note here..."
													className="response-table__modal__tab__submission__input"
												/>
												<button className="response-table__modal__tab__submission__save">
													Save note
												</button>
											</div>
										) : (
											<div className="response-table__modal__tab__submission__content">
												<div className="response-table__modal__tab__submission__content__single">
													<span className="response-table__modal__tab__submission__content__published-date">
														Sat, Jun 22, 1:18 PM
													</span>
													<p className="response-table__modal__tab__submission__content__text">
														Lorem ipsum dolor sit
														amet consectetur.
														Suspendisse morbi mattis
														gravida aliquet nunc
														suscipit aliquam. Turpis
														sed id elementum auctor.
													</p>
												</div>
												<div className="response-table__modal__tab__submission__content__single">
													<span className="response-table__modal__tab__submission__content__published-date">
														Sat, Jun 22, 1:18 PM
													</span>
													<p className="response-table__modal__tab__submission__content__text">
														Lorem ipsum dolor sit
														amet consectetur.
														Suspendisse morbi mattis
														gravida aliquet nunc
														suscipit aliquam. Turpis
														sed id elementum auctor.
													</p>
												</div>
											</div>
										) }
									</div>
								</div>
							) }
							{ activeModalTab === 'submission' && (
								<div className="response-table__modal__tab__content">
									<div className="response-table__modal__tab__info">
										<div className="response-table__modal__tab__info__single">
											<span className="response-table__modal__tab__info__title">
												Submission Date
											</span>
											<span className="response-table__modal__tab__info__value">
												Jun 22, 2024 12:38 PM
											</span>
										</div>
										<div className="response-table__modal__tab__info__single">
											<span className="response-table__modal__tab__info__title">
												Username
											</span>
											<span className="response-table__modal__tab__info__value">
												Ahmed Hannan
											</span>
										</div>
										<div className="response-table__modal__tab__info__single">
											<span className="response-table__modal__tab__info__title">
												User Email
											</span>
											<span className="response-table__modal__tab__info__value">
												abc@test.com
											</span>
										</div>
										<div className="response-table__modal__tab__info__single">
											<span className="response-table__modal__tab__info__title">
												Status
											</span>
											<span className="response-table__modal__tab__info__value">
												<span className="response-table__modal__tab__info__tag completed">
													Completed
												</span>
											</span>
										</div>
										<div className="response-table__modal__tab__info__single">
											<span className="response-table__modal__tab__info__title">
												Browser
											</span>
											<span className="response-table__modal__tab__info__value">
												Chrome 125.0.0.0
											</span>
										</div>
										<div className="response-table__modal__tab__info__single">
											<span className="response-table__modal__tab__info__title">
												Operating System
											</span>
											<span className="response-table__modal__tab__info__value">
												MAC OS10.15.17
											</span>
										</div>
									</div>
								</div>
							) }
						</div>
					</div>
				</ModalStyle>
			) }
		</TableStyle>
	);
}
