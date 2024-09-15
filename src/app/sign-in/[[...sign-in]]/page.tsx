'use client'
import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Icons } from '@/components/ui/icons'

export default function SignInPage() {
  return (
    <div className="rounded-lg bg-background w-full h-full overflow-scroll mx-2 mb-2 p-2 flex flex-col items-center justify-center">
      <SignIn.Root>
        <Clerk.Loading>
          {(isGlobalLoading) => (
            <>
              <SignIn.Step name="start">
                <Card className="w-full sm:w-96 bg-secondary">
                  <CardHeader>
                    <CardTitle>Sign in to BCUW</CardTitle>
                    <CardDescription>Welcome back! Please sign in to continue</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col">
                      <Clerk.Connection name="discord" asChild>
                        <Button
                          size="lg"
                          variant="outline"
                          type="button"
                          disabled={isGlobalLoading}
                        >
                          <Clerk.Loading scope="provider:discord">
                            {(isLoading) =>
                              isLoading ? (
                                <Icons.spinner className="size-4 animate-spin" />
                              ) : (
                                <>
                                  <Icons.discord className="h-9" />
                                </>
                              )
                            }
                          </Clerk.Loading>
                        </Button>
                      </Clerk.Connection>
                  </CardContent>
                  <CardFooter>
                    <div className="grid w-full gap-y-4">
                      <Button variant="link" size="sm" asChild>
                        <Link href="/sign-up">Don&apos;t have an account? Sign up</Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </SignIn.Step>
            </>
          )}
        </Clerk.Loading>
      </SignIn.Root>
    </div>
  )
}