"use client"
import { signOut } from "@/lib/auth/auth-client"
import { DropdownMenuItem } from "./ui/dropdown-menu"

export default function SignOutFunction() {
    return (
        <DropdownMenuItem onClick={async() => await signOut()}>
            Log Out
        </DropdownMenuItem>
    )
}