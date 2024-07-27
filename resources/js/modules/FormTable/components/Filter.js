import { useState } from '@wordpress/element';
import { AntSelect } from '@formgent/components';
import { FilterStyle } from './style';
import { SearchOutlined } from '@ant-design/icons';
import { Input, Dropdown, Space, Radio } from 'antd';
import ReactSVG from 'react-inlinesvg';
import sliderIcon from '@icon/sliders.svg';
import filterLines from '@icon/filter-lines.svg';

export default function Filter() {
	const options = [
		{ value: 'all', label: 'All forms' },
		{ value: 'forms', label: 'Forms' },
		{ value: 'quizzes', label: 'Quizzes' },
		{ value: 'payment', label: 'Payment' },
	];

	const handleFormTypes = ( value ) => {
		console.log( `Selected: ${ value }` );
	};

	const [ filteredItems, setFilteredItems ] = useState( 'all' );
	const handleFilteredItems = ( e ) => {
		setFilteredItems( e.target.value );
	};

	const sortItems = [
		{
			key: 'date_created',
			label: <span>Date Created</span>,
		},
		{
			key: 'last_modified',
			label: <span>Last Modified</span>,
		},
		{
			key: 'alphabetical',
			label: <span>Alphabetical</span>,
		},
		{
			key: 'last_submission',
			label: <span>Last Submission</span>,
		},
		{
			key: 'unread',
			label: <span>Unread</span>,
		},
	];

	return (
		<FilterStyle className="formgent-form-filter">
			<div className="formgent-form-filter__left">
				<AntSelect
					onChange={ handleFormTypes }
					placeholder="Select an option"
					options={ options }
					defaultValue="all"
				></AntSelect>
			</div>
			<div className="formgent-form-filter__right">
				<div className="formgent-form-filter__search">
					<Input
						placeholder="default size"
						prefix={ <SearchOutlined /> }
					/>
				</div>
				<div className="formgent-form-filter__by-time">
					<Dropdown
						trigger={ [ 'click' ] }
						overlayClassName="formgent-form-filter__by-time__options"
						dropdownRender={ () => (
							<Radio.Group
								onChange={ handleFilteredItems }
								value={ filteredItems }
							>
								<Space direction="vertical">
									<Radio value="all">All</Radio>
									<Radio value="today">Today</Radio>
									<Radio value="yesterday">Yesterday</Radio>
									<Radio value="last_week">Last Week</Radio>
									<Radio value="last_month">Last Month</Radio>
									<Radio value="custom">
										Custom
										{ filteredItems === 'custom' ? (
											<Input
												style={ {
													width: 100,
													marginLeft: 10,
												} }
											/>
										) : null }
									</Radio>
								</Space>
							</Radio.Group>
						) }
					>
						<span className="formgent-form-filter__by-time__trigger">
							<ReactSVG src={ sliderIcon } /> Filter
						</span>
					</Dropdown>
				</div>
				<div className="formgent-form-filter__sorting">
					<Dropdown
						menu={ {
							items: sortItems,
							selectable: true,
							defaultSelectedKeys: [ 'date_created' ],
						} }
						trigger={ [ 'click' ] }
					>
						<span className="formgent-form-filter__sorting__trigger">
							<ReactSVG src={ filterLines } />
						</span>
					</Dropdown>
				</div>
			</div>
		</FilterStyle>
	);
}
