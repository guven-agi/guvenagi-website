import { LoginForm } from "./components/login-form";

export default function LoginPage() {
    return <main className="min-w-screen min-h-screen flex flex-col justify-center items-center">
        <div className="text-[3rem]">
            Güven Ağı
        </div>
        <div className="md:w-1/5 md:mx-0 w-full mx-3 border bg-white p-5 rounded-lg shadow-lg">
            <LoginForm />
        </div>
    </main>;
}