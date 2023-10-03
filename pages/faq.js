import FAQScreen from "../src/screens/FAQScreen/FAQScreen"
//console.log("oi")
// SSG - Static Site Generation
//SSR - Server side Rendering
//ISG- incremental Static Generation
/* xport async function getServerSideProps() {
    console.log('Em modo DEV, sempre roda! acada acesso' )
    console.log('Rodando a cada acesso que voçê recebe') */
    
export default FAQScreen;
export async function getStaticProps() {
    console.log('Roda SOMENTE em build time')
    console.log('Em modo DEV, sempre roda! acada acesso')

    const FAQ_API_URL = await fetch('https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json')
    const faq = await FAQ_API_URL.json()
    return {
        props: {
            qualquercoisa: 'que eu passar aqui',
            faq,
        }
    }
}


