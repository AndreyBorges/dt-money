import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { SummaryCard, SummaryContainer } from './styles'

const Summary = () => {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>inputs</span>
          <ArrowCircleUp size={32} color='#00b37e' />
        </header>

        <strong>$17.400,00</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>outputs</span>
          <ArrowCircleDown size={32} color='#f75a68' />
        </header>
        <strong>$17.400,00</strong>
      </SummaryCard>
      <SummaryCard variant='green'>
        <header>
          <span>total</span>
          <CurrencyDollar size={32} color='#FFF' />
        </header>
        <strong>$17.400,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}

export default Summary
