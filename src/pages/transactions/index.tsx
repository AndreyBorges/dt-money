import { Header, Summary } from 'components'
import { PriceHighlight, TransactionsContainer, TransactionsTable } from './styles'
import { SearchForm } from './shared'

const Transactions = () => {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width='50%'>Desenvolvimento de website</td>
              <td>
                <PriceHighlight variant='income'>$ 3500,00</PriceHighlight>
              </td>
              <td>Deposito</td>
              <td>20/02/2021</td>
            </tr>
            <tr>
              <td width='50%'>Lanche</td>
              <td>
                <PriceHighlight variant='outcome'>- $ 200,00</PriceHighlight>
              </td>
              <td>pix</td>
              <td>20/02/2021</td>
            </tr>
            <tr>
              <td width='50%'>Conta de luz</td>
              <td>
                <PriceHighlight variant='outcome'>- $ 400,00</PriceHighlight>
              </td>
              <td>Pix</td>
              <td>20/02/2021</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}

export default Transactions
