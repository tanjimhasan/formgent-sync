import Styled from 'styled-components';

const SettingsSidebarStyle = Styled.div`
    width: 320px;
    height: calc(100vh - 100px);
    border-radius: 10px 0 0 10px;
    background-color: #F9FAFB;
    border-right: 1px solid var(--formgent-color-gray-200);
    .formgent-settings-sider__title {
        margin: 0;
        font-size: 18px;
        font-weight: 600;
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
        padding: 8px;
        margin: 0;
        background: transparent;
        .ant-menu-item {
            font-size: 14px;
            font-weight: 600;
            padding: 10px 16px !important;
            margin: 0 !important;
            border-radius: 8px;
            color: var(--formgent-font-color);
            text-decoration: none;
            border: none;
            box-shadow: none;
            outline: none;
            transition: all ease .3s;
            width: 100%;
            .ant-menu-sub {
                background: transparent;
            }
            svg{
                g, path{
                    transition: all ease .3s;
                    fill: var(--formgent-color-gray-500);
                }
            }
            &.ant-menu-item-selected,
            &:hover {
                color: var(--formgent-color-primary) !important;
                background-color: var(--formgent-color-primary-50);
                svg{
                    g, path{
                        fill: var(--formgent-color-primary);
                    }
                }
            }
        }
        .ant-menu-submenu {
            .ant-menu-submenu-title {
                font-size: 14px;
                font-weight: 600;
                padding: 10px 15px;
                margin: 0 !important;
                border-radius: 8px;
                color: var(--formgent-font-color);
                text-decoration: none;
                border: none;
                box-shadow: none;
                outline: none;
                transition: all ease .3s;
                &:hover {
                    color: var(--formgent-color-dark);
                    background-color: var(--formgent-color-bg-light);
                }
            }
            &.ant-menu-submenu-selected .ant-menu-submenu-title {
                color: var(--formgent-color-dark);
                background-color: var(--formgent-color-bg-light);
            }
            .ant-menu-sub {
                background: transparent;
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
    & > .ant-row{
        margin-bottom: 10px;
    }
    .formgent-settings-content__title {
        margin: 0;
        font-size: 18px;
        font-weight: 600;
        color: var(--formgent-color-text);
    }
    .ant-table-tbody{
        tr{
            border-radius: var(--radius-lg, 10px);
            background: var(--White-White, #FFF);
            box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
            td{
                border-top: 1px solid var(--Gray-200, #E5E7EB) !important;
                border-bottom: 1px solid var(--Gray-200, #E5E7EB) !important;
                &:first-child{
                    border-left: 1px solid var(--Gray-200, #E5E7EB) !important;
                }
                &:last-child{
                    border-right: 1px solid var(--Gray-200, #E5E7EB) !important;
                }
            }
        }
    }
`;

export { SettingsContentStyle, SettingsSidebarStyle };
