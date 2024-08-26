import { lazy, useEffect } from '@wordpress/element';
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
	const { isFetchingSummary, summary } = FormReducer;

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

	const availableFields = summaryFields.length
		? summaryFields.map( ( item ) => item.field_name )
		: [];

	const summaries = useSelect(
		( select ) => {
			const getSummarySelector = select( 'formgent' ).getSummary;
			return availableFields.reduce( ( acc, field ) => {
				acc = getSummarySelector( formId, field ) || [];
				return acc;
			}, {} );
		},
		[ availableFields, formId ]
	);

	function handleInfiniteScroll( e, fieldName ) {}

	return (
		<>
			<FormHeader resultHeader />
			<SummaryStyle>
				<div className="formgent-summary-content">
					{ summaryFields.length &&
						summaryFields.map( ( field, index ) => {
							const fieldName = field.field_name;
							return (
								field.field_type !== 'gdpr' && (
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
										<div
											className="formgent-summary-item__content"
											data-field={ field.field_name }
											onScroll={ ( e ) => {
												handleInfiniteScroll(
													e,
													field.field_name
												);
											} }
										>
											{ summaries[ fieldName ]?.length >
											0 ? (
												summaries[ fieldName ].map(
													( item ) => (
														<div
															className="formgent-summary-item__content__single"
															key={ item.id }
														>
															{ item.value }
														</div>
													)
												)
											) : (
												<div className="formgent-summary-item__content__not-found">
													No response!
												</div>
											) }
										</div>
									</div>
								)
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
