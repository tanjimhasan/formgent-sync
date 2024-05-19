import Styled from 'styled-components';

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
    }
`;

const DropableBoxStyle = Styled.div`
    
`;

export {
    InserterStyle,
    DropableBoxStyle
}