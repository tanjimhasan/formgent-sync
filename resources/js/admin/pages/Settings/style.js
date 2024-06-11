import Styled from 'styled-components';

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

export { SettingsContentStyle };
