import { useEffect, useState } from "react";
import UserCard from "./UserCard";

const UserListing = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data => {
                console.log(data.users);
                setUsers(data.users);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            {isLoading && <p>Loading...</p>}
            {!isLoading && users && users.map(user => <UserCard name={`${user.firstName} ${user.lastName}`} role={user.email} imageUrl={user.image} key={user.id} />)}
        </>
    );
}

export default UserListing;