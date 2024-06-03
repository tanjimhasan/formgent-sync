import { ConfigProvider, Skeleton } from 'antd';
export default function AntSkeleton( props ) {
	const { tokens = {}, componentTokens = {}, ...rest } = props;
	const defaultComponentTokens = {
		Skeleton: {},
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
			<Skeleton { ...rest } />
		</ConfigProvider>
	);
}
