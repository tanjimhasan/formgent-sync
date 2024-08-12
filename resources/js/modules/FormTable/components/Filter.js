import { useState, useEffect } from '@wordpress/element';
import { useDispatch, resolveSelect } from '@wordpress/data';
import { AntSelect } from '@formgent/components';
import { FilterStyle } from './style';
import { Input, Dropdown, DatePicker } from 'antd';
import ReactSVG from 'react-inlinesvg';
import sliderIcon from '@icon/sliders.svg';
import filterLines from '@icon/filter-lines.svg';
import searchIcon from '@icon/search.svg';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import checkThin from '@icon/check-thin.svg';
import chevronDown from '@icon/chevron-down.svg';
import { useDebounce } from '@formgent/hooks/useDebounce';
dayjs.extend( customParseFormat );
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';

export default function Filter( { pagination } ) {
	const [ toggleTimepicker, setToggleTimepicker ] = useState( false );
	const [ formType, setFormType ] = useState( 'all' );
	const [ defaultSorting, setDefaultSorting ] = useState( 'date_created' );
	const [ formDateType, setFormDateType ] = useState( 'all' );
	const [ searchInput, setSearchInput ] = useState( '' );
	const debouncedSearchText = useDebounce( searchInput, 250 );

	const {
		updateFormSortBy,
		updateFormDateType,
		updateFormDateFrom,
		updateFormDateTo,
		updateFormSearchQuery,
		updateFormsType,
	} = useDispatch( 'formgent' );

	//handle filtered items by time
	const handleFilteredItems = ( e ) => {
		e.target.value === 'date_frame'
			? setToggleTimepicker( true )
			: setToggleTimepicker( false );
		handleFormDateType( e.target.value );
	};

	const formTypes = [
		{
			value: 'all',
			label: 'All Forms',
		},
		{
			value: 'general',
			label: 'General',
		},
	];

	function handleCheckedIcon( key ) {
		const checkedIcon =
			defaultSorting === key ? <ReactSVG src={ checkThin } /> : null;
		return checkedIcon;
	}

	const sortItems = [
		{
			key: 'date_created',
			label: (
				<span>
					Date Created { handleCheckedIcon( 'date_created' ) }
				</span>
			),
		},
		{
			key: 'last_modified',
			label: (
				<span>
					Last Modified { handleCheckedIcon( 'last_modified' ) }
				</span>
			),
		},
		{
			key: 'alphabetical',
			label: (
				<span>
					Alphabetical { handleCheckedIcon( 'alphabetical' ) }
				</span>
			),
		},
		{
			key: 'last_submission',
			label: (
				<span>
					Last Submission { handleCheckedIcon( 'last_submission' ) }
				</span>
			),
		},
		{
			key: 'unread',
			label: <span>Unread { handleCheckedIcon( 'unread' ) }</span>,
		},
		{
			key: 'publish',
			label: <span>Active { handleCheckedIcon( 'publish' ) }</span>,
		},
		{
			key: 'draft',
			label: <span>Inactive { handleCheckedIcon( 'draft' ) }</span>,
		},
	];

	const formDateSorting = [
		{
			key: 'all',
			label: <span>All</span>,
		},
		{
			key: 'today',
			label: <span>Today</span>,
		},
		{
			key: 'yesterday',
			label: <span>Yesterday</span>,
		},
		{
			key: 'last_week',
			label: <span>Last Week</span>,
		},
		{
			key: 'last_month',
			label: <span>Last Month</span>,
		},
		{
			key: 'date_frame',
			label: <span>Custom</span>,
		},
	];

	const handleFormTypes = ( type ) => {
		setFormType( type );
		updateFormsType( type );
		resolveSelect( 'formgent' ).getForms(
			pagination.current_page,
			pagination.per_page,
			Date.now(),
			defaultSorting,
			formDateType,
			null,
			null,
			'',
			type
		);
	};

	const handleSearchQuery = ( e ) => {
		const query = e.target.value;
		setSearchInput( query );
	};
	useEffect( () => {
		updateFormSearchQuery( debouncedSearchText );
		resolveSelect( 'formgent' ).getForms(
			pagination.current_page,
			pagination.per_page,
			Date.now(),
			defaultSorting,
			formDateType,
			null,
			null,
			debouncedSearchText
		);
	}, [ debouncedSearchText ] );

	const handleFormSorting = ( { key } ) => {
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

	function handleDateRange( dates, dateStrings ) {
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

	return (
		<FilterStyle className="formgent-form-filter">
			<div className="formgent-form-filter__left">
				<AntSelect
					onChange={ handleFormTypes }
					placeholder="Select an option"
					options={ formTypes }
					defaultValue="all"
					popupClassName="formgent-form-filter__form-type-options"
					menuItemSelectedIcon={ <ReactSVG src={ checkThin } /> }
					suffixIcon={ <ReactSVG src={ chevronDown } /> }
				></AntSelect>
			</div>
			<div className="formgent-form-filter__right">
				<div className="formgent-form-filter__search">
					<Input
						placeholder="Search"
						prefix={ <ReactSVG src={ searchIcon } /> }
						onChange={ handleSearchQuery }
					/>
				</div>
				<div className="formgent-form-filter__by-time">
					<Dropdown
						trigger={ [ 'click' ] }
						overlayClassName="formgent-form-filter__by-time__options"
						dropdownRender={ () => (
							<>
								<div className="formgent-form-filter-by-time">
									{ formDateSorting.map( ( item, index ) => {
										return (
											<div
												className="formgent-select-radio"
												key={ index }
											>
												<input
													type="radio"
													name="filter-by-time"
													id={ `formgent-select-option-${ item.key }` }
													onChange={
														handleFilteredItems
													}
													value={ item.key }
												/>
												<label
													htmlFor={ `formgent-select-option-${ item.key }` }
													className="formgent-single-select__option"
												>
													{ item.label }
												</label>
											</div>
										);
									} ) }
								</div>
								{ toggleTimepicker && (
									<div className="formgent-form-filter-by-date-range">
										<div className="formgent-form-filter-select-timeframe">
											<span>Select a Timeframe</span>
											<div className="formgent-form-filter-select-dates">
												<RangePicker
													defaultValue={ [
														dayjs(
															'2024-08-01',
															dateFormat
														),
														dayjs(
															'2015-09-01',
															dateFormat
														),
													] }
													format={ dateFormat }
													onChange={ handleDateRange }
												/>
											</div>
										</div>
									</div>
								) }
							</>
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
							onClick: handleFormSorting,
						} }
						trigger={ [ 'click' ] }
						overlayClassName="formgent-form-filter__sorting-dropdown"
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
