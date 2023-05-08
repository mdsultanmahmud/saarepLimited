import React, { useEffect, useState,useRef } from 'react';
import './Modal.css'
const Modal = ({ names }) => {
    const [person, setPerson] = useState("")
    const { name, modalStatus, setModalStatus } = names
    const peoples = [
        {
            name: "Lavina Samtani",
            title: "Member Relations",
            email:'Lavinarealtor@Gmail.com',
            comWebsite:'MarylandHomesforus.com',
            address:'240-506-1620',
            profession: 'Realtor',
            company: 'RE/MAX Realty Centre',
            role: '',
            about: "At Saarep, our mission is to create a platform that connects, affiliates, levels up, and grows a diverse group of professionals in the real estate industry. We want to foster an environment where we can collaborate, share ideas, and refer business to one another with confidence. It's amazing to see how many South Asian realtors and other professionals in the DMV area are a part of our community. When I started in real estate 21 years ago, I had no idea how many of us there were and the potential we had to support each other's businesses. Saarep is all about building relationships and creating opportunities for us to learn from each other. When we connect and affiliate with each other, we can level up our performance and grow together. We want all members to feel comfortable getting to know each other and building relationships that will benefit us all. At Saarep, we believe that by working together, we can achieve more than we ever could alone."
        },
        {
            name: "Tanvir Aziz",
            title: "President",
            email:'tanvirA@atoztitle.com',
            comWebsite:'atoztitle.com',
            address:'',
            profession: 'Founder',
            company: 'AtoZ Title and Settlement',
            role: '',
            about: `Life comes in full circle! \n\nLooking back two decades of my professional career in Financial/Real estate industry, my affiliation with various associations helped me to achieve a mindset to evolve, exposed me to learn from a diverse community; moreover these events taught me how to be comfortable being uncomfortable to handle any situation professionally, even personally. \n\nI have been fortunate enough! \n\nDuring my childhood in Bangladesh, I was involved in Boy Scouts at grade 4, followed by joining national cadet corps, and later lucky to be a part of Red Crescent in my middle school, joined world's largest student association AIESEC when I was in high school - exposed me to some tangible opportunities in life. \n\nI have been blessed! \n\nBefore starting SAAREP last year, discussing pain points in the industry; specifically for South Asian Real Estate Professionals, was an eye-opening opportunity since it requires rigorous engagement in the South Asian community to have an overall impact. In order to achieve community wide impact, an association like SAAREP can be instrumental by connecting with the professionals, offering educational seminar, allowing a platform to network with other successful professionals. \n\nI have been on the receiving end throughout my life for such opportunities. Excited to see how we can design SAAREP's future activities to benefit others the similar way.`
        },
        {
            name: "Atul Gupta",
            title: "Treasurer",
            email:'agupta@dmvhomefunding.com',
            comWebsite:'dmvhomefunding.com ',
            address:'703-608-9083',
            profession: 'Owner',
            company: 'DMV Home Funding,LLC',
            role: '',
            about: "As an owner of DMV Home Funding and with more than 18 years’ experience in the mortgage industry my mission statement is quite simple: service, service, service. My goal is to build long-term partnerships with immigrant first-time home buyers and immigrant realtors. No matter how challenging the situation, I will gladly take it on. I am highly responsive, and will complete the process to everyone’s satisfaction. After all, when the loan is approved and closing takes place, everyone wins, the realtors, the mortgage company, the loan officer, and the home buyers. Win-win-win-win! Why I Joined SAREP-   As per my mission I always wanted to help immigrant borrowers and I think SAREP is the best platform to join and help like minded people and eventually help our community."
        },
        {
            name: "Ayesha Ayubi",
            title: "Realtor",
            email:'ayesha.ayubi@penfedrealty',
            comWebsite:'ayeshaayubi.penfedrealty.com',
            address:'571-278-9172, 703-897-4663',
            profession: 'Realtor',
            company: 'Berkshire Hathaway HomeServices PenFed Realty',
            role: '',
            about: "As a Realtor with Berkshire Hathaway HomeServices PenFed Realty, When I think of SAAREP it gives me the sense of belonging, a platform that promotes the highest degree of professional ability in the real estate industry,through shared support and care it fosters a sense of unity among members and create a forum for all real estate professionals."
        },
        {
            name: "Anita George",
            title: "Cultural Director",
            email:'george.anita@rocketmail.com',
            comWebsite:'',
            address:'',
            profession: 'Lender',
            company: 'Titan Lending',
            role: 'Sr loan Officer and Business Development',
            about: "SAAREP, which stands for South Asian Association of Real Estate Professionals, is a fantastic platform designed to provide networking, collaboration, education, consultation, referrals, and cultural events for professionals in the real estate industry. The organization serves as a hub for connecting like-minded individuals within South Asian communities, bringing together individuals from diverse backgrounds and cultures to exchange ideas and best practices. Through their numerous events, they offer valuable insights on the latest trends and developments in the industry, as well as opportunities to learn from experts and engage in meaningful discussions on pressing issues facing the industry. By providing access to resources and fostering collaboration, SAAREP plays a key role in helping real estate professionals succeed and grow their businesses. One of the key goals of SAAREP is to support and empower real estate professionals like yourself, who are looking to make a difference in their communities and grow their businesses. By joining this association, you'll have access to valuable resources, such as mentorship opportunities, educational programs, and networking events, that can help you enhance your skills and knowledge, expand your professional network, and find new career opportunities. Additionally, you'll be able to connect with other professionals who share your vision and passion for making positive changes in the industry, and collaborate on projects and initiatives that can benefit your clients and the community as a whole. Whether you're just starting out or looking to take your career to the next level, SAAREP is an excellent platform that can provide you with the support and guidance you need to achieve your goals. When I started in the lending sector 22 years ago, there was many a times I wished I had the support of my community.I am a long term resident of the DMV area and have two kids and a dog.I am a foodie and love to try new cuisines.In my free time, I also love to travel and experience different cultures and cuisines."
        },
        {
            name: "Nick Rowan",
            title: "Education Director",
            email:'nick@trademarkrealtymd.com',
            comWebsite:'',
            address:'301-230-2300, 443-824-1764',
            profession: 'Real Estate Consultant',
            company: 'Trademark Realty',
            role: '',
            about: "An educated consumer will make educated decisions, and this is particularly crucial to successful Real Estate transactions. An educated consumer has the best chance of avoiding the many pitfalls which might be encountered in today’s Real Estate market.Setting goals – and working collectively with others to achieve those goals – is a byproduct of my South Asian heritage. At an early age, it became evident to me that articulating goals to others to form a cohesive team working toward these goals was the surest way to achieve success.To many, owning your own home is a clear sign of success. It is with this in mind that my job becomes clear. My job is to help others achieve their Real Estate aspirations. Helping someone be successful in their Real Estate journey is my mission. I joined SAAREP because I fully understand and believe in it’s mission of helping to connect the Real Estate community to one another and ultimately build dreams and strengthening the South Asian community. Together we will do great things."
        },
        {
            name: "Jawaid Kotwal",
            title: "Director - Community Engagement",
            email:'Kotwal@KotwalHomes.com',
            comWebsite:'',
            address:'703-581-2312',
            profession: '',
            company: '',
            role: '',
            about: "Jawaid Kotwal is Realtor with 10 years of experience under his belt, a Mortgage Loan Originator, an entrepreneur and a community leader. He is the founder of ALDC- Afghans Living in the DC area, a community group of over 16,000 members, the largest community group of Afghan-Americans in diaspora. He is also on the Board of AAF-Afghan-American Foundation, a national, non-partisan advocacy organization aimed at promoting the interests of Afghan-Americans. Jawaid has been on the forefront of community work, both on the grassroots level, through his work at ALDC for the last ten years, in which he has helped thousands of community members connect with their counterparts and get their needs addressed from community fundraisers, to cultural events, and educational seminars; as well as on the advocacy front through his role as the community liaison at the AAF, which he connects Afghan-American organizations for the greater good of the community. Mr. Kotwal is a natural “connector” with passion for helping others, and empowering the community, with a dream of a unified and strong community that has the capacity to elevate and empower its members. His mission as a real estate professional is to empower the community through home ownership, and to educate them on how to achieve the American dream."
        }
    ]
    useEffect(() => {
        peoples.forEach(pep => {
            if (pep.name === name) {
                setPerson(pep)
            }
        })
    }, [name])
    const modalRef = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setModalStatus(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [modalRef, modalStatus]);
    return (
        <div>
            <input type="checkbox" checked={modalStatus} id="see-bio-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative" id='custom-modal' ref={modalRef}>
                    <label onClick={() => setModalStatus(false)} htmlFor="see-bio-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold ">Read about {person.name}</h3>
                    <p className='py-4 whitespace-pre-line'>{person.about}</p>
                    <div>
                        <p>{person?.name}</p>
                        <p>{person?.profession}</p>
                        <p>{person?.company}</p>
                        <p>{person?.address}</p>
                        <p>{person?.role}</p>
                        <p>{person?.email}</p>
                        <a href={`https://${person?.comWebsite}`} className='link text-green-600' target='_blank'>{person?.comWebsite}</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Modal;