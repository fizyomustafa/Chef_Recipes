import React from 'react'
import { HeaderContainer, MainHeader } from './HeaderStyle'
import Form from "./Form"
const Header = ({setQuery, query, getData, mealTypes, setMeal, meal }) => {
    return (
        <HeaderContainer>
            <MainHeader>
            <p style={{fontFamily : 'Girassol'}}>EAT Food FEEL Good</p>
            </MainHeader>
            <Form
             setQuery={setQuery}
             query={query}
             getData={getData}
             mealTypes={mealTypes}
             setMeal={setMeal}
             meal={meal}
            />

        </HeaderContainer>
    )
}

export default Header
