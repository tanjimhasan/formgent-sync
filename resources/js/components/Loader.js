import AntSkeleton from './Skeleton';

const DefaultLoader = () => {
	return <AntSkeleton active />;
};

export default function Loader( { isLoadiing, children, loader } ) {
	const Loader = loader ? loader : DefaultLoader;
	return isLoadiing ? <Loader /> : children;
}
