import { SignIn } from "@clerk/nextjs"

export default function SignInPage() {
    return (
        <div className="flex justify-center items-center max-h-screen">
            <SignIn appearance={{
                elements: {
                    formButtonPrimary: 'bg-blue-500 hover:bg-blue-700 text-sm normal-case',
                }
            }} />
        </div>
    )
    

}
