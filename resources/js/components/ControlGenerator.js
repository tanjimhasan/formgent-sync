import { registerControls } from '@formgent/fields';
export default function ControlGenerator( props ) {
	const { control } = props;
	const ControlView = registerControls()[ control.type ];
	return (
		<div className="formgent-control">
			<ControlView control={ control } />
		</div>
	);
}
