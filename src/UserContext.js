import React, { createContext, useState, useContext } from 'react';


const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);


    const login = (email, password, registeredUsers) => {
        const user = registeredUsers.find(user => user.email === email && user.password === password);
        if (user) {
            setCurrentUser(user);
            return true;
        } else {
            return false;
        }
    };


    const logout = () => {
        setCurrentUser(null);

    };

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};
