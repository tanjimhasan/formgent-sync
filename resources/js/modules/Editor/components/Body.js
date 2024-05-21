import DropableBox from "./DropableBox";

export default function Body(props){
    const { fields } = props;
    return(
        <DropableBox fields={fields} />
    )
}