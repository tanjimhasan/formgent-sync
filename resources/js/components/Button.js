import { ConfigProvider, Button } from 'antd';
import { ButtonStyle } from './style';
export default function AntButton( props ) {
	const { tokens = {}, componentTokens = {}, ...rest } = props;
	const defaultComponentTokens = {
		Button: {},
	};
	const defaultTokens = {
		colorPrimary: '#6551f2',
		controlHeight: 40,
		controlHeightLG: 50,
		controlHeightSM: 40,
		borderRadius: 8,
	};
	return (
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
			<ButtonStyle>
				<Button { ...rest } />
			</ButtonStyle>
		</ConfigProvider>
	);
}
