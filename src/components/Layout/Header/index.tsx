import Image from 'next/image'

import Container from 'components/Container'
import  traveloLogo from 'public/assets/travelo-logo-header.png'

const Header = () => {
    return (
        <header className="h-[85px] bg-white shadow-lg p-4">
            <Container>
            <div className="flex justify-between item-center">
                <Image src={traveloLogo} alt="travelo logo" height="48" width="182" placeholder="blur"/>
            </div>
            </Container>
        </header>
    )
}

export default Header