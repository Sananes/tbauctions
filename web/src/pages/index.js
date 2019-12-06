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

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
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

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Container>
        <section className={styles.hero}>
          <h1 className={styles.title}>“Auctioning is the way to buy and sell for the future”</h1>
          <p className={styles.body}>
            We are <strong>350 people</strong> with a passion for value and auctions. Auctions are
            completely in the now and the way to buy and sell for the future. With auctioning,
            everything of value finds the best way.
          </p>
          <Img fluid={data.hero.childImageSharp.fluid} className={styles.image} />
        </section>

        <section className={styles.about}>
          <div className={styles.leftContent}>
            <h3 className={styles.title}>About us</h3>
            <p className={styles.body}>
              We are 350 people with a passion for value and auctions. Auctions are completely in
              the now and the way to buy and sell for the future. With aunctioning, everything of
              value finds the best way.
            </p>
            <Img fluid={data.about.childImageSharp.fluid} className={styles.image} />
          </div>

          <div className={styles.rightContent}>
            <ul className={styles.features}>
              <li>
                <div className={styles.roundedIcon}>
                  <Icon symbol="auction" />
                </div>
                <h4 className={styles.title}>Leading online auction</h4>
                <p>
                  TBAuctions is Europe’s leading online auction house. With 350 employees, buyers
                  and sellers all over the world, over 6 million webvisits per month and 7.400
                  auctions per year.
                </p>
              </li>
              <li>
                <div className={styles.roundedIcon}>
                  <Icon symbol="sustainable" />
                </div>
                <h4>Sustainable consumption</h4>
                <p>
                  Auctioning stimulates re-utilization and extends the life of goods And thus,
                  contributes to more sustainable consumption. It increases transparency and shows
                  the right market value of a good.
                </p>
              </li>
              <li>
                <div className={styles.roundedIcon}>
                  <Icon symbol="accessible" />
                </div>
                <h4>Accessible</h4>
                <p>
                  It makes world trade accessible to everyone, buyer and seller. With auctioning,
                  everything of value finds the best way.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.partners}>
          <div className={styles.pageTitle}>
            <h3>
              Partners of <img src={logo} className={styles.image} />
            </h3>
            <ul className={styles.grid}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
                <li className={styles.item}>
                  <div className={styles.imageWrapper}>
                    <Img fluid={data.hero.childImageSharp.fluid} className={styles.image} />
                  </div>
                  <div className={styles.details}>
                    <h5>BVA Auctions</h5>
                    <small>Consumer &amp; Small Business</small>
                    <a href="#">www.bvaauctions.com</a>
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
