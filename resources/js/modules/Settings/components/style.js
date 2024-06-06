import Styled from 'styled-components';

const SettingsSidebarStyle = Styled.div`
    width: 320px;
    height: calc(100vh - 100px);
    margin-inline-start: 15px;
    border-radius: 10px;
    background-color: var(--formgent-color-white);
    .formgent-settings-sider__title {
        margin: 0;
        fsont-size: 18px;
        fwont-weight: 600;
        color: var(--formgent-color-text);
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
    padding: 20px;
    display: flex;
    flex-direction: column;
    max-height: 100%;
    overflow-y: auto;
    background-color: var(--formgent-color-white);
    .formgent-settings-content__title {
        margin: 0;
        font-size: 18px;
        font-weight: 600;
        color: var(--formgent-color-text);
    }
`;

export { SettingsContentStyle, SettingsSidebarStyle };
