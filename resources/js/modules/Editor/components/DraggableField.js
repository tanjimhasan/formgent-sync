import { useDraggable } from "@dnd-kit/core";
import { now } from "@newform/helper/now";

export default function DraggableField(props){
    const {field, ...rest} = props;

    const { attributes, listeners, setNodeRef } = useDraggable({
        id: now(),
        data: {
          field,
          fromSidebar: true,
        },
    });

    return(
        <div
         className="newform-editor-inserter__field"
         ref={setNodeRef}
         {...attributes}
         {...listeners}
        >
            <span>{field.type}</span>
        </div>
    )
}