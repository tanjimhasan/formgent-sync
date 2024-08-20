import { useState } from '@wordpress/element';
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';
import { __ } from '@wordpress/i18n';
import { AntRangePicker, AntButton } from '@formgent/components';
import ReactSVG from 'react-inlinesvg';
import calendarIcon from '@icon/calendar.svg';

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import weekday from 'dayjs/plugin/weekday';
import localeData from 'dayjs/plugin/localeData';
dayjs.extend( customParseFormat );
dayjs.extend( weekday );
dayjs.extend( localeData );
const dateFormat = 'YYYY-MM-DD';

export default function CompletedSubmissionsChart( props ) {
	const { data, handleChartDatepicker } = props;

	const rangePresets = [
		{
			label: 'Today',
			value: [ dayjs().startOf( 'day' ), dayjs().endOf( 'day' ) ],
		},
		{
			label: 'Yesterday',
			value: [
				dayjs().subtract( 1, 'day' ).startOf( 'day' ),
				dayjs().subtract( 1, 'day' ).endOf( 'day' ),
			],
		},
		{
			label: 'This Week',
			value: [ dayjs().startOf( 'week' ), dayjs().endOf( 'week' ) ],
		},
		{
			label: 'Last Week',
			value: [
				dayjs().subtract( 1, 'week' ).startOf( 'week' ),
				dayjs().subtract( 1, 'week' ).endOf( 'week' ),
			],
		},
		{
			label: 'This Month',
			value: [ dayjs().startOf( 'month' ), dayjs().endOf( 'month' ) ],
		},
		{
			label: 'Last Month',
			value: [
				dayjs().subtract( 1, 'month' ).startOf( 'month' ),
				dayjs().subtract( 1, 'month' ).endOf( 'month' ),
			],
		},
		{
			label: 'This Year',
			value: [ dayjs().startOf( 'year' ), dayjs().endOf( 'year' ) ],
		},
		{
			label: 'Last Year',
			value: [
				dayjs().subtract( 1, 'year' ).startOf( 'year' ),
				dayjs().subtract( 1, 'year' ).endOf( 'year' ),
			],
		},
	];

	return (
		<div className="formgent-analytics-chart">
			<div className="formgent-analytics-chart__header">
				<h2>{ __( 'Completed submission by day', 'formgent' ) }</h2>
				<div className="formgent-analytics-chart__datepicker">
					<AntRangePicker
						popupClassName="formgent-analytics-chart-datepicker"
						format={ dateFormat }
						presets={ rangePresets }
						onChange={ handleChartDatepicker }
					/>
				</div>
			</div>
			<ResponsiveContainer width="100%" height="100%">
				{ data.length > 0 ? (
					<AreaChart
						data={ data }
						margin={ {
							top: 10,
							right: 30,
							left: 0,
							bottom: 0,
						} }
					>
						<defs>
							<linearGradient
								id="colorUv"
								x1="0"
								y1="0"
								x2="0"
								y2="1"
							>
								<stop
									offset="5%"
									stopColor="#8884d8"
									stopOpacity={ 0.8 }
								/>
								<stop
									offset="95%"
									stopColor="#8884d8"
									stopOpacity={ 0 }
								/>
							</linearGradient>
						</defs>
						<CartesianGrid
							strokeDasharray="1 2"
							vertical={ false }
						/>
						<XAxis dataKey="date" axisLine={ false } />
						<YAxis axisLine={ false } />
						<Tooltip />
						<Area
							type="monotone"
							dataKey="total"
							stroke="#8884d8"
							fill="url(#colorUv)"
						/>
					</AreaChart>
				) : (
					<div className="formgent-analytics-chart__not-found">
						No data found!
					</div>
				) }
			</ResponsiveContainer>
		</div>
	);
}
