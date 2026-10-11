import profile from './profile.js'
import './App.css'

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
