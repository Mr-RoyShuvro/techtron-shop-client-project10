import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import ContactInformation from './ContactInformation';


const mapContainerStyle = {
    width: '600px',
    height: '600px',
};
const center = {
    lat: -34.397,
    lng: 150.644,
};

const Contact = () => {
    return (
        <div className='bg-white py-20'>
            <ContactInformation></ContactInformation>
            <div className='flex flex-col md:flex-row max-w-6xl mx-auto'>
                <div className=" w-1/2">
                    <div className="hero h-[600px]"
                        style={{
                            backgroundImage: "url(https://i.ibb.co/ZSQmc2B/oppo-Vc-Vr-NIob-Ark-unsplash.jpg)",
                        }}>
                        <div className="hero-overlay bg-opacity-80"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="shrink-0 ">
                                <form className="card-body gap-10">
                                    <div className="form-control">
                                        {/* <label className="label">
                                            <span className="label-text text-white text-base font-semibold"></span>
                                        </label> */}
                                        <input type="text" name="name" placeholder='Name' className="input bg-transparent text-white font-semibold text-lg" required />
                                        <hr />
                                    </div>
                                    <div className="form-control">
                                        <input type="email" name="email" placeholder="Email" className="input bg-transparent text-white font-semibold text-lg" required />
                                        <hr />
                                    </div>
                                    <div className="form-control">
                                        <input type="text" name="subject" placeholder="Subject" className="input bg-transparent text-white font-semibold text-lg" required />
                                        <hr />
                                    </div>
                                    <div className="form-control">
                                        <textarea type="text" name="message" placeholder="Message" className="input h-24 bg-transparent text-white font-semibold text-lg" required></textarea>
                                        {/* <input   /> */}
                                        <hr />
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className='btn bg-[#FB6542] text-white border-none hover:bg-[#cf5134] text-base font-medium'>Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/2'>
                    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
                        <GoogleMap
                            mapContainerStyle={mapContainerStyle}
                            zoom={8}
                            center={center}
                        >
                            <Marker position={center} />
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div>
        </div>
    );
}

export default Contact;
