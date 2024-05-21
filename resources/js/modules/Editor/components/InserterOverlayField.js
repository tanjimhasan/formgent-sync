export default function InserterOverlayField(props){
    const { inserterOverlayActiveField } = props;
    return(
        <div className="newform-inserter-overlay">{inserterOverlayActiveField.type}</div>
    )
}