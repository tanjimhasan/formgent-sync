import { useSelect } from '@wordpress/data';
import { formatDate } from '@newform/helper/utils';
import { __ } from '@wordpress/i18n';
import { TitleBoxStyle } from './style';

export default function TItleBox( props ) {
	const { form } = props;
	const { id, title, created_at } = form;
	const dateFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};

	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'newform' ).getCommonState();
	}, [] );

	const { Link } = CommonReducer.routerComponents;

	return (
		<TitleBoxStyle className="newform-titleBox">
			<div className="newform-titlebox__content">
				<div className="newform-titleBox-text">
					<Link>
						<span className="newform-title">{ title }</span>
					</Link>
					<ul className="newform-titleBox-meta">
						<li className="newform-titleBox-meta__id">
							{ __( 'ID', 'newform' ) } #{ id }
						</li>
						<li className="newform-titleBox-meta__date">
							{ __( 'Created:', 'newform' ) }{ ' ' }
							{ formatDate(
								'en-US',
								created_at,
								dateFormatOptions
							) }
						</li>
					</ul>
				</div>
			</div>
		</TitleBoxStyle>
	);
}
