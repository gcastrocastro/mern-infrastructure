import SignUpForm from '../../Components/SignUpForm/SignUpForm';
import LoginForm from '../../Components/LogInForm/LogInForm';

export default function AuthPage({setUser}) {
    return (
        <>
        <SignUpForm setUser={setUser}/>
        <LoginForm setUser={setUser}/>
        </>
    )
}