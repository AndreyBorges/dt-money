import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { css, styled } from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`
export const Content = styled(Dialog.Content)`
  ${({ theme }) => css`
    min-width: 32rem;
    border-radius: 6px;
    padding: 2.5rem 3rem;
    background: ${theme['gray-800']};

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    form {
      margin-top: 2rem;

      display: flex;
      flex-direction: column;
      gap: 1rem;

      input {
        border-radius: 6px;
        border: 0;
        background: ${theme['gray-900']};
        color: ${theme['gray-300']};
        padding: 1rem;

        &::placeholder {
          color: ${theme['gray-500']};
        }
      }

      > button {
        margin-top: 1.5rem;
        height: 58px;
        border: 0;
        background: ${theme['green-500']};
        color: ${theme['white']};
        font-weight: bold;
        padding: 0 1.25rem;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.2s;
        text-transform: capitalize;

        &:hover {
          background: ${theme['green-700']};
        }
      }
    }
  `}
`

export const CloseButton = styled(Dialog.Close)`
  ${({ theme }) => css`
    position: absolute;
    background: transparent;
    border: 0;
    top: 1.5rem;
    right: 1.5rem;
    line-height: 0;
    cursor: pointer;
    color: ${theme['gray-500']};
  `}
`
export const TransactionsType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 0.5rem;
`

interface TransactionsButtonTypeProps {
  variant: 'income' | 'outcome'
}

export const TransactionsButtonType = styled(RadioGroup.Item)<TransactionsButtonTypeProps>`
  ${({ theme, variant }) => css`
    background: ${theme['gray-700']};
    color: ${theme['gray-300']};
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    gap: 6px;
    cursor: pointer;
    padding: 1rem;
    transition: all 0.2s;
    text-transform: capitalize;

    svg {
      color: ${variant === 'income' ? theme['green-300'] : theme['red-300']};
    }

    &[data-state='unchecked']:hover {
      background: ${theme['gray-600']};
    }

    &[data-state='checked'] {
      color: ${theme['white']};
      background: ${variant === 'income' ? theme['green-500'] : theme['red-500']};
      svg {
        color: ${theme['white']};
      }
    }
  `}
`
