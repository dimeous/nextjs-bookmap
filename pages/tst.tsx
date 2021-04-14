import { GetServerSideProps, NextPage } from 'next'

const UserPage: NextPage<{ data: string }> = (props) => {
  if (!props.data) {
    return <div></div>
  }

  return (
    <div suppressHydrationWarning={true}>
      {process.browser && <UserReview html={props.data} />}
      <div>some other component</div>
    </div>
  )
}

const UserReview = function (html: { html: string }) {
  const parser = new DOMParser()
  const doc = parser.parseFromString(html.html, 'text/html')
  const docArticles = doc.querySelectorAll('article > script')
  const arrReviews = (articles: NodeListOf<Element>) => {
    const content = []
    articles.forEach((v) => {
      const json = JSON.parse(v.innerHTML)
      content.push(<li>{json.consumerName}</li>)
    })
    return <ul>{content}</ul>
  }
  return <div>{arrReviews(docArticles)}</div>
}
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  try {
    const result2 = fetch('https://www.trustpilot.com/review/bookmap.com')

    /*
    fetch('https://www.trustpilot.com/review/bookmap.com')
      .then(function (response) {
        // When the page is loaded convert it to text
        return response.text()
      })
      .then(function (html) {
        // Initialize the DOM parser
        const parser = new DOMParser()

        // Parse the text
        const doc = parser.parseFromString(html, 'text/html')

        // You can now even select part of that html as you would in the regular DOM
        // Example:
        // var docArticle = doc.querySelector('article').innerHTML;

        console.log(doc)
        return {
          props: { doc },
        }
      })
      .catch(function (err) {
        console.log('Failed to fetch page: ', err)
        res.statusCode = 404
        return {
          props: {},
        }
      })
*/
    const data = await result2
      .then(function (response) {
        // When the page is loaded convert it to text
        return response.text()
      })
      .then(function (html) {
        // Initialize the DOM parser
        return html
      })
      .catch(function (err) {
        console.log('Failed to fetch page: ', err)
      })
    return {
      props: { data: data },
    }
  } catch {
    res.statusCode = 404
    return {
      props: {},
    }
  }
}

export default UserPage
