import { createContext, useState, useEffect } from 'react';
import { onAuthStateChangedListener, cerateUserDocumentFromAuth } from '../../utils/firebase/firebse.utils';
// as the actula value we want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null

});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unSubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                cerateUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });


        return unSubscribe;
    }, []);
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};


