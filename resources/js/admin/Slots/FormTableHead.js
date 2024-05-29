import { createSlotFill } from '@wordpress/components';
import PropTypes from 'prop-types';

const { Fill, Slot } = createSlotFill( 'FormTableHead' );

const FormTableHead = ( { render: ChildComponent } ) => (
	<Fill>{ ( props ) => <ChildComponent { ...props } /> }</Fill>
);

FormTableHead.Slot = Slot;

FormTableHead.propTypes = {
	render: PropTypes.elementType.isRequired,
};

export default FormTableHead;
