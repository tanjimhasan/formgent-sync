import { ConfigProvider, Spin } from 'antd';
export default function AntSpin( props ) {
	const { tokens = {}, componentTokens = {}, ...rest } = props;
	const defaultComponentTokens = {
		Spin: {},
	};
	const defaultTokens = {};
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
			<Spin { ...rest } />
		</ConfigProvider>
	);
}
