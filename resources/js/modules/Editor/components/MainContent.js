import {Input} from '@newform/components';
import { useRef, useState, useEffect } from '@wordpress/element';
import Body from "./Body";
import FieldInserter from "./FieldInserter";
import Sidebar from "./Sidebar";

export default function MainContent(props){
    const { uiState, setUiState } = props;

    const fields = [
        {
            id: '01',
            title: 'Input'
        },
        {
            id: '02',
            title: 'Email'
        },
        {
            id: '03',
            title: 'Number'
        },
        {
            id: '04',
            title: 'Test'
        },
        {
            id: '05',
            title: 'Test one'
        }
    ]
    const [inserterDomKey, setInserterDomKey] = useState(Date.now());
    const [sourceItems, setSourceItems] = useState(fields);
    const [destinationItems, setDestinationItems] = useState([]);

    

    
    return(
        <DndProvider backend={HTML5Backend}>
            <div className="newform-editor-content" style={{display: 'flex'}}>
                
                    {
                        uiState?.isInserterActive &&
                            <FieldInserter inserterDomKey={inserterDomKey} />
                    }
                    <Sidebar />
                    <Body />
                
            </div>
        </DndProvider>
    )
}