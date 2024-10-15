import { SignUp } from "@clerk/nextjs"

export default function SignUpPage() {
    return (
        <div className="flex justify-center items-center max-h-screen">
            <SignUp appearance={{
                elements: {
                    formButtonPrimary: 'bg-blue-500 hover:bg-blue-700 text-sm normal-case',
                }
            }} />
        </div>
    )
    

}
