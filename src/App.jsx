import { useLayoutEffect, useState } from 'react'
import profile from './profile.js'
import './App.css'

const themeStorageKey = 'about-me-theme'

const sections = [
  { id: 'about', label: 'About Me' },
  { id: 'interests', label: 'Areas of Interest' },
  { id: 'learning', label: 'Currently Learning' },
]

function TopicList({ items }) {
  return (
    <ul className="topic-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function App() {
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = window.localStorage.getItem(themeStorageKey)
      return savedTheme === 'dark' ? 'dark' : 'light'
    } catch (error) {
      console.error('Unable to read the saved color theme.', error)
      return 'light'
    }
  })

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  function toggleTheme() {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)

    try {
      window.localStorage.setItem(themeStorageKey, nextTheme)
    } catch (error) {
      console.error('Unable to save the selected color theme.', error)
    }
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label={`${profile.name} home`}>
          <span className="wordmark-mark" aria-hidden="true">
            JJ
          </span>
          <span>{profile.name}</span>
        </a>
        <nav aria-label="Main navigation">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`}>
              {section.label}
            </a>
          ))}
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            aria-pressed={theme === 'dark'}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <span aria-hidden="true">{theme === 'light' ? '☾' : '☀'}</span>
            <span className="theme-toggle-label">
              {theme === 'light' ? 'Dark' : 'Light'}
            </span>
          </button>
        </nav>
      </header>

      <main>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-content">
            <p className="eyebrow">Healthcare · Strategy · Technology</p>
            <h1 id="hero-title">{profile.name}</h1>
            <p className="hero-headline">{profile.headline}</p>
            <a className="hero-link" href="#about">
              Get to know me <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-accent" aria-hidden="true">
            <span>Care</span>
            <span>meets</span>
            <span>possibility.</span>
          </div>
        </section>

        <div className="content">
          <section className="content-section about-section" id="about">
            <div className="section-heading">
              <p className="section-kicker">01 / INTRODUCTION</p>
              <h2>About Me</h2>
            </div>
            <p className="about-copy">{profile.about}</p>
          </section>

          <section className="content-section" id="interests">
            <div className="section-heading">
              <p className="section-kicker">02 / WHAT I CARE ABOUT</p>
              <h2>Areas of Interest</h2>
            </div>
            <TopicList items={profile.areasOfInterest} />
          </section>

          <section className="content-section learning-section" id="learning">
            <div className="section-heading">
              <p className="section-kicker">03 / IN PROGRESS</p>
              <h2>Currently Learning</h2>
            </div>
            <TopicList items={profile.currentlyLearning} />
          </section>
        </div>
      </main>

      <footer className="site-footer">
        <span>{profile.name}</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
