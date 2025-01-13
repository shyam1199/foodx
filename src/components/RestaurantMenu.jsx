import { useEffect, useState } from 'react'
import menuData from "../data/restaurnatMenu.json"
import { MenuAccordion } from '.';

const RestaurantMenu = () => {
    const [menu, setMenu] = useState();
    const [visibleCategory, setVisibleCategory] = useState(0);
    useEffect(() => {
        setTimeout(() => { setMenu(menuData) }, 1000)
    }, [])

    if (!menu) return <div>Shimmer Menu</div>

    return (
        <div className='w-5/12 mx-auto'>
            {menu.map((category, index) => (<MenuAccordion {...category} key={index} index={index} visibleCategory={visibleCategory} setVisibleCategory={setVisibleCategory} />))}
        </div>
    )
}

export default RestaurantMenu