import { useEffect, useState } from 'react'
import { MenuAccordion } from '.';
import { useParams } from 'react-router-dom';
import { getMenuList } from '../backend/services/restaurant';

const RestaurantMenu = () => {
    const [menu, setMenu] = useState();
    const [visibleCategory, setVisibleCategory] = useState(0);
    const { restaurantId } = useParams()
    useEffect(() => {
        getMenuList(restaurantId).then((data) => { setMenu(data)})
    }, [])

    if (!menu) return <div>Shimmer Menu</div>

    return (
        <div className='w-5/12 mx-auto'>
            {
                menu.map((category, index) => (
                    <MenuAccordion
                        key={index}
                        {...category}
                        index={index}
                        visibleCategory={visibleCategory}
                        setVisibleCategory={setVisibleCategory}
                        restaurantId={restaurantId}
                    />))
            }
        </div>
    )
}

export default RestaurantMenu