
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MyArtCraftLists = () => {
    const { userEmail } = useParams(); 
    const [craftItems, setCraftItems] = useState([]); 

    useEffect(() => {
        const fetchCraftItems = async () => {
            try {
                const response = await fetch(`http://localhost:5000/craftItems/user/${userEmail}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch craft items');
                }
                const data = await response.json();
                console.log(data);
                setCraftItems(data);
            } catch (error) {
                console.error('Error fetching craft items:', error);
               
            }
        };

        fetchCraftItems();
    }, [userEmail]); 

    return (
        <div className='text-center text-lg mb-20'>
            <h2>Craft Items for User: {craftItems.length}</h2>
            <ul>
                {craftItems.map(item => (
                    <li key={item._id}>
                        <p>Name: {item.craftItemName}</p>
                        <p>Price: {item.price}</p>
                        
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MyArtCraftLists;

