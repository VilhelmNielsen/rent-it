/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Link } from '@reach/router'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'

const QUERY_CATEGORIES = gql`
  query categoriesPage {
    categories {
      slug
      title
    }
  }
`

const cardStyles = {
  card: css`
    padding: 1rem;
  `,
}

function CategoryCard(props) {
  const { category } = props
  return (
    <div css={cardStyles.card}>
      <Link to={`/category/${category.slug}`}>{category.title}</Link>
    </div>
  )
}

function Categories() {
  const {
    data: { categories },
  } = useQuery(QUERY_CATEGORIES)
  return (
    <div>
      {categories.map(category => (
        <CategoryCard category={category} key={category.slug} />
      ))}
    </div>
  )
}

export default Categories
