import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import styles from './index.module.scss'
import logo from '../assets/images/tbauctions.svg'
import Img from 'gatsby-image'
import Icon from '../components/icons'
import BlockText from '../components/block-text'

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    home: sanityHomepage {
      _rawAboutBody(resolveReferences: { maxDepth: 10 })
      _rawHeroBody
      heroImage {
        alt
        asset {
          fluid(maxWidth: 1024) {
            ...GatsbySanityImageFluid
          }
        }
      }
      aboutImage {
        alt
        asset {
          fluid(maxWidth: 500) {
            ...GatsbySanityImageFluid
          }
        }
      }
      aboutList {
        _rawBody
        image {
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
        title
      }
      aboutTitle
      brandsList {
        image {
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
        instagram
        market
        linkedin
        name
        twitter
        website
      }
      heroTitle
      brandsTitle
    }

    hero: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    office: file(relativePath: { eq: "office.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    about: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const IndexPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site || []
  const home = (data || {}).home || []

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Container>
        <section className={styles.hero}>
          <div className={styles.content}>
            <h1 className={styles.title}>{home.heroTitle}</h1>
            <button className={styles.button}>
              <Icon symbol="play" /> Watch video
            </button>
            <div className={styles.body}>
              <BlockText blocks={home._rawHeroBody} />
            </div>
          </div>

          <Img fluid={home.heroImage.asset.fluid} className={styles.image} />
        </section>

        <section className={styles.about}>
          <h2 className={styles.sectionTitle}>{home.aboutTitle}</h2>
          <ul className={styles.features}>
            {home.aboutList.map((item, index) => (
              <li key={index}>
                <div className={styles.roundedIcon}>
                  <Icon
                    symbol={
                      (index === 0 && 'auction') || (index === 1 && 'sustainable') || 'accessible'
                    }
                  />
                </div>
                <h4 className={styles.title}>{item.title}</h4>
                <BlockText blocks={item._rawBody} />
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.partners}>
          <div className={styles.pageTitle}>
            <h2 className={styles.sectionTitle}>
              {home.brandsTitle} <img src={logo} className={styles.image} />
            </h2>
            <ul className={styles.grid}>
              {home.brandsList &&
                home.brandsList.map(item => (
                  <li className={styles.item}>
                    <div className={styles.imageWrapper}>
                      {item.image && (
                        <Img
                          fluid={item.image.asset.fluid}
                          alt={item.name || item.image.alt}
                          className={styles.image}
                        />
                      )}
                    </div>
                    <div className={styles.details}>
                      <h5>{item.name}</h5>
                      {item.market && <small>{item.market}</small>}
                      {item.website && <a href={item.website}>{item.website}</a>}
                    </div>
                    <div className={styles.social}>
                      <ul>
                        <li>
                          <a href="#">
                            <Icon symbol="facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Icon symbol="instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Icon symbol="twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </section>
        <section className={styles.careers}>
          <h2 className={styles.sectionTitle}>Want to join us?</h2>
          <div className={styles.grid}>
            <button className={styles.bva}>Your career at BVA Auctions</button>
            <button className={styles.troostwijk}>Your career at Troostwijk Auctions</button>
          </div>
        </section>

        <section className={styles.contact}>
          <div className={styles.grid}>
            <div className={styles.image}>
              <Img fluid={data.office.childImageSharp.fluid} />
            </div>
            <div className={styles.content}>
              <img src={logo} alt={site.title} />
              <address>
                Overschiestraat 59 <br />
                1062 XD Amsterdam
                <br />
                The Netherlands
              </address>
              <ul>
                <li className={styles.phone}>
                  <span>T</span>
                  <a href="#">+31 20 66 66 500</a>
                </li>
                <li className={styles.email}>
                  <span>E</span>
                  <a href="#">info@tbauctions.com</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  )
}

export default IndexPage
