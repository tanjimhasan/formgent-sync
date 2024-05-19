import { useRef, useState, useEffect, useCallback } from '@wordpress/element';
import update from 'immutability-helper'
import DroppedField from "./DroppedField";
import { DropableBoxStyle } from "./style";

export default function DropableBox(){
    const [droppedItems, setDroppedItems] = useState([]);
    const [placeholderIndex, setPlaceholderIndex] = useState(null);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'item',
        drop: (item) => addItemToBox(item),
        hover: (draggedItem, monitor) => handleHover(draggedItem, monitor),
        collect: (monitor) => ({
          isOver: !!monitor.isOver(),
        }),
    }));

    const addItemToBox = (item) => {
        console.log(item);
        setDroppedItems((prevItems) => [...prevItems, item]);
        setPlaceholderIndex(null);
    };

    const handleHover = (draggedItem, monitor) => {
        console.log(draggedItem, monitor);
        const hoverIndex = droppedItems.findIndex((item) => item.id === draggedItem.id);
        const newPlaceholderIndex = hoverIndex === -1 ? droppedItems.length : hoverIndex;
        if (placeholderIndex !== newPlaceholderIndex) {
          setPlaceholderIndex(newPlaceholderIndex);
        }
      };

    // const moveItem = (dragIndex, hoverIndex) => {
    //     const draggedItem = droppedItems[dragIndex];
    //     const updatedItems = [...droppedItems];
    //     updatedItems.splice(dragIndex, 1);
    //     updatedItems.splice(hoverIndex, 0, draggedItem);
    //     console.log(dragIndex, hoverIndex);
    //     setDroppedItems(updatedItems);
    //   };
    const moveItem = useCallback((dragIndex, hoverIndex) => {
    setDroppedItems((prevCards) =>
        update(prevCards, {
        $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex]],
        ],
        }),
    )
    }, [])

    console.log(droppedItems);


    const renderField = useCallback((item, index) => {
        return (
            <>
            
            {index === placeholderIndex && (
                <div style={{ padding: '8px', margin: '4px', backgroundColor: 'lightgray' }}>Placeholder</div>
            )}
            <DroppedField key={item.id} index={index} item={item} id={item.id} moveItem={moveItem}/>
            </>
        )
      }, [])

      console.log(placeholderIndex);

    return(
        <DropableBoxStyle>
            <div 
            ref={drop} 
            className="newform-dropable-field-list"
            style={{
                height: '200px',
                width: '200px',
                border: '1px solid black',
                backgroundColor: isOver ? 'lightgreen' : 'white',
                padding: '16px',
            }}
            >
                {droppedItems.map((item, index) => (
                    renderField(item, index)
                ))}
                {placeholderIndex === droppedItems.length && (
        <div style={{ padding: '8px', margin: '4px', backgroundColor: 'lightgray' }}>Placeholder</div>
      )}
            </div>
        </DropableBoxStyle>
    )
}