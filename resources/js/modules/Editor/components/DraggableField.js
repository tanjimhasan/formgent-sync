import { useRef, useState, useEffect } from '@wordpress/element';
import { useDraggable } from "@dnd-kit/core";
import { nanoid } from 'nanoid';

export default function DraggableField(props){
    const {field, ...rest} = props;
    const id = useRef(nanoid(10));
    const { attributes, listeners, setNodeRef } = useDraggable({
        id: id.current,
        data: {
          field,
          fromSidebar: true,
        },
    });

    return(
        <div
        ref={setNodeRef}
         className="newform-editor-inserter__field"
         {...attributes}
         {...listeners}
        >
            <span>{field.type}</span>
        </div>
    )
}