import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";

const ContactInformation = () => {
    return (
        <div>
            <div className="py-10 bg-gray-100">
                <h3 className="text-[#FB6542] text-5xl font-semibold text-center pb-5">Get In Touch With Us</h3>
                <p className="text-center text-[#2A3132] font-normal text-base">Contact us for expert advice, product inquiries, or support services. Experience top-notch service<br /> and discover innovative solutions tailored just for you</p>
            </div>
            <div className="flex gap-5 max-w-5xl mx-auto py-20">
                <div className="bg-gray-100 hover:bg-gray-300 hover:text-white w-96 flex flex-col justify-center items-center">
                    <div className="bg-[#FB6542] p-5 -translate-y-8 rounded-md">
                        <FaPhone className="text-white text-3xl text-center"></FaPhone>
                    </div>
                    <div className="pb-10">
                        <h2 className="text-[#2A3132] text-center font-bold text-xl">Talk To Us</h2>
                        <p className="text-gray-800 text-center"><span className="font-semibold">Toll-Free:</span> 0803 - 080 - 3081</p>
                        <p className="text-gray-800 text-center"><span className="font-semibold">Fax:</span> 0803 - 080 - 3082</p>
                    </div>
                </div>
                <div className="bg-gray-100 hover:bg-gray-300 hover:text-white w-96 flex flex-col justify-center items-center">
                    <div className="bg-[#FB6542] p-5 -translate-y-8 rounded-md">
                        <IoMdMail className="text-white text-3xl text-center"></IoMdMail>
                    </div>
                    <div className="pb-10">
                        <h2 className="text-[#2A3132] text-center font-bold text-xl">Contact Us</h2>
                        <p className="text-gray-800 text-center">techtron@mail.com</p>
                        <p className="text-gray-800 text-center">support@techtron.com</p>
                    </div>
                </div>
                <div className="bg-gray-100 hover:bg-gray-300 hover:text-white w-96 flex flex-col justify-center items-center">
                    <div className="bg-[#FB6542] p-5 -translate-y-8 rounded-md">
                        <FaLocationArrow className="text-white text-3xl text-center"></FaLocationArrow>
                    </div>
                    <div className="pb-10">
                        <h2 className="text-[#2A3132] text-center font-bold text-xl">Location</h2>
                        <p className="text-gray-800 text-center">No: 58 A, East Madison Street,</p>
                        <p className="text-gray-800 text-center">Baltimore, MD, USA 4508</p>
                    </div>
                </div>
                <div className="bg-gray-100 hover:bg-gray-300 hover:text-white w-96 flex flex-col justify-center items-center">
                    <div className="bg-[#FB6542] p-5 -translate-y-8 rounded-md">
                        <FaRegClock className="text-white text-3xl text-center"></FaRegClock>
                    </div>
                    <div className="pb-10">
                        <h2 className="text-[#2A3132] text-center font-bold text-xl">Opening Hours</h2>
                        <p className="text-gray-800 text-center">Mon – Sat 9 am to 8 pm</p>
                        <p className="text-gray-800 text-center">Sun – 10 am to 3 pm</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInformation;