import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signInSchema } from '@/lib/schema'
import { z } from 'zod'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Form } from 'react-router'
// Update the import path below to the correct relative path if '@/components/ui/form' does not exist.
// For example, if your form components are in 'components/ui/form.tsx', use:
import { FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

type SigninFormData = z.infer<typeof signInSchema>
const SignIn = () => {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const handleOnSubmit = (data: SigninFormData) => {
    console.log('Form submitted:', data);
  };
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-mutes/40 p-4'>
      <Card  className='w-full max-w-md shadow-xl'>
        <CardHeader>
          <CardTitle>Welcome Back</CardTitle>
          <CardDescription>Sign in to your account to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form} onSubmit={form.handleSubmit(handleOnSubmit)} >
              <FormField name="email" control={form.control} render={({ field }) => (
               <FormItem>
                <FormLabel>Email</FormLabel>
               <FormControl>
                <Input {...field} type="email" placeholder="Email" />
               </FormControl>
               </FormItem>
              )} />
              <FormField name="password" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="Password" />
                  </FormControl>
                </FormItem>
              )} />
            </Form>

        </CardContent>
      </Card>
    </div>
  )
}

export default SignIn