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
            profession: '',
            company: '',
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