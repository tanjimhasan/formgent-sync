import { AntSelect } from '@formgent/components';
import { FilterStyle } from './style';

export default function Filter() {
	const options = [
		{ value: 'all', label: 'All forms' },
		{ value: 'forms', label: 'Forms' },
		{ value: 'quizzes', label: 'Quizzes' },
		{ value: 'payment', label: 'Payment' },
	];

	const handleChange = ( value ) => {
		console.log( `Selected: ${ value }` );
	};

	return (
		<FilterStyle className="formgent-form-filter">
			<div className="formgent-form-filter__left">
				<AntSelect
					onChange={ handleChange }
					placeholder="Select an option"
					options={ options }
					defaultValue="all"
				></AntSelect>
			</div>
			<div className="formgent-form-filter__right"></div>
		</FilterStyle>
	);
}
