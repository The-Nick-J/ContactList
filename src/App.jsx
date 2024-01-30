import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import injectContext from './store/AppContext'
import Home from './views/Home'
import AddContact from './views/AddContact'
import Contacts from './views/Contacts'
import EditContact from './views/EditContact'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/add-contact' element={<AddContact />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/' element={<Home />} />
                <Route path='/edit-contact/:id' element={<EditContact />} />
            </Routes>
        </BrowserRouter>
    )
}

export default injectContext(App)