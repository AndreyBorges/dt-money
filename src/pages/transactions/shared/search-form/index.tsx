import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './styles'

const SearchForm = () => {
  return (
    <SearchFormContainer>
      <input type='text' placeholder='Search for your transactions' />

      <button type='submit'>
        <MagnifyingGlass size={20} />
        Search
      </button>
    </SearchFormContainer>
  )
}

export default SearchForm
