import { useState } from '@wordpress/elements';
import { AntSelect } from '@formgent/components';
import { FilterStyle } from './style';
import { SearchOutlined } from '@ant-design/icons';
import { Input, Dropdown, Space, Radio } from 'antd';
import ReactSVG from 'react-inlinesvg';
import sliderIcon from '@icon/sliders.svg';

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
										{ value === 'custom' ? (
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
						<a onClick={ ( e ) => e.preventDefault() }>
							<Space>
								Filter <ReactSVG src={ sliderIcon } />
							</Space>
						</a>
					</Dropdown>
				</div>
			</div>
		</FilterStyle>
	);
}
