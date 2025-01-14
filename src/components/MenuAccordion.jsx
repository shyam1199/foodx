import { MenuItem } from '.'

const MenuAccordion = ({ restaurantId, category, items, visibleCategory, setVisibleCategory, index }) => {
    const isVisible = visibleCategory == index;
    return (
        <div className='mb-6'>
            <div className='flex justify-between'>
                <div className='font-bold text-lg'>{category}</div>
                <button onClick={() => { setVisibleCategory(isVisible ? null : index) }} className='mr-4'>{isVisible ? "▲" : "▼"}</button>
            </div>
            {isVisible && items.map((item, k) => (<MenuItem key={k} {...item} restaurantId={restaurantId} />))}
        </div>
    )
}

export default MenuAccordion