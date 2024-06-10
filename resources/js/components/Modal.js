import { ConfigProvider, Modal } from 'antd';
import { InputStyle } from './style';
import { Children } from '@wordpress/element';
export default function AntModal( props ) {
	const { tokens = {}, componentTokens = {}, ...rest } = props;
	const defaultComponentTokens = {
		Modal: {},
	};
	const defaultTokens = {};
	return (
		<InputStyle>
			<ConfigProvider
				theme={ {
					cssVar: true,
					token: {
						...defaultTokens,
						...tokens,
					},
					components: {
						...defaultComponentTokens,
						...componentTokens,
					},
				} }
			>
				<Modal { ...rest } />
			</ConfigProvider>
		</InputStyle>
	);
}
