import { convertToTitleCase } from '@formgent/helper/utils';
import ReactSVG from 'react-inlinesvg';
import envelope from '@icon/envelope.svg';
import textIcon from '@icon/text.svg';
import alignLeft from '@icon/align-left.svg';
import hashIcon from '@icon/hash.svg';
import linkIcon from '@icon/link.svg';
import fileIcon from '@icon/file.svg';
import checkSquare from '@icon/check-square.svg';
import userIcon from '@icon/user.svg';
import dropdownIcon from '@icon/chevron-down-circle.svg';
import markerIcon from '@icon/marker-pin.svg';
import radioIcon from '@icon/radios.svg';
import inputIcon from '@icon/text-input-left.svg';

export default function FieldContent( props ) {
	const { summaryFields, summaries, handleOnScroll } = props;

	const fieldIcons = {
		email: envelope,
		text: textIcon,
		textarea: alignLeft,
		number: hashIcon,
		website: linkIcon,
		gdpr: fileIcon,
		address: markerIcon,
		name: userIcon,
		dropdown: dropdownIcon,
		'single-choice': radioIcon,
		'multiple-choice': checkSquare,
		'input-masking': inputIcon,
	};

	return (
		summaryFields.length &&
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
									src={ fieldIcons[ field.field_type ] }
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
								handleOnScroll( e, field.field_name );
							} }
						>
							{ generalFields[ fieldName ]?.length > 0 ? (
								generalFields[ fieldName ].map( ( item ) => (
									<div
										className="formgent-summary-item__content__single"
										key={ item.id || item.parent_id }
									>
										{ typeof item.value === 'string' ? (
											item.value
										) : typeof item.value === 'object' &&
										  item.value !== null ? (
											Object.keys( item.value ).map(
												( key, idx ) => (
													<div
														key={ idx }
														className="formgent-summary-item__content__single__sub-item"
													>
														<span>
															{ convertToTitleCase(
																key
															) }
														</span>
														<strong>
															{
																item.value[
																	key
																]
															}
														</strong>
													</div>
												)
											)
										) : (
											<div>Not found</div>
										) }
									</div>
								) )
							) : (
								<div className="formgent-summary-item__content__not-found">
									No response!
								</div>
							) }
						</div>
					</div>
				)
			);
		} )
	);
}
