"use client"

import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { z } from "zod"
import Image from 'next/image'
import { toast } from 'sonner'
import FormField from './FormField'
import { useRouter } from 'next/navigation'

const authFormSchema = ( type :FormType) =>{
  return z.object({
    name : type === 'sign-up' ? z.string().min(3) : z.string().optional(),
    email : z.string().email(),
    password : z.string().min(3),
  })
}

const AuthForm = ({type} :{type:FormType}) => {
  const router = useRouter();
    const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
   try{
      if(type === 'sign-up'){
        toast.success('welcome here Rookie. Please sign in')
        router.push('/sign-in')
      }
      else{
        toast.success('Sign in Successfull')
        router.push('/')
      }
   }
   catch(error){
    console.log(error);
    toast.error(`there is an error : ${error}`)
   }
  }
  const isSignIn = type==='sign-in'
  return (
    <div className="card-boarder lg:min-w-[566px]">
        <div className='flex flex-col gap-6 card py-14 px-10'>
            <div className="flex flex-row gap-2 justify-center">
                <Image src="/logo.svg" alt="logo" height={65} width={50}/>
                <h2 className="text-primary/80">Job-Osthadi-Neeku</h2>
            </div>
            {/* <h3>Interview ? piece of cake</h3> */}
        
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
               {!isSignIn && (
                <FormField 
                  control={form.control} 
                  name="name" 
                  label ="Username" 
                  placeholder="Username"/>
               )}
               <FormField 
                  control={form.control} 
                  name="email" 
                  label ="Email" 
                  placeholder="xyz@email.com"
                  type="email"
                  />
               <FormField 
                  control={form.control} 
                  name="password" 
                  label ="Password" 
                  placeholder="Password"
                  type="password"
                  />
                  
                <Button className="btn" type="submit">{isSignIn? 'Sign In' :'Create an Account'}</Button>
            </form>
            </Form>
            <p  className="text-center">
               {isSignIn? 'Rookie ?' : 'Amateur Already ?'}
               <Link href={!isSignIn ? '/sign-in':'/sign-up'} className="font-bold text-user-primary ml-1">
               {!isSignIn ? "Sign in":"Sign up"}
               </Link>
            </p>
            </div>
    </div>
  )
}

export default AuthForm
