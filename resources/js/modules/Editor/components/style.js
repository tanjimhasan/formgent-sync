import Styled from 'styled-components';

const EditorHeaderStyle = Styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
    border-bottom: 1px solid var(--helpgent-color-bg-gray);
    transition: var(--helpgent-transition);
`;

const InserterStyle = Styled.div`
    width: 400px;
    height: calc(100vh - 100px);
    background-color: #ddd;
    .newform-editor-inserter__field{
        lign-items: center;
        background-color: #fff;
        border: 1px solid #dfdfdf;
        border-radius: 8px;
        color: #1e1f21;
        cursor: move;
        display: flex;
        font-size: 14px;
        padding: 12px 16px;
        text-align: center;
        transition: all .05s;
        margin: 20px;
    }
`;

const DropableBoxStyle = Styled.div`
    flex: 1;
    border: 1px solid black;
    margin: 50px;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    max-height: 100%;
    overflow-y: auto;
    
`;

const EditorContentStyle = Styled.div`
    .newform-inserter-overlay{
        background-color: #fff;
        border: 1px solid #dfdfdf;
        border-radius: 8px;
        color: #1e1f21;
        cursor: move;
        display: flex;
        font-size: 14px;
        padding: 12px 16px;
        text-align: center;
        transition: all .05s;
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

export { EditorHeaderStyle, InserterStyle, DropableBoxStyle, EditorContentStyle };
