import { useSelect } from '@wordpress/data';
import ReactSVG from 'react-inlinesvg';
import { ResultsHeaderStyle } from './style';

import chartIcon from '@icon/line-chart.svg';
import pieIcon from '@icon/pie-chart.svg';
import rowIcon from '@icon/row-3.svg';

export default function ResultsHeader( props ) {
	const { id } = props;

	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getCommonState();
	}, [] );

	const { NavLink } = CommonReducer.routerComponents;

	const results = `/forms/${ id }/results`;

	return (
		<ResultsHeaderStyle className="formgent-results-header">
			{ /* Results Header Nav */ }
			<nav className="formgent-results-header__nav">
				<NavLink
					to={ `${ results }/responses` }
					className="formgent-results-header__nav__link"
				>
					<ReactSVG src={ rowIcon } width="18" height="18" />
					Responses
				</NavLink>
				<NavLink
					to={ `${ results }/summary` }
					className="formgent-results-header__nav__link"
				>
					<ReactSVG src={ pieIcon } width="18" height="18" />
					Summary
				</NavLink>
				<NavLink
					to={ `${ results }/analytics` }
					className="formgent-results-header__nav__link"
				>
					<ReactSVG src={ chartIcon } width="18" height="18" />
					Analytics
				</NavLink>
			</nav>
		</ResultsHeaderStyle>
	);
}
