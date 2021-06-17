
import Link from 'next/link'

export default function Footer () {
  return (
    <div className='app-footer-container'>
      <div className='app-footer-content'>
        <span> By <a href='http://kafuilabs.com' target='_blank' rel='noreferrer'> Kafui Labs</a> </span> |
        <span> <a href='https://github.com/Future-Web-Tools' target='_blank' rel='noreferrer'> Github</a> </span> |
        <Link href='/terms'> Terms </Link> |
        <Link href='/privacy'> Privacy </Link>
      </div>

      <style jsx>{`
        .app-footer-container {
          margin: 3rem 0;
          padding: 2rem;
          width: 100%;
          text-align: center;
        }
        .app-footer-content {
          font-size: 80%;
          font-style: italic;
        }
      `}</style>
    </div>
  )
}
