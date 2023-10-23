import React from "react";
import UserList from "../components/UserList";

const Users = () =>{
    const USER = [{
        id : "u1",
        image: "https://pbs.twimg.com/profile_images/989264864840376320/KcbOysLO_400x400.jpg",
        name : "Furkan Ayhan",
        genres: "Loves Action, Comedy, Drama Movies and Tv Shows",
        reviewCount : 3

    },
    {
        id : "u2",
        image: "https://pbs.twimg.com/profile_images/989264864840376320/KcbOysLO_400x400.jpg",
        name : "Furkan Ayhan",
        genres: "Loves Action, Comedy, Drama Movies and Tv Shows",
        reviewCount : 3

    }
]
    return <UserList items = {USER}/>
}

export default Users;