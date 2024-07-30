import { useState } from '@wordpress/element';
import { Radio } from 'antd';
import { __ } from '@wordpress/i18n';
import ReactSVG from 'react-inlinesvg';
import fileIcon from '@icon/file-edit.svg';
import quizIcon from '@icon/quiz.svg';
import paymentIcon from '@icon/payment.svg';

export default function CreatePopupFormType() {
	const formTypes = [
		{
			label: (
				<span className="formgent-createPopup__form-type__btn">
					<ReactSVG src={ fileIcon } /> Form
				</span>
			),
			value: 'form',
		},
		{
			label: (
				<span className="formgent-createPopup__form-type__btn">
					<ReactSVG src={ quizIcon } /> Quiz
				</span>
			),
			value: 'quiz',
		},
		{
			label: (
				<span className="formgent-createPopup__form-type__btn">
					<ReactSVG src={ paymentIcon } /> Payment
				</span>
			),
			value: 'payment',
		},
	];

	const [ selectedType, setSelectedType ] = useState( 'form' );

	const handleFormTypeChange = ( { target: { value } } ) => {
		console.log( 'Selected form type:', value );
		setSelectedType( value );
	};

	return (
		<div className="formgent-createPopup__form-type">
			<Radio.Group
				options={ formTypes }
				onChange={ handleFormTypeChange }
				value={ selectedType }
				optionType="button"
			/>
		</div>
	);
}
