import React, { useEffect, useState,useRef } from 'react';
import './Modal.css'
const Modal = ({ names }) => {
    const [person, setPerson] = useState("")
    const { name, modalStatus, setModalStatus } = names
    const peoples = [
        {
            name: "Lavina Samtani",
            title: "Member Relations",
            profession: '',
            company: '',
            role: '',
            about: "At Saarep, our mission is to create a platform that connects, affiliates, levels up, and grows a diverse group of professionals in the real estate industry. We want to foster an environment where we can collaborate, share ideas, and refer business to one another with confidence. It's amazing to see how many South Asian realtors and other professionals in the DMV area are a part of our community. When I started in real estate 21 years ago, I had no idea how many of us there were and the potential we had to support each other's businesses. Saarep is all about building relationships and creating opportunities for us to learn from each other. When we connect and affiliate with each other, we can level up our performance and grow together. We want all members to feel comfortable getting to know each other and building relationships that will benefit us all. At Saarep, we believe that by working together, we can achieve more than we ever could alone."
        },
        {
            name: "Tanvir Aziz",
            title: "President",
            profession: 'Founder',
            company: 'AtoZ Title and Settlement',
            role: '',
            about: "SAAREP – an idea started with the creation of a professional networking platform for South Asian Real Estate Professionals in DC, MD and VA. Slowly we evolved in last few months, and it was incredible to find out that to reach our objective to have an Informed Home Ownership, it requires support and engagement that goes beyond just having a platform for professionals who are directly involved with Real Estate. Now SAAREP approach has changed to – “Anyone contributing to the Real Estate industry, directly and indirectly”. Such objective aims to serve anyone who needs access to a platform that aims to contribute to improving lives for the entire community. How real estate is intertwined with everything that we do in our daily lives, requires our rigorous involvement to create leadership in the community, to strengthen access to professional knowledge base and especially have a vision toward wealth building for all. I spanly believe that our unconditional dedication and support for each other’s growth is already happening withing the community. Having a network like SAAREP, it creates more opportunities for everyone to leverage growing personally and professionally which will lead to an “Informed Home Ownership” journey for the entire community, and beyond."
        },
        {
            name: "Atul Gulta",
            title: "Treasurer",
            profession: '',
            company: '',
            role: '',
            about: "As an owner of DMV Home Funding and with more than 18 years’ experience in the mortgage industry my mission statement is quite simple: service, service, service. My goal is to build long-term partnerships with immigrant first-time home buyers and immigrant realtors. No matter how challenging the situation, I will gladly take it on. I am highly responsive, and will complete the process to everyone’s satisfaction. After all, when the loan is approved and closing takes place, everyone wins, the realtors, the mortgage company, the loan officer, and the home buyers. Win-win-win-win! Why I Joined SAREP-   As per my mission I always wanted to help immigrant borrowers and I think SAREP is the best platform to join and help like minded people and eventually help our community."
        },
        {
            name: "Ayesha Ayubi",
            title: "Director - Business Relations",
            profession: '',
            company: '',
            role: '',
            about: "As a Realtor with Berkshire Hathaway HomeServices PenFed Realty, When I think of SAAREP it gives me the sense of belonging, a platform that promotes the highest degree of professional ability in the real estate industry,through shared support and care it fosters a sense of unity among members and create a forum for all real estate professionals."
        },
        {
            name: "Anita George",
            title: "Cultural Director",
            profession: 'Profession Lender',
            company: 'Company Titan Lending',
            role: 'Role Sr loan Officer and Business Development',
            about: "SAAREP, which stands for South Asian Association of Real Estate Professionals, is a fantastic platform designed to provide networking, collaboration, education, consultation, referrals, and cultural events for professionals in the real estate industry. The organization serves as a hub for connecting like-minded individuals within South Asian communities, bringing together individuals from diverse backgrounds and cultures to exchange ideas and best practices. Through their numerous events, they offer valuable insights on the latest trends and developments in the industry, as well as opportunities to learn from experts and engage in meaningful discussions on pressing issues facing the industry. By providing access to resources and fostering collaboration, SAAREP plays a key role in helping real estate professionals succeed and grow their businesses. One of the key goals of SAAREP is to support and empower real estate professionals like yourself, who are looking to make a difference in their communities and grow their businesses. By joining this association, you'll have access to valuable resources, such as mentorship opportunities, educational programs, and networking events, that can help you enhance your skills and knowledge, expand your professional network, and find new career opportunities. Additionally, you'll be able to connect with other professionals who share your vision and passion for making positive changes in the industry, and collaborate on projects and initiatives that can benefit your clients and the community as a whole. Whether you're just starting out or looking to take your career to the next level, SAAREP is an excellent platform that can provide you with the support and guidance you need to achieve your goals. When I started in the lending sector 22 years ago, there was many a times I wished I had the support of my community.I am a long term resident of the DMV area and have two kids and a dog.I am a foodie and love to try new cuisines.In my free time, I also love to travel and experience different cultures and cuisines."
        },
        {
            name: "Nick Rowan",
            title: "Education Director",
            profession: 'Real Estate Consultant',
            company: 'Trademark Realty',
            role: '',
            about: "An educated consumer will make educated decisions, and this is particularly crucial to successful Real Estate transactions. An educated consumer has the best chance of avoiding the many pitfalls which might be encountered in today’s Real Estate market.Setting goals – and working collectively with others to achieve those goals – is a byproduct of my South Asian heritage. At an early age, it became evident to me that articulating goals to others to form a cohesive team working toward these goals was the surest way to achieve success.To many, owning your own home is a clear sign of success. It is with this in mind that my job becomes clear. My job is to help others achieve their Real Estate aspirations. Helping someone be successful in their Real Estate journey is my mission. I joined SAAREP because I fully understand and believe in it’s mission of helping to connect the Real Estate community to one another and ultimately build dreams and strengthening the South Asian community. Together we will do great things."
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
                    <p className='py-4 text-justify'>{person.about}</p>
                    <div>
                        <p><span className='uppercase'>profession: </span>{person.profession}</p>
                        <p><span className='uppercase'>Company: </span>{person.company}</p>
                        <p><span className='uppercase'>Role: </span>{person.role}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Modal;