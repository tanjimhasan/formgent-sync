import { ConfigProvider, Button } from 'antd';
export default function AntButton( props ) {
	return (
		<ConfigProvider
			theme={ {
				components: {
					Button: {
						colorPrimary: '#000000',
					},
				},
			} }
		>
			<Button { ...props } />
		</ConfigProvider>
	);
}
