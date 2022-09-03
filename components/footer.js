import { Container } from "@chakra-ui/react"


const Footer = () => {
    let d = new Date(); 
    let currentYear = d.getFullYear(); 
    return (
        <Container centerContent mt={"40px"}>
            <small>&copy; Copyright {currentYear}, Alejandro Varela</small>
            <small>Made with Next.js, chakra-ui, and much love</small>
        </Container>
    )
}

export default Footer;