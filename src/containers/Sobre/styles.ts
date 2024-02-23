import styled from 'styled-components'

export const GithubSecao = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;
  max-width: 744px;

  img {
    height: 180px;

    @media (max-width: 768px) {
      height: auto;
      max-width: 100%;
    }
  }
`
