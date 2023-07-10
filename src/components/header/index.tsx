import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from 'assets/logo.svg'
import { NewTransactionsModal } from '..'
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt='dt money logo' />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>New Transactions</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionsModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
