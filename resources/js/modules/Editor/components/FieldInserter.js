import { InserterStyle } from './style';
import DraggableField from './DraggableField';
import { registerFields } from '@newform/fields';
export default function FieldInserter(props){
    const { inserterDomKey } = props;
    const fields = registerFields();

    return(
        <InserterStyle key={inserterDomKey} className="newform-editor-inserter">
            
            {
                fields.map((field)=> ( <DraggableField key={field.type} field={field} />))
            }
            
        </InserterStyle>
    )
}