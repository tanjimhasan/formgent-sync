import { useSelect } from '@wordpress/data';
import { formatDate } from '@formgent/helper/utils';
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
		return select( 'formgent' ).getCommonState();
	}, [] );

	const { Link } = CommonReducer.routerComponents;

	return (
		<TitleBoxStyle className="formgent-titleBox">
			<div className="formgent-titlebox__content">
				<div className="formgent-titleBox-text">
					<Link>
						<span className="formgent-title">{ title }</span>
					</Link>
					<ul className="formgent-titleBox-meta">
						<li className="formgent-titleBox-meta__id">
							{ __( 'ID', 'formgent' ) } #{ id }
						</li>
						<li className="formgent-titleBox-meta__date">
							{ __( 'Created:', 'formgent' ) }{ ' ' }
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
