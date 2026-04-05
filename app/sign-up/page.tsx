"use client"

import { Button } from "@/components/ui/button"
import { signUp } from "@/lib/auth-client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SingUp() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const [error, setErrors] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        setErrors("");
        setLoading(true);

        try {
            const result = await signUp.email({
                name, email, password
            })

            if(result.error){
                setErrors(result.error?.message ?? "Failed to sign up ")
            }else{
                router.push('/dashboard')
            }
        } catch (error) {
            setErrors("An Unexpected error occured");
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="flex min-h-[cal(100vh-4rem)] items-center justify-center bg-white p-4 pt-16">
            <Card className="w-full max-w-md border-gray-200 shadow-lg">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-black">Sign Up</CardTitle>
                    <CardDescription className="text-gray-600 text-[15px]">
                        Create a account to start tracking your job application.
                    </CardDescription>
                </CardHeader>
                <form className="space-y-4">
                    {
                        error && (
                            <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">{error}</div>
                        )
                    }
                    <CardContent className="flex flex-col gap-3">
                        <div className="space-y-2">
                            <Label className="text-gray-700" htmlFor="name">Name</Label>
                            <Input className="" id="name" type="text" placeholder="Jhon Doe" required value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-gray-700" htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="JhonDoe@gmail.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-gray-700" htmlFor="password">Password</Label>
                            <Input id="password" type="password" placeholder="Jhon Doe" required value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col">
                        <Button size="lg" className="w-full mb-3 text-[20px]" type="submit" disabled={loading}>
                        {loading ? "Creating Account...." : "Sign Up"}

                        </Button>
                        <p className="text-[20px]">Alredy have a account? <a href="/sign-in" className="text-primary underline">Sign In</a></p>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}