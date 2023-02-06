import { createSlice } from '@reduxjs/toolkit'

const initialState= [{
    employe_id: "1",
    first_name: "Leonel",
    last_name: "Messi",
    email: "leonel.messi@vortex-it.com",
    phone_number: "2654621",
    hire_date: "15092018",
    salary:"180000",
    commission_pct:""
},
{
    employe_id: "2",
    first_name: "Pedro",
    last_name: "fasdfasd",
    email: "pedro@vortex-it.com",
    phone_number: "165132132",
    hire_date: "15092018",
    salary:"180000",
    commission_pct:""
},
{
    employe_id: "3",
    first_name: "Leonel",
    last_name: "Messi",
    email: "leonel.messi@vortex-it.com",
    phone_number: "15092018",
    hire_date: "15092018",
    salary:"180000",
    commission_pct:""
}
]

export const employesSlice = createSlice({
    name: 'EMPLOYES',
    initialState,
    reducers: {
        
    }
})

export const { } = employesSlice.actions

export default employesSlice.reducer