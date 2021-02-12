import NextHead from 'next/head'

const siteDescription = 'Realhub Africa  '

const Head = ({ title }) => {
  const newTitle = title ? `${title} | ` : ''
  return (
    <NextHead>
      <title>{newTitle} || RealHub Africa</title>
      <meta
        name="keywords"
        content="airbnb, house, listing, property, buy houses, rent, duplex, apartment"
      />
      <meta name="description" content={siteDescription} />
      <meta property="og:title" content="Realhub Africa" />
      <meta property="og:type" content="website" />
      {/* <meta property="og:url" content={process.env.BASE_URL} /> */}
      <meta property="og:description" content={siteDescription} />
      {/* <meta property="og:image" content="https://printivo.s3.amazonaws.com/img/image-seo-share-large.png" /> */}
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <meta property="twitter:card" content="summary_large_image" />
      {/* <meta name="google-site-verification" content="-oWRsxQSz6hMQKGEtpz8lpJAVivXjAQKxBT1Nc8tPOM" /> */}
    </NextHead>
  )
}

export default Head
