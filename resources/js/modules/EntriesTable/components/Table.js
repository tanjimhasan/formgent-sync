import { AntSpin, AntTable } from '@formgent/components';
import fetchData from '@formgent/helper/fetchData';
import { useDispatch, useSelect } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import TableBulkSelection from './TableBulkSelection';
import { TableStyle } from './style';

export default function Table() {
	const [ selectedRowKeys, setSelectedRowKeys ] = useState( [] );
	const [ loading, setLoading ] = useState( false );
	const [ responseData, setResponseData ] = useState( [] );
	const [ tableParams, setTableParams ] = useState( {
		pagination: {
			current: 1,
			pageSize: 10,
		},
	} );

	const { storeResponseTable } = useDispatch( 'formgent' );
	const { FormReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getForms();
	}, [] );

	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getCommonState();
	}, [] );

	const { useParams } = CommonReducer.routerComponents;
	const { id } = useParams();

	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
		},
		{
			title: 'Age',
			dataIndex: 'age',
		},
		{
			title: 'Address',
			dataIndex: 'address',
		},
	];

	const data = [];
	for ( let i = 0; i < 46; i++ ) {
		data.push( {
			key: i,
			name: `Edward King ${ i }`,
			age: 32 + i,
			address: `London, Park Lane no. ${ i }`,
		} );
	}

	const rowSelection = {
		selectedRowKeys,
		onChange: handleRowSelection,
	};

	function handleRowSelection( newSelectedRowKeys ) {
		setSelectedRowKeys( newSelectedRowKeys );
	}

	const handleTableChange = ( pagination ) => {
		console.log( 'entries table pagination', pagination );
		setTableParams( {
			pagination,
		} );
	};

	useEffect( () => {
		setLoading( true );
		fetchData( `admin/entries?page=2&per_page=10&s=hello&form_id=${ id }` )
			.then( ( res ) => {
				setLoading( false );
				console.log( 'entryData:', res );
				storeResponseTable( res );
				setResponseData( res ); // Set the fetched data here
			} )
			.catch( ( error ) => {
				setLoading( false );
				console.error( 'Failed to fetch entry data:', error );
			} );
	}, [] ); // Empty dependency array means this runs once when the component mounts

	useEffect( () => {
		console.log(
			'Entries FormReducer',
			FormReducer,
			FormReducer.forms[ 0 ]
		);

		const pagination =
			FormReducer.responseTableData?.pagination ||
			tableParams?.pagination;

		setTableParams( {
			pagination: {
				current: pagination.current_page,
				pageSize: pagination.per_page,
			},
		} );
	}, [ FormReducer ] ); // Add FormReducer as the dependency

	return (
		<TableStyle>
			<AntSpin spinning={ loading }>
				{ selectedRowKeys.length !== 0 && (
					<TableBulkSelection
						data={ data }
						selectedRowKeys={ selectedRowKeys }
						setSelectedRowKeys={ setSelectedRowKeys }
					/>
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
					columns={ columns }
					dataSource={ data }
					rowKey={ ( record ) => record.key }
					pagination={ tableParams.pagination }
					onChange={ handleTableChange }
				/>
			</AntSpin>
		</TableStyle>
	);
}
