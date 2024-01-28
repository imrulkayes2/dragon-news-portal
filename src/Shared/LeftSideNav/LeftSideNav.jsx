
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div>
            <h2> All Caterogy:{categories.length}</h2>
            {
                categories.map(category => <NavLink to={`/categories/${category.id}`} className='block p-2 font-popience font-semibold' key={category.id}>{category.name}</NavLink>)
            }
        </div>
    );
};

export default LeftSideNav;