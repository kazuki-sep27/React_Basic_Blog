import Header from '../Helper/Header';
import Center from '../Helper/Center';

import LoginForm from './LoginForm';

const Admin = () => {
    return (
        <>
            <Header pageName="Admin" />
            <Center>
                <LoginForm />
            </Center>
        </>
    )
}

export default Admin