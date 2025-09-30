import { redirect } from 'next/navigation'

export default function page() {
    return (
        redirect("/auth/level-1")
    )
}
