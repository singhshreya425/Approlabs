import React, { useEffect, useState } from 'react'
import './NewList.css'
import axios from 'axios'

const NewsList = () => {
    let data = [
        {
            "title": "Sudanese paramilitary group claims control of presidential palace as fighting flares - CNN",
            "description": "At least three people have been killed after long standing tensions between the Sudanese army and a paramilitary group erupted into open fighting.",
            "url": "https://www.cnn.com/2023/04/15/africa/sudan-presidential-palace-intl/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230415071804-02-sudan-unrest-0415.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-04-15T16:05:00Z",
        },
        {
            "title": "‘The Super Mario Bros Movie’ Mushrooming To $659M Worldwide Through Sunday – International Box Office - Deadline",
            "description": "After passing $500M globally through Thursday, Illumination/Nintendo/Universal’s The Super Mario Bros Movie is now on its way to an estimated $659M through Sunday worldwide. Of that, the internatio…",
            "url": "https://deadline.com/2023/04/super-mario-bros-movie-second-weekend-global-international-box-office-1235326157/",
            "urlToImage": "https://deadline.com/wp-content/uploads/2023/04/MCDSUMA_UV009.jpg?w=1024",
            "publishedAt": "2023-04-15T15:53:00Z",
            "content": "After passing $500M globally through Thursday, Illumination/Nintendo/Universal’s The Super Mario Bros Movie is now on its way to an estimated $659M through Sunday worldwide. Of that, the internationa… [+2081 chars]"
        },
        {
            "author": "MICHAEL CASEY | Associated Press",
            "title": "Boston remembers terror, horror of marathon bombing 10 years later - KATU",
            "description": "The day never leaves me,",
            "url": "https://wjla.com/news/nation-world/boston-remembers-terror-horror-of-marathon-bombing-10-years-later-terrorism-isis-barack-obama-race-athletes-tamerlan-dzhokhar-tsarnaev-death-penalty-athletic-association-one-boston-day-tragedy-death-civilians-innocent",
            "urlToImage": "https://wjla.com/resources/media/10c69e19-b34d-4c73-99e9-4c18a76de596-large16x9_AP23103777909153.jpg?1681569765107",
            "publishedAt": "2023-04-15T15:06:28Z",
            "content": null
        },
        {
            "author": "Nicki Gostin",
            "title": "Shawn Mendes and ex Camila Cabello reunite at Coachella after breakup - Page Six",
            "description": "The exes sent the internet into overdrive after they were spotted chatting and partying together at a Coachella bash, sparking rumors of a reunion.",
            "url": "https://pagesix.com/2023/04/15/shawn-mendes-and-ex-camila-cabello-reunite-at-coachella-after-breakup/",
            "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2023/04/Shawn-Mendes-and-Camila-Cabello-share-kiss-at-Coachella-one-year-after-breakup.jpg?quality=75&strip=all&w=1200",
            "publishedAt": "2023-04-15T14:45:00Z",
            "content": "Is she in his blood?\r\nExes Shawn Mendes and Camila Cabello were spotted chatting at Coachella on Friday, a little over a year after their split.\r\nThe “Stitches” singer, 24, and the “Havanna” pop star… [+2542 chars]"
        },
        {
            "author": "Frank Jordans",
            "title": "Powering down: Germany's last nuclear plants in final hours - The Associated Press",
            "description": "BERLIN (AP) — Germany began winding down its three remaining nuclear power plants Saturday as part of a long-planned transition toward renewable energy, drawing cheers from environmentalists who campaigned for the move.",
            "url": "https://apnews.com/article/germany-nuclear-power-plants-shut-energy-376dfaa223f88fedff138b9a63a6f0da",
            "urlToImage": "https://storage.googleapis.com/afs-prod/media/d7930d689b4a4591bc8f06213fdcb16f/3000.webp",
            "publishedAt": "2023-04-15T14:23:25Z",
            "content": "BERLIN (AP) Germany began winding down its three remaining nuclear power plants Saturday as part of a long-planned transition toward renewable energy, drawing cheers from environmentalists who campai… [+5205 chars]"
        },
    ]
    let [ News , SetNews ] = useState(data)

    let latestNews = async ()=>{
        let data = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=528fc64bcdba4cbc9b8b6d12bfda5b67&pagesize=5')
        data = data.data
        SetNews(data.articles)
    }
    useEffect(() => {
        latestNews()
    }, [latestNews])
    
  return (
    <div>
   <div className='pb-8'>
   <p className='text-2xl font-bold inline border-b-4 border-gray-500'>New & Update</p> 
</div>
{ News.map((e)=>    
    <div className="list-item">
    <img src={e.urlToImage} alt="Item" />
    <div>
      <p><a className='text-black' href={e.url} >{e.title}</a> </p>
      <span>{e.publishedAt}</span>
    </div>
  </div>)}
  </div>
  )
}

export default NewsList
