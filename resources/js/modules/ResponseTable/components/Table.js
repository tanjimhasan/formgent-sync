import { AntSpin, AntTable } from '@formgent/components';
import fetchData from '@formgent/helper/fetchData';
import { useDispatch, useSelect } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import TableAction from './TableAction';
import TableBulkSelection from './TableBulkSelection';
import TableHeader from './TableHeader';
import { TableStyle } from './style';

export default function Table() {
	const [ editableResponseData, setEditableResponseData ] = useState( null );
	const [ selectedRowKeys, setSelectedRowKeys ] = useState( [] );
	const [ loading, setLoading ] = useState( false );
	const [ responseTableData, setResponseTableData ] = useState( [] );
	const [ tableParams, setTableParams ] = useState( {
		pagination: {
			current: 1,
			pageSize: 10,
		},
	} );

	// Execute Store Operations
	const { updateFormItemState } = useDispatch( 'formgent' );

	const { FormReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getForms();
	}, [] );

	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getCommonState();
	}, [] );
	const { useParams } = CommonReducer.routerComponents;
	const { id } = useParams();

	// Default Column Data
	const defaultColumns = [
		{
			title: 'Name',
			dataIndex: 'name',
			render: ( text, record ) => (
				<div className="formgent-form-data">
					<span>{ text }</span>
				</div>
			),
		},
		{
			title: 'Age',
			dataIndex: 'age',
			render: ( text, record ) => (
				<div className="formgent-form-data">
					<span>{ text }</span>
				</div>
			),
		},
		{
			title: 'Address',
			dataIndex: 'address',
			render: ( text, record ) => (
				<div className="formgent-form-data">
					<span>{ text }</span>
				</div>
			),
		},
		{
			title: 'Action',
			dataIndex: 'action',
			render: ( text, record ) => (
				<div className="formgent-form-action">
					<TableAction
						responseData={ record }
						setEditableResponseData={ setEditableResponseData }
					/>
				</div>
			),
		},
	];

	// Default Table Data
	const defaultData = [];
	for ( let i = 0; i < 46; i++ ) {
		defaultData.push( {
			key: i,
			name: `Edward King ${ i }`,
			age: 32 + i,
			address: `London, Park Lane no. ${ i }`,
		} );
	}

	// Table Operations
	const rowSelection = {
		selectedRowKeys,
		onChange: handleRowSelection,
	};

	function handleRowSelection( newSelectedRowKeys ) {
		setSelectedRowKeys( newSelectedRowKeys );
	}

	const handleTableChange = ( pagination ) => {
		console.log( 'response table pagination', pagination );
		setTableParams( {
			pagination,
		} );
	};

	useEffect( () => {
		setLoading( true );
		// Fetch Response Table Data
		fetchData( `admin/entries?page=4&per_page=10&s=hello&form_id=${ id }` )
			.then( ( res ) => {
				setLoading( false );
				console.log( 'responseTable Data Response:', res );
				setResponseTableData( res.entries );
				updateFormItemState( id, res );
			} )
			.catch( ( error ) => {
				setLoading( false );
				console.error( 'Failed to fetch entry data:', error );
			} );
	}, [] );

	useEffect( () => {
		const formItem = FormReducer.forms.find( ( item ) => item?.id === id );
		const pagination = formItem?.pagination || tableParams?.pagination;
		console.log(
			'responseTable FormReducer',
			formItem,
			pagination,
			responseTableData
		);

		setTableParams( {
			pagination: {
				current: pagination.current_page,
				pageSize: pagination.per_page,
			},
		} );
	}, [ responseTableData ] );

	return (
		<TableStyle>
			<AntSpin spinning={ loading }>
				{ selectedRowKeys.length !== 0 ? (
					<TableBulkSelection
						data={ defaultData }
						selectedRowKeys={ selectedRowKeys }
						setSelectedRowKeys={ setSelectedRowKeys }
					/>
				) : (
					<TableHeader />
				) }

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
					columns={ defaultColumns }
					dataSource={ defaultData }
					rowKey={ ( record ) => record.key }
					pagination={ tableParams.pagination }
					onChange={ handleTableChange }
				/>
			</AntSpin>
		</TableStyle>
	);
}
