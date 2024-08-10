import { useDispatch } from '@wordpress/data';
import ReactSVG from 'react-inlinesvg';
import emptyGif from '@image/empty.gif';
import aiIcon from '@icon/ai-icon.svg';
import templateIcon from '@icon/template-icon.svg';
import plusIcon from '@icon/plus.svg';
import { StarterContentStyle } from './style';

export default function StarterContent() {
	const { updateCreatePopUp } = useDispatch( 'formgent' );

	const starterCardItem = [
		{
			type: 'default',
			icon: plusIcon,
			title: 'Start from scratch',
			coming_soon: false,
		},
		{
			type: 'template',
			icon: templateIcon,
			title: 'Use a template',
			coming_soon: false,
		},
		{
			type: 'ai',
			icon: aiIcon,
			title: 'Create with AI',
			coming_soon: true,
		},
	];

	const handleCardClick = ( type ) => {
		if ( type === 'default' ) {
			updateCreatePopUp( true );
		}
	};

	return (
		<StarterContentStyle className="formgent-starter-content">
			<div className="formgent-starter-content__info">
				<img src={ emptyGif } alt="" />
				<h2>You don't have any form</h2>
				<p>
					Create a new form from scratch or use a <br /> template to
					get started.
				</p>
			</div>
			<div className="formgent-starter-cards">
				{ starterCardItem.map( ( item, index ) => {
					return (
						<div
							className={ `formgent-starter-card formgent-starter-card--${ item.type }` }
							key={ index }
							onClick={ () => handleCardClick( item.type ) }
						>
							<div className="formgent-starter-card__icon">
								<ReactSVG src={ item.icon } />
							</div>
							<h2 className="formgent-starter-card__title">
								{ item.title }
							</h2>
							{ item.coming_soon && (
								<span className="formgent-starter-card__badge">
									Coming soon
								</span>
							) }
						</div>
					);
				} ) }
			</div>
		</StarterContentStyle>
	);
}
