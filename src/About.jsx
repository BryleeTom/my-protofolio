import myLogo from './assets/Logo/my_logo.svg'
import Header from './Header'


function About() {
    return (
        <>
        <Header></Header>
        <div className="content-container">
            <div className="about-container">
                    <img src={myLogo} alt={myLogo} className='logo'/>
                <div className="about-paragraf">
                    <h2 className='about-heading'>Web and App Development Services</h2>
                    <p className='about-para'>I specialize in creating websites and applications that are modern, functional, and tailored to your needs. Whether you’re looking for a responsive website or a custom mobile app, I’m here to help bring your ideas to life with seamless solutions</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default About