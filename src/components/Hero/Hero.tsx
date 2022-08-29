import heroJPG from "./hero.jpg"
import heroWEBP from "./hero.webp"
import SvgDown from "./SvgDown/SvgDown"

const Hero = () => {
    return (
        <div className="hero-container">
            <picture>
                <source srcSet={heroWEBP} type="image/webp" />
                <source srcSet={heroJPG} type="image/jpeg" />
                <img src={heroJPG} alt="Hero" />
            </picture>
            <div className="heading">
                <div className="heading-animation">
                    <p>BarberShop App</p>
                    <p>Desliza</p>
                </div>
            </div>
            <SvgDown />
        </div>
    )
}

export default Hero