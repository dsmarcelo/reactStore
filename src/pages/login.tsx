import { GetServerSideProps } from 'next'
import { unstable_getServerSession } from "next-auth/next"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'
import { LoginForm } from '../components/signInForm'

// export const getServerSideProps: GetServerSideProps = async ({req}) => {
// const { data: session } = await useSession()
//   return {
//     props: {
//       session: await unstable_getServerSession(
//         context.req,
//         context.res,
//         // authOptions
//       ),
//     },
//   }
// }

export default function LoginPage() {
  const router = useRouter();

  const { data: session } = useSession()
  if (session) {
    router.push("/")
  } else {
    return (
      <>
        <LoginForm />
      </>
    )
  }
}