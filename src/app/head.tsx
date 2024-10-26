
import Head from 'next/head';


export default function IndexPage() {
  return (
    <>
          <Head>
                <title>Brenda Scarlat</title>
                <meta
                    name="description"
                    content="Navegue com a INTERNET mais MODERNA de Santa Catarina!"
                />

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:title" content="Brenda Scarlet - Vendedora" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://brendalead.vercel.app"
                />
                <meta property="og:title" content="Brenda Scarlet - Vendedora" />

                <meta
                    property="og:description"
                    content="Navegue com a INTERNET mais MODERNA de Santa Catarina!"
                />
                <meta
                    property="og:image"
                    content="https://i.ibb.co/JQTDnnk/brenda-ccs.png"
                />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:url"
                    content="https://brendalead.vercel.app"
                />
                <meta
                    property="twitter:title"
                    content="Brenda Scarlet - Vendedora"
                />
                <meta
                    property="twitter:description"
                    content="Navegue com a INTERNET mais MODERNA de Santa Catarina!"
                />
                <meta
                    property="og:image"
                    content="https://i.ibb.co/JQTDnnk/brenda-ccs.png"
                />
            </Head>
    </>
  )
}
