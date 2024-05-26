import Styled from 'styled-components';

const EditorHeaderStyle = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px 0 0;
    margin-bottom: 20px;
    background-color: var(--newform-color-white);
    position: sticky;
    top: 32px;
    min-height: 60px;
    z-index: 98;
    box-shadow: 0 2px 5px rgba(0,0,0,0.02);
`;

const InserterStyle = Styled.div`
    width: 320px;
    height: calc(100vh - 100px);
    border-radius: 10px;
    background-color: var(--newform-color-white);
    .newform-editor-inserter__group{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

const DropableBoxStyle = Styled.div`
    flex: 1;
    margin: 0 15px;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    max-height: 100%;
    overflow-y: auto;
    background-color: var(--newform-color-white);
    .newform-dropable-field-empty-placeholder{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        min-height: 50px;
        border: 1px dashed var(--newform-color-bg-gray);
        span{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background-color: var(--newform-color-dark);
            font-size: 24px;
            color: var(--newform-color-white);
        }
    }
`;

const EditorContentStyle = Styled.div`
    padding: 0 15px;
    .newform-editor-inserter__field{
        border-radius: 8px;
        color: #1e1f21;
        cursor: move;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        padding: 12px 15px;
        min-height: 80px;
        text-align: center;
        transition: all .05s;
        min-width: 90px;
        margin: 10px;
        border: 1px solid var(--newform-color-border);
        background-color: var(--newform-color-bg-light);
    }
    .newform-dropable-field{
        position: relative;
        // padding: 30px;
        &:hover{
            .newform-dropable-field__actions{
                visibility: visible;
                opacity: 1;
            }
        } 
    }
    .newform-droppable-field-overlay{
        .newform-dropable-field__actions{
            visibility: visible;
            opacity: 1;
        }
    }
    
    .newform-dropable-field__actions{
        background-color: #4b4c4d;
        border-radius: 6px;
        overflow: hidden;
        visibility: hidden;
        opacity: .3;
        position: absolute;
        right: 14px;
        top: 8px;
        z-index: 10;
        .newform-icon{
            color: #fff;
            cursor: pointer;
            padding: 10px;
        }
    }
`;

export {
	EditorHeaderStyle,
	InserterStyle,
	DropableBoxStyle,
	EditorContentStyle,
};
