

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signUpSchema } from '@/lib/schema'
import { z } from 'zod'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Form } from '@/components/ui/form'

// Update the import path below to the correct relative path if '@/components/ui/form' does not exist.
// For example, if your form components are in 'components/ui/form.tsx', use:
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Link } from 'react-router'

type SignUpFormData = z.infer<typeof signUpSchema>
const SignUp = () => {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const handleOnSubmit = (data: SignUpFormData) => {
    console.log('Form submitted:', data);
  };
  return (
    <div className='min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4'>
      <Card className='w-full max-w-sm shadow-2xl border-0 bg-white/95 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 ease-in-out animate-fade-in'>
        <CardHeader className='space-y-2 text-center pb-4'>
          <CardTitle className='text-xl font-bold text-gray-900 animate-slide-down'>Create an Account</CardTitle>
          <CardDescription className='text-sm text-gray-600 animate-slide-down animation-delay-100'>Create an new account to continue</CardDescription>
        </CardHeader>
        <CardContent className='space-y-3 px-6 pb-6'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleOnSubmit)} className='space-y-3'>
              <FormField 
                name="email" 
                control={form.control} 
                render={({ field }) => (
                  <FormItem className='space-y-1 animate-slide-up animation-delay-200'>
                    <FormLabel className='text-xs font-medium text-gray-700'>Email</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        type="email" 
                        placeholder="Enter your email"
                        className='h-9 px-3 text-sm border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 hover:border-blue-400 focus:scale-105'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} 
              />
              <FormField 
                name="name" 
                control={form.control} 
                render={({ field }) => (
                  <FormItem className='space-y-1 animate-slide-up animation-delay-300'>
                    <FormLabel className='text-xs font-medium text-gray-700'>Full Name</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        type="text" 
                        placeholder="Enter your full name"
                        className='h-9 px-3 text-sm border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 hover:border-blue-400 focus:scale-105'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} 
              />
               <FormField 
                name="password" 
                control={form.control} 
                render={({ field }) => (
                  <FormItem className='space-y-1 animate-slide-up animation-delay-300'>
                    <FormLabel className='text-xs font-medium text-gray-700'>Password</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        type="password" 
                        placeholder="********"
                        className='h-9 px-3 text-sm border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 hover:border-blue-400 focus:scale-105'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} 
              />
               <FormField 
                name="confirmPassword" 
                control={form.control} 
                render={({ field }) => (
                  <FormItem className='space-y-1 animate-slide-up animation-delay-300'>
                    <FormLabel className='text-xs font-medium text-gray-700'>Confirm Password</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        type="password" 
                        placeholder="********"
                        className='h-9 px-3 text-sm border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 hover:border-blue-400 focus:scale-105'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} 
              />
              <button 
                type="submit"
                className='w-full h-9 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-4 transform hover:scale-105 active:scale-95 animate-slide-up animation-delay-400'
              >
                Sign In
              </button>

            </form>
          </Form>
          <CardFooter> 
            <div className='text-xs text-gray-500 text-center mt-2'>
              <p className='animate-fade-in animation-delay-500'>
               Already have an account? <Link to="/sign-in" className='text-blue-600 hover:underline'>Sign In</Link>
              </p>
            </div>
          </CardFooter>
        </CardContent>
      </Card>
    </div>
  )
}

export default SignUp