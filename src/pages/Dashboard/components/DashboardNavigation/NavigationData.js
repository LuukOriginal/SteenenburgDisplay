import * as FaIcons from 'react-icons/fa'

export const navigationData = [
    {
        title: "Plattegrond",
        path: "",
        icon: <FaIcons.FaMap className='dashboard-nav-icon'/>
    },
    {
        title: "Onderhoud",
        path: "onderhoud",
        icon: <FaIcons.FaTools className='dashboard-nav-icon'/>
    },
    {
        title: "Instellingen",
        path: "instellingen",
        icon: <FaIcons.FaCog className='dashboard-nav-icon'/>
    }
]