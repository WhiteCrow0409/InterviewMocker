import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { dummyInterviews } from '@/constants'
import InterviewCard from '@/components/InterviewCard'
const page = () => {
  return (
    <>
    <section className='card-cta'>
          <div className='flex flex-col gap-6 max-w-lg'>
                <h2>Get Ready for Interview</h2>
                <p className='text-lg'>
                    Practice to ace the Interview
                </p>
                <Button asChild className="btn-primary max-sm:w-full">
                    <Link href="/interview">Chaliye Interview Shuru Karte Hai </Link>
                </Button>
          </div>
          <Image src="/pan.png" alt="robo-dude" width={100} height={100} className="max-sm:hidden" />
    </section>
    <section className='flex flex-col gap-6 mt-8'>
        <h2>Your Interviews</h2>
        <div className='interviews-section'>
             {dummyInterviews.map((interview)=>(
                  <InterviewCard{...interview} key={interview.id}/>
              ))}
        </div>
    </section>
    <section className='flex flex-col gap-6 mt-8'>
      <h2>Take an Interview</h2>
      <div className='interviews-section'>

      {dummyInterviews.map((interview)=>(
                  <InterviewCard{...interview} key={interview.id}/>
              ))}
              {/* <p>There are no interviews</p> */}
      </div>
    </section>
    </>
  )
}

export default page
