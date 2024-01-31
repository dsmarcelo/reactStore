import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'
import { LoginForm } from '../components/signInForm'

export default function LoginPage() {
  const router = useRouter();
  const { data: session } = useSession()

  if (session) {
    router.isFallback ?
      router.back() :
      router.push("/")
  } else {
    return (
      <>
        <LoginForm />
      </>
    )
  }
}