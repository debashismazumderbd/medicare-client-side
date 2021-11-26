import React from 'react';
import './Blog.css';




const Blog = () => {

    return (
        <div id='Blog'>
            <h3 className='p-2 our-blog'><marquee behavior="" direction=""><h2 className='fw-bold'>Our Blog:</h2></marquee></h3>
            <h3>Our Client Says:</h3>
            <div className='bloging'>
                {/* bloging */}
                <div className='m-3 border border-warning '>
                  <h3>USA Health marks start of construction of ambulatory surgery center, physician office building on Mapp Family Campus in Baldwin County</h3>
                    <p>“Collaborating with community physicians, providers from USA Health will bring their specialized expertise to meet the healthcare needs of the people in the region,” said Owen Bailey, MHA, FACHE, chief executive officer of USA Health. “As the only academic healthcare system in the region, USA Health continues to expand relationships with community providers and other partners, as we strive to provide increased access to the care that people need and deserve.”</p>

                </div>
                <div  className='m-3 border border-warning '>
                    <h3>Bell ringing marks the end of cancer treatment for brave patients</h3>
                    <p>“It’s always a joy for us when children who have battled cancer come back with their families and loved ones and celebrate the end of their treatment,” Imran said. “We look forward to this day every year.”</p>
                </div>
                <div  className='m-3 border border-warning '>
                    <h3>Expansion of Pediatric Emergency Center at USA Health Children’s & Women’s Hospital marked with ground-breaking ceremony</h3>
                    
                    <p>This will create the first true pediatric emergency center at the hospital,” said Edward Panacek, M.D., M.P.H., chair of the Department of Emergency Medicine. “The center will combine state-of-the-art technology with the advanced practice associated with an academic health center to improve the care provided to everyone who comes through our doors.</p>
                </div>
                <div className='m-3 border border-warning '>
                    <h3>USA Health expands with new obstetrician-gynecologist </h3>
                    <p>After many discussions with my twin sister, Nicolette Holliday, who currently is an OB-GYN at USA Health, I realized I aspired to do more, so I went back to school to become a physician,” Holliday said. “I want to positively impact women by providing them with evidence-based care, so they can be an advocate for themselves and their health.</p>
                </div>

            </div>
            <div className='p-3 m-2 border borde-3'>
                <input type="text" placeholder='subscribe' />
                <button className='btn btn-warning'>Subscribe</button>
            </div>
        </div>
    );
};

export default Blog;