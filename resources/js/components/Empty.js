import ReactSVG from 'react-inlinesvg';
import { EmptyStyle } from './style';

export default function Empty( props ) {
	const { label, text, icon } = props;
	return (
		<EmptyStyle className="formgent-empty-box">
			<div className="formgent-empty-box__icon">
				<ReactSVG src={ icon } />
			</div>
			{ label && (
				<span className="formgent-empty-box__label">{ label }</span>
			) }
			{ text && (
				<span className="formgent-empty-box__text">{ text }</span>
			) }
		</EmptyStyle>
	);
}
