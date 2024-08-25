import { lazy } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { SummaryStyle } from './style';
import ReactSVG from 'react-inlinesvg';
import envelope from '@icon/envelope.svg';
import textIcon from '@icon/text.svg';
import alignLeft from '@icon/align-left.svg';
import hashIcon from '@icon/hash.svg';
import linkIcon from '@icon/link.svg';
import fileIcon from '@icon/file.svg';
import { __ } from '@wordpress/i18n';
const FormHeader = lazy( () => import( '@formgent/components/FormHeader' ) );

function Summary() {
	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getCommonState();
	}, [] );
	const { useParams } = CommonReducer?.routerComponents;
	const { id: formId } = useParams();

	const { FormReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getForms();
	}, [] );
	const { isFetchingSummary } = FormReducer;

	const fieldIcons = {
		email: envelope,
		text: textIcon,
		textarea: alignLeft,
		number: hashIcon,
		website: linkIcon,
		gdpr: fileIcon,
	};

	// Retrieve all summary fields for the form ID
	const summaryFields = useSelect(
		( select ) => {
			return select( 'formgent' ).getSummaryFields( formId ) || [];
		},
		[ formId ]
	);

	// Retrieve all summaries for the form at once
	const allSummaries = useSelect(
		( select ) => {
			const summaries = {};
			summaryFields.length &&
				summaryFields.forEach( ( field ) => {
					summaries[ field.field_name ] = select(
						'formgent'
					).getSummary( formId, field.field_name );
				} );
			return summaries;
		},
		[ formId, summaryFields ]
	);

	// Populate testObj with the summary values
	const testObj = {};
	const availableFields =
		summaryFields.length &&
		summaryFields.map( ( field ) => field.field_name );
	availableFields &&
		availableFields.forEach( ( field ) => {
			testObj[ field ] = allSummaries[ field ];
		} );

	console.log( testObj );

	const test = {
		email: [
			{
				value: 'example@example.com',
			},
			{
				value: 'example@example.com',
			},
		],
		'email-1': [
			{
				value: 'example@example.com',
			},
			{
				value: 'example@example.com',
			},
		],
	};

	return (
		<>
			<FormHeader resultHeader />
			<SummaryStyle>
				<div className="formgent-summary-content">
					{ summaryFields.length &&
						summaryFields.map( ( field, index ) => {
							return (
								<div
									className={ `formgent-summary-item formgent-summary-item--${ field.field_type }` }
									key={ index }
								>
									<div className="formgent-summary-item__top">
										<div className="formgent-summary-item__icon">
											<ReactSVG
												src={
													fieldIcons[
														field.field_type
													]
												}
											/>
										</div>
										<div className="formgent-summary-item__title">
											<h4>{ field.label }</h4>
											<span>{ `${ field.total_answer } out of ${ field.total_response } people answered this question` }</span>
										</div>
									</div>
									<div className="formgent-summary-item__content">
										{ test[ field.field_name ] &&
											test[ field.field_name ].map(
												( item, index ) => {
													return (
														<div key={ index }>
															{ item.value }
														</div>
													);
												}
											) }
									</div>
								</div>
							);
						} ) }
				</div>
			</SummaryStyle>
		</>
	);
}

export default function SummaryModule( props ) {
	return <Summary { ...props } />;
}
