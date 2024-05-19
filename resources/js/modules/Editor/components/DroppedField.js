import { useRef } from '@wordpress/element';
const style = {
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    marginBottom: '.5rem',
    backgroundColor: 'white',
    cursor: 'move',
  }
export default function DroppedField(props){
    
    const {index, item, id, moveItem} = props;
    console.log(item);
    const ref = useRef(null);
    const [{handlerId}, drop] = useDrop({
        accept: 'card',
        collect(monitor) {
            return {
              handlerId: monitor.getHandlerId(),
            }
          },
        hover(single, monitor) {
          if (!ref.current) {
            return;
          }
          
          const dragIndex = single.index;
          const hoverIndex = index;
    
          if (dragIndex === hoverIndex) {
            return;
          }
    
          const hoverBoundingRect = ref.current?.getBoundingClientRect();
          const hoverMiddleY =
            (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
          const clientOffset = monitor.getClientOffset();
          const hoverClientY = clientOffset.y - hoverBoundingRect.top;
    
          if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return;
          }
    
          if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return;
          }
          moveItem(dragIndex, hoverIndex);
          single.index = hoverIndex;
        },
      });
    
      const [{ isDragging }, drag] = useDrag({
        type: 'card',
        item: ()=>{ return {id, index} },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
      });
      const backgroundColor = isDragging ? '#333' : 'lightgrey';
      console.log(index,isDragging);
      drag(drop(ref));
      
      
    return(
        <div className="newform-newform-dropable-field" ref={ref} 
        style={{ ...style, backgroundColor}}
          data-handler-id={handlerId}
        >
            {item.title}
        </div>
    )
}