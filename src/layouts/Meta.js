import Head from 'next/head'
import PropTypes from 'prop-types'

const Meta = ({ pageTitle }) => (
  <Head>
    <title>{pageTitle}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link
      href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
      rel="stylesheet"
    ></link>
  </Head>
)

Meta.propTypes = {
  pageTitle: PropTypes.string.isRequired
}

export default Meta
