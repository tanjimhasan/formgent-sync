import { AntTable } from '@formgent/components';
import ReactSVG from 'react-inlinesvg';
import layerIcon from '@icon/layer.svg';

export default function QuestionDropOff( props ) {
	const { questionDropOffData } = props;

	const formTableColumns = [
		{
			title: 'Questions',
			className: 'formgent-analytics-question-drop-off__question',
			render: ( text, record ) => (
				<div className="formgent-analytics-question-drop-off__title">
					<span>
						<ReactSVG src={ layerIcon } />
					</span>
					<h2>{ record?.field_name }</h2>
				</div>
			),
			width: 330,
		},
		{
			title: 'Views',
			className: 'formgent-analytics-question-drop-off__views',
			render: ( text, record ) => <span>{ record?.views }</span>,
		},
		{
			title: 'Submissions',
			className: 'formgent-analytics-question-drop-off__submissions',
			render: ( text, record ) => (
				<span>{ record?.total_submission }</span>
			),
		},
		{
			title: 'Drop-off',
			className: 'formgent-analytics-question-drop-off__drop-off',
			render: ( text, record ) => (
				<span>{ record?.drop_off_percentage }</span>
			),
		},
	];

	return (
		<div className="formgent-analytics-question-drop-off">
			<h2>Question Drop-Off</h2>
			<div className="formgent-analytics-question-drop-off__table">
				<AntTable
					componentTokens={ {
						Table: {
							headerColor: '#6e6e6e',
							headerBg: '#d5d5d5',
							headerSplitColor: '#d5d5d5',
							cellPaddingBlock: 20,
						},
					} }
					columns={ formTableColumns }
					dataSource={ questionDropOffData }
					rowKey={ ( record ) => record?.field_name }
					scroll={ {
						x: 1300,
					} }
					pagination={ false }
				/>
			</div>
		</div>
	);
}
