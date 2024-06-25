import { useSelect } from '@wordpress/data';
import { ResultsHeaderStyle } from './style';

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
					Responses
				</NavLink>
				<NavLink
					to={ `${ results }/summary` }
					className="formgent-results-header__nav__link"
				>
					Summary
				</NavLink>
				<NavLink
					to={ `${ results }/analytics` }
					className="formgent-results-header__nav__link"
				>
					Analytics
				</NavLink>
			</nav>
		</ResultsHeaderStyle>
	);
}
