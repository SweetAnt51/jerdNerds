import { useState } from 'react'
import AppGrid from './AppGrid/AppGrid.js'
import SearchBar from './SearchBar/SearchBar'


export default function Body(props) {

    const [appFilter, setAppFilter] = useState('')

    return (
        <div style={{width:'100%'}}>
            <SearchBar appFilter={appFilter} setAppFilter={setAppFilter}/>
            <AppGrid appFilter={appFilter} theme = {props.theme}/>
        </div>
        
    )
}