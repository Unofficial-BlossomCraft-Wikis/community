'use client'
import * as Clerk from '@clerk/elements/common'
import * as SignUp from '@clerk/elements/sign-up'
import Link from 'next/link'
import { Button } from '~/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import { Icons } from '~/components/ui/icons'

export default function SignUpPage() {
  return (
    <div className="rounded-lg bg-background w-full h-full overflow-scroll mx-2 mb-2 p-2 flex flex-col items-center justify-center">
      <SignUp.Root>
        <Clerk.Loading>
          {(isGlobalLoading: boolean) => (
            <>
              <SignUp.Step name="start">
                <Card className="w-full sm:w-96 bg-secondary">
                  <CardHeader>
                    <CardTitle>Create your account</CardTitle>
                    <CardDescription>
                      Welcome! <b>Please remember you are signing up for a website that is not affiliated with BlossomCraft, and BlossomCraft is not responsible for any of the information you provide</b>.
                    </CardDescription>
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
                        <Link href="/sign-in">Already have an account? Sign in</Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </SignUp.Step>
            </>
          )}
        </Clerk.Loading>
      </SignUp.Root>
    </div>
  )
}