import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay, TransactionsButtonType, TransactionsType } from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

const NewTransactionsModal = () => {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>New Transactions</Dialog.Title>

        <CloseButton asChild>
          <X size={24} />
        </CloseButton>
        <form action=''>
          <input type='text' placeholder='Description' required />
          <input type='number' placeholder='Price' required />
          <input type='text' placeholder='Category' required />

          <TransactionsType>
            <TransactionsButtonType variant='income' value='income'>
              <ArrowCircleUp size={24} />
              Input
            </TransactionsButtonType>
            <TransactionsButtonType variant='outcome' value='outcome'>
              <ArrowCircleDown size={24} />
              Output
            </TransactionsButtonType>
          </TransactionsType>

          <button type='submit'>register</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}

export default NewTransactionsModal
