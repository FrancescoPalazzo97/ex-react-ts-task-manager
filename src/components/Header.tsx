import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <nav>
                <ul className="flex p-4 gap-4">
                    <li>
                        <NavLink
                            to='/'
                            className='hover:brightness-150'
                        >Lista Tasks</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/add-task'
                            className='hover:brightness-150'
                        >Aggiungi Task</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
