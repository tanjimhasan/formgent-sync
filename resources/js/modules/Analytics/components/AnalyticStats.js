import ReactSVG from 'react-inlinesvg';
import eyeIcon from '@icon/eye.svg';
import clipboardIcon from '@icon/clipboard.svg';
import clipboardCheckIcon from '@icon/clipboard-check.svg';
import presentationIcon from '@icon/presentation.svg';
import clockIcon from '@icon/clock.svg';

export default function AnalyticStats( props ) {
	const {
		totalView,
		totalStarted,
		totalFinished,
		completionRate,
		timeToComplete,
	} = props;

	const statsData = [
		{
			icon: eyeIcon,
			label: 'Views',
			total: totalView,
		},
		{
			icon: clipboardIcon,
			label: 'Started',
			total: totalStarted,
		},
		{
			icon: clipboardCheckIcon,
			label: 'Finished',
			total: totalFinished,
		},
		{
			icon: presentationIcon,
			label: 'Completion rate',
			total: completionRate,
		},
		{
			icon: clockIcon,
			label: 'Time to complete',
			total: timeToComplete,
		},
	];

	return (
		<div className="formgent-analytics-stats">
			<div className="formgent-analytics-stats__list">
				{ statsData.map( ( stat, index ) => (
					<div
						className="formgent-analytics-stats__item"
						key={ index }
					>
						<div className="formgent-analytics-stats__icon">
							<ReactSVG src={ stat.icon } />
						</div>
						<div className="formgent-analytics-stats__content">
							<span>{ stat.label }</span>
							<strong>{ stat.total }</strong>
						</div>
					</div>
				) ) }
			</div>
		</div>
	);
}
