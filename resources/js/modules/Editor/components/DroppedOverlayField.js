import { registerPreviewFields } from "@newform/fields";

export default function DroppedOverlayField(props){
    const { droppedOverlayActiveField } = props;
    const DroppedField = registerPreviewFields()[droppedOverlayActiveField.type];
    return(
        <div className="newform-droppable-field-overlay">
            <div className="newform-dropable-field__actions">
              <i className="newform-icon" >Trigger sort</i>
              <i className="newform-icon">D</i>
              <i className="newform-icon">D</i>
              <i className="newform-icon">D</i>
            </div>
            <DroppedField />
        </div>
    )

}