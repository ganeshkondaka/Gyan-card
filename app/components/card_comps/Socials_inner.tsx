import { Mail } from 'lucide-react'
import React from 'react'
import type { Socials } from '@prisma/client'

export default function Socials_inner({social_links}:{
    social_links:Socials[]
}) {
    // const lists=['GitHub','Mail','LinkedIn','Twitter']
    // const damal_link=social_links.map((obj)=>{if (obj.name==='GitHub') {return obj.link}})
    const github_link=social_links.map((obj)=>{if (obj.name==='GitHub') return obj.link})
    const mail_link=social_links.map((obj)=>{if (obj.name==='Mail') return obj.link})
    const twitter_link=social_links.map((obj)=>{if (obj.name==='LinkedIn') return obj.link})
    const linkedin_link=social_links.map((obj)=>{if (obj.name==='Twitter') return obj.link})
        // console.log('---------------^^^^^^^^^^github',github_link,mail_link,linkedin_link,twitter_link)
        // console.log('---------------^^^^^^^^^^github',damal_link[0])
        // console.log('---------------^^^^^^^^^^github',mail_link[1])
        // console.log('---------------^^^^^^^^^^github',twitter_link[2])
        // console.log('---------------^^^^^^^^^^github',linkedin_link[3])
    return (
        <div>
            
            <div className="mt-8 flex justify-center gap-4">
                <a href={github_link[0]}>  <svg xmlns="http://www.w3.org/2000/svg" color="gray" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg></a>
                <a href={mail_link[1]}><Mail color="gray" width={20} ></Mail></a>
                <a href={twitter_link[2]}>  <svg xmlns="http://www.w3.org/2000/svg" color="gray" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg></a>
                <a href={linkedin_link[3]}> <svg xmlns="http://www.w3.org/2000/svg" color="gray" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg></a>
            </div>
            <p className="text-green-800 text-center my-2">© 2024 Ganesh. All rights reserved.</p>
            <p className="text-slate-400 text-center my-5">Made with ❤️ By  Ganesh</p>

        </div>
    )
}
