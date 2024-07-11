export default function Edit( { attributes, setAttributes } ) {
	return (
		<div className="formgent-form-block">
			<div className="formgent-form-block__wrapper">
				<input
					className="formgent-form-block__input"
					type="checkbox"
					id={ attributes.id }
					name={ attributes.name }
					checked={ attributes.checked }
				/>
				<label for={ attributes.name }>{ attributes.label }</label>
			</div>
		</div>
	);
}
