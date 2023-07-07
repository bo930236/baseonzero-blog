import { useEffect } from 'react'
import useSWR from 'swr-old'
import fetcher from 'lib/fetcher'

export default function ViewCounter({ slug, className, blogPage = false }) {
  useEffect(() => {
    let registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      })

    if (blogPage) {
      registerView()
    }
  }, [blogPage, slug])

  let { data } = useSWR(`/api/views/${slug}`, fetcher)
  let views = new Number(data?.total)

  if (!data) {
    return <span className={className}>Loading...</span>
  }

  return <span className={className}>{`${views > 0 ? views.toLocaleString() : '–––'}`}</span>
}
