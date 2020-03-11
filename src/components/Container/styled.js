import styled from 'styled-components'

const ThemeContainer = styled.div`
  width: 100%;
  max-width: ${({ small }) => small ? '80rem' : '149rem'};
  padding: 0 1.6rem;
  margin: 0 auto;
`

export {
  ThemeContainer
}
