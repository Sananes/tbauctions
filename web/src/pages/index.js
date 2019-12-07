import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'
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
          <h1 className={styles.title}>{home.heroTitle}</h1>
          <div className={styles.body}>
            <BlockText blocks={home._rawHeroBody} />
          </div>
          <Img fluid={home.heroImage.asset.fluid} className={styles.image} />
        </section>

        <section className={styles.about}>
          <div className={styles.leftContent}>
            <h3 className={styles.title}>{home.aboutTitle}</h3>
            <div className={styles.body}>
              <BlockText blocks={home._rawAboutBody} />
            </div>
            <Img fluid={home.aboutImage.asset.fluid} className={styles.image} />
          </div>

          <div className={styles.rightContent}>
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
          </div>
        </section>

        <section className={styles.partners}>
          <div className={styles.pageTitle}>
            <h3>
              {home.brandsTitle} <img src={logo} className={styles.image} />
            </h3>
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
      </Container>
    </Layout>
  )
}

export default IndexPage
