import { css, styled } from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const TransactionsTable = styled.table`
  ${({ theme }) => css`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    margin-top: 1.5rem;

    td {
      padding: 1.25rem 2rem;
      background: ${theme['gray-700']};
      &:first-of-type {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }
      &:last-of-type {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }
  `}
`
interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  ${({ theme, variant }) => css`
    color: ${variant === 'income' ? theme['green-300'] : theme['red-300']};
  `}
`
