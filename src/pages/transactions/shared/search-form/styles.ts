import { css, styled } from 'styled-components'

export const SearchFormContainer = styled.form`
  ${({ theme }) => css`
    display: flex;
    gap: 1rem;

    input {
      flex: 1;
      border-radius: 6px;
      border: 0;
      background: ${theme['gray-900']};
      color: ${theme['gray-300']};
      padding: 1rem;

      &::placeholder {
        color: ${theme['gray-500']};
      }
    }

    button {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      border: 0;
      padding: 1rem;
      background: transparent;
      border: 1px solid ${theme['green-300']};
      color: ${theme['green-300']};
      border-radius: 6px;
      transition: all 0.2s;

      &:hover {
        background: ${theme['green-500']};
        border-color: ${theme['green-300']};
        color: ${theme['white']};
      }
    }
  `}
`
