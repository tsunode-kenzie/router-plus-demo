import React from 'react'
import { LinkStyled as Link } from './styles'

const PokemonCard = ({ name }) => (
    <ul>
      <Link to={`${name}`}>
        <span>
          {name}
        </span>
        <span>
          Ver
        </span>
      </Link>
    </ul>
  )

export default PokemonCard