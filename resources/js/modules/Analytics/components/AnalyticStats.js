import ReactSVG from 'react-inlinesvg';
import eyeIcon from '@icon/eye.svg';
import clipboardIcon from '@icon/clipboard.svg';
import clipboardCheckIcon from '@icon/clipboard-check.svg';
import presentationIcon from '@icon/presentation.svg';
import clockIcon from '@icon/clock.svg';

export default function AnalyticStats() {
	const statsData = [
		{
			icon: 'icon',
			label: 'Views',
			total: '24',
		},
		{
			icon: 'icon',
			label: 'Started',
			total: '16',
		},
		{
			icon: 'icon',
			label: 'Finished',
			total: '12',
		},
		{
			icon: 'icon',
			label: 'Completion rate',
			total: '80%',
		},
		{
			icon: 'icon',
			label: 'Time to complete',
			total: '00:20',
		},
	];
}
