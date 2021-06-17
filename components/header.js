
import Link from 'next/link'

export default function Header () {
  return (
    <div className='app-header-container'>
      <div className='app-header-content'>
        <Link href='/'>
          <a>
            <img
              src='/images/future-web-tools-wordmark.svg'
              alt=''
              width={3000}
              height={400}
            />
          </a>
        </Link>
      </div>

      <style jsx>{`
        .app-header-container {
          margin: 1rem 0;
          width: 100%;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .app-header-content {
          max-width: 700px;
        }
        .app-header-wordmark {
        }
      `}</style>
    </div>
  )
}
