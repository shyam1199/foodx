import { useEffect, useState } from 'react'
import { MenuAccordion, RestaurantShimmerMenu } from '.';
import { useParams } from 'react-router-dom';
import { getMenuList } from '../backend/services/restaurant';

const RestaurantMenu = () => {
    const [menu, setMenu] = useState();
    const [visibleCategory, setVisibleCategory] = useState(0);
    const [showCategory, setShowCategory] = useState(false);
    const { restaurantId } = useParams()
    useEffect(() => {
        getMenuList(restaurantId).then((data) => { setMenu(data) })
    }, [])

    if (!menu) return < RestaurantShimmerMenu />

    return (
        <div className='w-10/12 md:w-5/12 mx-auto'>
            <div>
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
            <div>
                {showCategory && (
                    <div className="fixed bottom-16 w-10/12 md:w-5/12 bg-gray-900 text-white rounded-lg shadow-lg p-4">
                        {menu.map(({ category }, index) => (
                            <div key={index} onClick={() => { setShowCategory(!showCategory); setVisibleCategory(index) }} className="py-2 px-4 border-b border-gray-700 last:border-none hover:bg-gray-800">
                                {category}
                            </div>
                        ))}
                    </div>
                )}
                <div onClick={() => setShowCategory(!showCategory)} className="fixed w-14 h-14 bottom-24 right-8 md:right-[32%] rounded-full bg-black text-white flex items-center justify-center cursor-pointer shadow-lg hover:bg-gray-800" >
                    Menu
                </div>
            </div>

        </div >
    )
}

export default RestaurantMenu