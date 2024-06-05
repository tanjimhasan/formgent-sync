import { useState } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';
import { InserterStyle } from './style';
import DraggableField from './DraggableField';
import { registerFields } from '@formgent/fields';
import { AntInput } from '@formgent/components';
import search from '@icon/search.svg';
import chartBar from '@icon/chart-bar.svg';
import bar from '@icon/bar.svg';
import user from '@icon/user.svg';
import { Row, Col } from 'antd';
export default function FieldInserter( props ) {
	const { inserterDomKey } = props;
	const [ activeTab, setActiveTab ] = useState( 'element' );
	// 'long_text', 'short_text', 'name'
	const basicFields = {
		long_text: {
			title: 'Long text',
			icon: chartBar,
		},
		short_text: {
			title: 'Short text',
			icon: bar,
		},
		name: {
			title: 'Name',
			icon: user,
		},
	};
	const advanceFields = [];
	const fields = registerFields().filter(
		( item ) => item.type !== 'spacer'
	);

	function getFieldByGroup( fieldGroup, field ) {
		if ( ! ( field.type in fieldGroup ) ) {
			return;
		}
		return (
			<Col span={ 8 }>
				<DraggableField
					key={ field.id }
					field={ field }
					fieldInfo={ fieldGroup[ field.type ] }
				/>
			</Col>
		);
	}

	return (
		<InserterStyle
			key={ inserterDomKey }
			className="formgent-editor-inserter"
		>
			<div className="formgent-editor-sider">
				<div className="formgent-editor-sider__top">
					<ul className="formgent-editor-sider__nav">
						<li>
							<a
								href="#"
								className={
									activeTab === 'element'
										? 'formgent-active'
										: ''
								}
								onClick={ ( e ) => {
									e.preventDefault();
									setActiveTab( 'element' );
								} }
							>
								Elements
							</a>
						</li>
						<li>
							<a
								href="#"
								className={
									activeTab === 'design'
										? 'formgent-active'
										: ''
								}
								onClick={ ( e ) => {
									e.preventDefault();
									setActiveTab( 'design' );
								} }
							>
								Design
							</a>
						</li>
					</ul>
				</div>
				<div className="formgent-editor-sider__content">
					<div className="formgent-editor-sider__field-search">
						<AntInput prefix={ <ReactSVG src={ search } /> } />
					</div>
					<span className="formgent-editor-inserter__label">
						General
					</span>
					<div className="formgent-editor-inserter__group">
						<Row gutter={ 15 }>
							{ fields.map( ( field ) =>
								getFieldByGroup( basicFields, field )
							) }
						</Row>
					</div>
				</div>
			</div>
		</InserterStyle>
	);
}
