import Header from '../Helper/Header';
import Center from '../Helper/Center';

import LoginForm from './LoginForm';

import { AuthContextProvider } from "../../Store/auth-context";

const Admin = () => {
    return (
        <AuthContextProvider>
            <Header pageName="Admin" />
            <Center>
                <LoginForm />
            </Center>
        </AuthContextProvider>
    )
}

export default Admin