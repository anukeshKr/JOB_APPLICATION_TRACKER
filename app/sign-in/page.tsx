"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export default function Page() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [error, setErrors] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setErrors("");
    setLoading(true);

    try {
      
    } catch (error) {
      setErrors("An Unexpected error occured");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="flex min-h-[cal(100vh-4rem)] items-center justify-center bg-white p-4 pt-15">
      <Card className="w-full max-w-md border-gray-200 shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-black">Sign In</CardTitle>
          <CardDescription className="text-gray-600 text-[15px]">
            Enter your crenditals to access application.
          </CardDescription>
        </CardHeader>
        <form className="space-y-4">
          <CardContent className="flex flex-col gap-3">
            <div className="space-y-2">
              <Label className="text-gray-700" htmlFor="email">Email</Label>
              <Input id="email" className="py-5" type="email" placeholder="JhonDoe@gmail.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label className="text-gray-700" htmlFor="password">Password</Label>
              <Input id="password" type="password" className="py-5" placeholder="Jhon Doe" required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button size="lg" className="w-full mb-3 text-[20px]" type="submit">Sign In</Button>
            <p className="text-[10px] md:text-[20px]">Create a new account? <a href="/sign-up" className="text-primary underline">Sign Up</a></p>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}