import Explorar from "../Tabs/Explorar";
import Perfil from "../Tabs/Perfil";
import Principal from "../Tabs/Principal";
import Consulta from "../Tabs/Consulta";

const tabs = [
    {
        id: 0,
        name: 'Principal',
        component: Principal,
        icon: 'home',

    },
    {   
        id: 1,
        name: 'Consulta',
        component: Consulta,
        icon: 'calendar',
    },
    {
        id: 2,
        name: 'Explorar',
        component: Explorar,
        icon: 'search',

    },
    {
        id: 3,
        name: 'Perfil',
        component: Perfil,
        icon: 'person',

    },

]
export default tabs;        
