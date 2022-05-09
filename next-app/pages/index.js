export default function Home({ message }) {
  return (
    <div>{message}</div>
  )
}

export function getServerSideProps() {
  return {
    props: {
      message: 'Hello, world!'
    }
  }
}