import Styled from 'styled-components';

const SettingsSidebarStyle = Styled.div`
    width: 320px;
    height: calc(100vh - 100px);
    margin-inline-start: 15px;
    border-radius: 10px;
    background-color: var(--formgent-color-white);
    .formgent-settings-sider__title {
        margin: 0;
    }
    .formgent-settings-sider__top {
        padding: 20px;
        border-bottom: 1px solid var(--formgent-color-border-light);
    }
    .formgent-settings-sider__nav {
        display: flex;
        flex-direction: column;
        gap: 6px;
        padding: 15px;
        margin: 0;
        a {
            font-size: 14px;
            font-weight: 600;
            padding: 10px 15px;
            border-radius: 8px;
            color: var(--formgent-font-color);
            text-decoration: none;
            border: none;
            box-shadow: none;
            outline: none;
            transition: all ease .3s;
            &.active,
            &:hover {
                color: var(--formgent-color-dark);
                background-color: var(--formgent-color-bg-light);
            }
        }
    }
`;

const SettingsContentStyle = Styled.div`
    flex: 1;
    margin: 0 15px;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    max-height: 100%;
    overflow-y: auto;
    background-color: var(--formgent-color-white);
    .formgent-settings-inserter__field{
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
        border: 1px solid var(--formgent-color-border);
        background-color: var(--formgent-color-bg-light);
    }
    .formgent-dropable-field{
        position: relative;
        // padding: 30px;
        &:hover{
            .formgent-dropable-field__actions{
                visibility: visible;
                opacity: 1;
            }
        } 
    }
    .formgent-droppable-field-overlay{
        .formgent-dropable-field__actions{
            visibility: visible;
            opacity: 1;
        }
    }
    
    .formgent-dropable-field__actions{
        background-color: #4b4c4d;
        border-radius: 6px;
        overflow: hidden;
        visibility: hidden;
        opacity: .3;
        position: absolute;
        right: 14px;
        top: 8px;
        z-index: 10;
        .formgent-icon{
            color: #fff;
            cursor: pointer;
            padding: 10px;
        }
    }
`;

export { SettingsContentStyle, SettingsSidebarStyle };
