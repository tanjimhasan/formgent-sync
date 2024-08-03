import { AntButton, AntDropdown, AntTabs } from '@formgent/components';
import { formatDate } from '@formgent/helper/utils';
import { useState } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';
import { TableModalStyle } from './style';

// Icon
import arrowLeftIcon from '@icon/arrow-left.svg';
import arrowRightIcon from '@icon/arrow-right.svg';
import closeIcon from '@icon/close.svg';
import downloadIcon from '@icon/download.svg';
import editIcon from '@icon/edit.svg';
import ellipsisVIcon from '@icon/ellipsis-v.svg';
import mailIcon from '@icon/mail.svg';
import plusIcon from '@icon/plus.svg';
import printIcon from '@icon/print.svg';
import starIcon from '@icon/star.svg';
import tagIcon from '@icon/tag.svg';
import transformIcon from '@icon/transform.svg';
import trashIcon from '@icon/trash.svg';

export default function TableModal( props ) {
	const {
		response,
		setTableModal,
		handleDownload,
		handleDelete,
		handlePrint,
		handleStarred,
		downloadItems,
		dateFormatOptions,
	} = props;
	const [ activeModalTab, setActiveModalTab ] = useState( 'answers' );
	const [ enableSubmissionInput, setEnableSubmissionInput ] =
		useState( false );

	// Modal Tab Items
	const modalTabItems = [
		{
			key: 'answers',
			label: 'Answers',
		},
		{
			key: 'submission',
			label: 'Submission Info',
		},
	];

	// Select Items Data
	const selectItems = [
		{
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="14" height="14" src={ editIcon } />
					Edit Response
				</span>
			),
			key: 'edit',
		},
		{
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="14" height="14" src={ starIcon } />
					Star
				</span>
			),
			key: 'star',
		},
		{
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="14" height="14" src={ mailIcon } />
					Read/Unread
				</span>
			),
			key: 'read-unread',
		},
		{
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="14" height="14" src={ starIcon } />
					print
				</span>
			),
			key: 'print',
		},
		{
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="14" height="14" src={ trashIcon } />
					Delete
				</span>
			),
			key: 'delete',
		},
	];

	// handleSelectItems
	function handleSelectItems( { key } ) {
		const selectFunctions = {
			edit: () => {
				console.log( ' Edit Response ', response );
			},
			star: () => {
				console.log( ' Star Response ', response );
				handleStarred(
					response.id,
					response.is_starred === '1' ? '0' : '1'
				);
			},
			'read-unread': () => {
				response.is_read === '1'
					? console.log( 'Mark as Unread' )
					: console.log( 'Mark as Read' );
			},
			print: () => {
				console.log( ' Print Response ', response );
				handlePrint();
			},
			delete: () => {
				console.log( ' Delete Response ', response );
				handleDelete();
			},
		};

		// Get the sorted data based on the key
		return selectFunctions[ key ] ? selectFunctions[ key ]() : null;
	}

	// Handle Modal Tab Change
	function handleModalTabChange( key ) {
		setActiveModalTab( key );
	}

	return (
		<TableModalStyle className="response-table__modal">
			<div className="response-table__modal__header">
				<div className="response-table__modal__header__response">
					<div className="response-table__modal__header__response__btns">
						<button className="response-table__modal__header__response__btn">
							<ReactSVG
								width="14"
								height="14"
								src={ arrowLeftIcon }
							/>
						</button>
						<button className="response-table__modal__header__response__btn">
							<ReactSVG
								width="14"
								height="14"
								src={ arrowRightIcon }
							/>
						</button>
					</div>
					<span className="">1 of 4 Responses</span>
				</div>
				<div className="response-table__modal__header__action">
					<AntDropdown
						menu={ {
							items: downloadItems,
							onClick: handleDownload,
						} }
						placement="bottomRight"
					>
						<AntButton
							onClick={ ( e ) => e.preventDefault() }
							icon={
								<ReactSVG
									width="14"
									height="14"
									src={ downloadIcon }
								/>
							}
						/>
					</AntDropdown>

					<div className="response-table__modal__header__dropdown">
						<AntDropdown
							menu={ {
								items: selectItems,
								onClick: handleSelectItems,
							} }
							trigger={ [ 'click' ] }
							placement="bottomLeft"
							overlayStyle={ { minWidth: '240px' } }
						>
							<button
								className="response-table__modal__header__action__btn"
								onClick={ ( e ) => e.preventDefault() }
							>
								<ReactSVG
									width="14"
									height="14"
									src={ ellipsisVIcon }
								/>
							</button>
						</AntDropdown>
					</div>
					<button
						className="response-table__modal__close"
						onClick={ () => {
							setTableModal( false );
						} }
					>
						<ReactSVG width="14" height="14" src={ closeIcon } />
					</button>
				</div>
			</div>
			<div className="response-table__modal__content">
				<div className="response-table__modal__tab">
					<AntTabs
						activeKey={ activeModalTab }
						onChange={ handleModalTabChange }
						items={ modalTabItems }
					/>
					{ activeModalTab === 'answers' && (
						<div className="response-table__modal__tab__content">
							<div className="response-table__modal__tab__item">
								<div className="response-table__modal__tab__item__icon">
									<ReactSVG
										width="14"
										height="14"
										src={ tagIcon }
									/>
								</div>
								<h5 className="response-table__modal__tab__item__title">
									Tags:
								</h5>
								<ul className="response-table__modal__tab__tag">
									<li className="response-table__modal__tab__tag__item">
										<span className="response-table__modal__tab__tag__item__single">
											Tag one
										</span>
										<button className="response-table__modal__tab__tag__item__single__close">
											x
										</button>
									</li>
									<li className="response-table__modal__tab__tag__item">
										<span className="response-table__modal__tab__tag__item__single">
											Tag two
										</span>
										<button className="response-table__modal__tab__tag__item__single__close">
											<ReactSVG
												width="14"
												height="14"
												src={ closeIcon }
											/>
										</button>
									</li>
								</ul>

								<button className="response-table__modal__tab__item__add">
									+ Add tag
								</button>
							</div>
							<div className="response-table__modal__tab__wrapper">
								<div className="response-table__modal__tab__item">
									<div className="response-table__modal__tab__item__icon">
										<ReactSVG
											width="14"
											height="14"
											src={ transformIcon }
										/>
									</div>
									<div className="response-table__modal__tab__item__content">
										<h5 className="response-table__modal__tab__item__title">
											Show question title here
										</h5>
										<p className="response-table__modal__tab__item__desc">
											Lorem ipsum dolor sit amet
											consectetur. Suspendisse morbi
											mattis gravida aliquet nunc suscipit
											aliquam. Turpis sed id elementum
											auctor.
										</p>
									</div>
								</div>
								<div className="response-table__modal__tab__item">
									<div className="response-table__modal__tab__item__icon">
										<ReactSVG
											width="14"
											height="14"
											src={ printIcon }
										/>
									</div>
									<div className="response-table__modal__tab__item__content">
										<h5 className="response-table__modal__tab__item__title">
											Select multiple answers
										</h5>
										<div className="response-table__modal__tab__item__btns">
											<button className="response-table__modal__tab__item__btn">
												Option 1
											</button>
											<button className="response-table__modal__tab__item__btn">
												Option 2
											</button>
										</div>
									</div>
								</div>
								<div className="response-table__modal__tab__item">
									<div className="response-table__modal__tab__item__icon">
										<ReactSVG
											width="14"
											height="14"
											src={ printIcon }
										/>
									</div>
									<div className="response-table__modal__tab__item__content">
										<h5 className="response-table__modal__tab__item__title">
											Select your answers
										</h5>
										<div className="response-table__modal__tab__item__btns">
											<button className="response-table__modal__tab__item__btn">
												Yes
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="response-table__modal__tab__submission">
								<div className="response-table__modal__tab__submission__header">
									<h4 className="response-table__modal__tab__submission__title">
										Submission Note
									</h4>
									<button
										className="response-table__modal__tab__submission__add"
										onClick={ () => {
											setEnableSubmissionInput(
												! enableSubmissionInput
											);
										} }
									>
										<ReactSVG
											width="14"
											height="14"
											src={ plusIcon }
										/>
										Add Note
									</button>
								</div>
								{ enableSubmissionInput ? (
									<div className="response-table__modal__tab__submission__note">
										<textarea
											placeholder="You can create your note here..."
											className="response-table__modal__tab__submission__input"
										/>
										<button className="response-table__modal__tab__submission__save">
											Save note
										</button>
									</div>
								) : (
									<div className="response-table__modal__tab__submission__content">
										<div className="response-table__modal__tab__submission__content__single">
											<span className="response-table__modal__tab__submission__content__published-date">
												Sat, Jun 22, 1:18 PM
											</span>
											<p className="response-table__modal__tab__submission__content__text">
												Lorem ipsum dolor sit amet
												consectetur. Suspendisse morbi
												mattis gravida aliquet nunc
												suscipit aliquam. Turpis sed id
												elementum auctor.
											</p>
										</div>
										<div className="response-table__modal__tab__submission__content__single">
											<span className="response-table__modal__tab__submission__content__published-date">
												Sat, Jun 22, 1:18 PM
											</span>
											<p className="response-table__modal__tab__submission__content__text">
												Lorem ipsum dolor sit amet
												consectetur. Suspendisse morbi
												mattis gravida aliquet nunc
												suscipit aliquam. Turpis sed id
												elementum auctor.
											</p>
										</div>
									</div>
								) }
							</div>
						</div>
					) }
					{ activeModalTab === 'submission' && (
						<div className="response-table__modal__tab__content">
							<div className="response-table__modal__tab__info">
								<div className="response-table__modal__tab__info__single">
									<span className="response-table__modal__tab__info__title">
										Submission Date
									</span>
									<span className="response-table__modal__tab__info__value">
										{ formatDate(
											'en-US',
											response.created_at,
											dateFormatOptions
										) }
									</span>
								</div>
								<div className="response-table__modal__tab__info__single">
									<span className="response-table__modal__tab__info__title">
										Username
									</span>
									<span className="response-table__modal__tab__info__value">
										Ahmed Hannan
									</span>
								</div>
								<div className="response-table__modal__tab__info__single">
									<span className="response-table__modal__tab__info__title">
										User Email
									</span>
									<span className="response-table__modal__tab__info__value">
										{ response.user_email }
									</span>
								</div>
								<div className="response-table__modal__tab__info__single">
									<span className="response-table__modal__tab__info__title">
										Status
									</span>
									<span className="response-table__modal__tab__info__value">
										<span
											className={ `response-table__modal__tab__info__tag ${
												response.is_completed === '1'
													? 'completed'
													: null
											}` }
										>
											{ response.is_completed === '1'
												? 'Completed'
												: 'In Progress' }
										</span>
									</span>
								</div>
								<div className="response-table__modal__tab__info__single">
									<span className="response-table__modal__tab__info__title">
										Browser
									</span>
									<span className="response-table__modal__tab__info__value">
										Chrome 125.0.0.0
									</span>
								</div>
								<div className="response-table__modal__tab__info__single">
									<span className="response-table__modal__tab__info__title">
										Operating System
									</span>
									<span className="response-table__modal__tab__info__value">
										MAC OS10.15.17
									</span>
								</div>
							</div>
						</div>
					) }
				</div>
			</div>
		</TableModalStyle>
	);
}
