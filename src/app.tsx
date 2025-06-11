import React, { useState } from 'react';
import './app.scss';
import { Contact, ExperienceCard2, FlyingBird, HomeBird, HomeFlower, HomeProfile, HomeTitle, NavWheel, TextContent } from 'himshi_ui';
import { experiences } from './content';

const App = () => {
    const [page, setPage] = useState("Experience");
    const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>, page: string) => {
        setPage(page);
        console.log("test btn click...");
    }
    return <>
    <div className='app'>
        <section className="home-page">
            <div className="home-flower"><HomeFlower/></div>
            <div className="home-bird"><FlyingBird/></div>
            <div className="home-title"><HomeTitle/></div>
            <div className="home-profile"><HomeProfile/></div>
        </section>
        <section className='experience-page'>
            {
                Object.entries(experiences)?.map(([expKey, experience], idx) => {
                    const ParagraphItem = () => <TextContent contents={experience?.exp}/>
                    return <div className={`experience-card__wrapper ${(idx%2 === 0 ) ? 'experience-card__wrapper_left_align' : 'experience-card__wrapper_right_align'}`}><ExperienceCard2 title={expKey} image={experience?.image} children={<ParagraphItem/>} subTitle={experience?.subTitle} barChartContentList={experience?.barChartContentList}  /></div>
                })
            }
        </section>
        <section>
            <Contact/>
        </section>
    </div>
    </>
}

export default App;``