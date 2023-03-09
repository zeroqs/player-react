import './styles/index.css'
import content from './assets/content.svg'
import React from 'react'
import Player from './components/Player.jsx'
import Input from './components/Input.jsx'
import AmazonBlock from './components/AmazonBlock.jsx'
import OwnBlock from './components/OwnBlock.jsx'
function App() {
  const [url, setUrl] = React.useState('')
  const [isPlayerOpen, setIsPlayerOpen] = React.useState(false)
  const [isValidStatus, setIsValidStatus] = React.useState('')
  const [items, setItems] = React.useState([])
  const [select, setSelect] = React.useState(false)
  const [loading, setLoading] = React.useState(true)

  const isValidUrl = async (url) => {
    try {
      const res = await fetch(url)
      if (res.headers.get('content-type')?.startsWith('audio')) {
        setLoading(false)
        setIsPlayerOpen(true)
        setItems([...items, url])
      } else {
        throw new Error('Неверная ссылка')
      }
    } catch (e) {
      setIsValidStatus(e.message)
    }
  }

  const handleUrl = (url) => {
    setUrl(url)
    if (!url) setIsValidStatus('')
  }

  return (
    <div className='App'>
      <header className='header header__container'>
        <h1 className='header__header'>
          Play any audio sources directly in the browser!
        </h1>
        <div className='header__text-input-row'>
          <div className='header__text'>
            <span>Without any restrictions for free</span>
          </div>
          <div className='header-input-container'>
            <>
              {isPlayerOpen ? (
                loading ? (
                  <h1>load</h1>
                ) : (
                  <Player url={url} setIsPlayerOpen={setIsPlayerOpen} />
                )
              ) : (
                <Input
                  isValidUrl={isValidUrl}
                  url={url}
                  handleUrl={handleUrl}
                  isValidStatus={isValidStatus}
                  setIsValidStatus={setIsValidStatus}
                  items={items}
                />
              )}
            </>
          </div>
        </div>
        <div className='header__policy-text'>
          <span>
            By uploading the audio file, you agree to our Terms of Service.
          </span>
        </div>
      </header>
      <main className='main__container'>
        <div className='content'>
          <div className='content__text'>
            <h1 className='content__text-header'>How It Works</h1>
            <span className='content__text-text'>
              Lorem Ipsum is a "fish" text often used in print and web design.
              Lorem Ipsum has been the standard "fish" for Latin texts since the
              early 16th century. At that time, an unnamed printer created a
              large collection of font sizes and shapes, using Lorem Ipsum for
              print samples.
            </span>
          </div>
          <div className='content__image'>
            <img className='image-content' src={content} alt='content' />
          </div>
        </div>
      </main>
      <footer className='footer__container'>
        <h2 className='footer__header'>Technical requirements</h2>
        <div className='table'>
          <div className='table__header'>
            <ul className='table__list'>
              <li>
                <button
                  onClick={() => setSelect(false)}
                  className={
                    select ? 'table__item' : 'table__item-active table__item'
                  }>
                  Own server
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSelect(true)}
                  className={
                    select ? 'table__item-active table__item' : 'table__item'
                  }>
                  Amazon Instance
                </button>
              </li>
            </ul>
          </div>
          <div className='table__content'>
            {select ? <OwnBlock /> : <AmazonBlock />}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
