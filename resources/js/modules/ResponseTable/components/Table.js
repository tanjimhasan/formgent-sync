import { AntDropdown, AntSpin, AntTable } from '@formgent/components';
import patchData from '@formgent/helper/patchData';
import { formatDate } from '@formgent/helper/utils';
import { resolveSelect, useDispatch, useSelect } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';
import TableHeader from './TableHeader';
import { TableStyle } from './style';

// Icon
import arrowsDownIcon from '@icon/arrows-down.svg';
import arrowsUpIcon from '@icon/arrows-up.svg';
import calendarIcon from '@icon/calendar.svg';
import ellipsisVIcon from '@icon/ellipsis-v.svg';
import hideIcon from '@icon/eye-off.svg';
import gridIcon from '@icon/grid.svg';
import mailOpenIcon from '@icon/mail-open.svg';
import mailIcon from '@icon/mail.svg';
import pinIcon from '@icon/pin.svg';
import starIcon from '@icon/star.svg';
import userIcon from '@icon/user.svg';

export default function Table() {
	const [ selectedRowKeys, setSelectedRowKeys ] = useState( [] );
	const [ totalCompletedItems, setTotalCompletedItems ] = useState( null );
	const [ totalPartialItems, setTotalPartialItems ] = useState( null );
	const [ activeTab, setActiveTab ] = useState( 'completed' );
	const [ filteredData, setFilteredData ] = useState( [] );
	const [ starredItems, setStarredItems ] = useState( {} );
	const [ customColumns, setCustomColumns ] = useState( [] );
	const [ frozenColumns, setFrozenColumns ] = useState( [] );
	const [ hiddenColumns, setHiddenColumns ] = useState( [] );

	// Retrieve from the store
	const { updateCurrentResponsePage } = useDispatch( 'formgent' );

	const { SingleFormReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getSingleFormState();
	}, [] );

	const { responses, pagination, isLoading, fields } = SingleFormReducer;

	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getCommonState();
	}, [] );
	const { useParams } = CommonReducer.routerComponents;
	const { id } = useParams();

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
				console.log( 'Freeze Column', item );
				// freezeColumn(dropdownId)
				setFrozenColumns( [ ...frozenColumns, dropdownId ] );
			},
			hide: () => {
				console.log( 'Hide Column', item, dropdownId, hiddenColumns );
				setHiddenColumns( [ ...hiddenColumns, dropdownId ] );
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

	// Response Column Data
	function handleColumnChange() {
		resolveSelect( 'formgent' ).getSingleFormFields( parseInt( id ) );
	}

	// Use effect to update filtered data when the active tab changes
	useEffect( () => {
		setFilteredData( handleFilterData() );
	}, [ responses, activeTab ] );

	useEffect( () => {
		handleColumnChange();
	}, [ fields ] );

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

	function handleTableChange( pagination ) {
		console.log( 'Table Changed', responses, pagination, isLoading );
		updateCurrentResponsePage( pagination?.current );
		resolveSelect( 'formgent' ).getSingleFormResponse(
			pagination?.current,
			10,
			parseInt( id )
		);
	}

	const freezeColumn = ( columnKey ) => {
		const newFrozenColumns = [ ...frozenColumns, columnKey ];
		setFrozenColumns( newFrozenColumns );
		updateColumns( newFrozenColumns );
	};

	const updateColumns = ( frozenColumns ) => {
		const newColumns = defaultColumns.map( ( col ) => {
			if ( frozenColumns.includes( col.dataIndex ) ) {
				return { ...col, fixed: 'left' };
			}
			return col;
		} );
		setCustomColumns( newColumns );
	};

	useEffect( () => {
		const newColumns = defaultColumns.map( ( col ) => {
			return {
				...col,
				hidden: hiddenColumns.includes( col.key ),
			};
		} );

		setCustomColumns( newColumns );

		console.log( 'hide customColumns : ', hiddenColumns, newColumns );
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

		console.log( 'freeze customColumns : ', frozenColumns, newColumns );
	}, [ frozenColumns ] );

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
					onChange={ handleTableChange }
				/>
			</AntSpin>
		</TableStyle>
	);
}
