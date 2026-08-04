import { useState } from 'react'
import './App.css'

const STORE_URL = '#pricing'
const DEMO_URL = '#demo'
const CONTACT_EMAIL = 'usefirstlook@gmail.com'

const features = [
  {
    icon: '↗',
    title: 'Fresh listing detection',
    text: 'Surface newly detected Marketplace listings without manually refreshing every saved search.',
  },
  {
    icon: '◉',
    title: 'Saved deal feeds',
    text: 'Turn Marketplace searches and category pages into organized feeds that FirstLook checks for you.',
  },
  {
    icon: '⌁',
    title: 'Posting-age estimates',
    text: 'See an estimate of how recently a listing appeared so you can prioritize the freshest opportunities.',
  },
  {
    icon: '⌕',
    title: 'Search and feed filters',
    text: 'Search fresh listings by title or narrow the feed to a specific saved deal feed.',
  },
  {
    icon: '▣',
    title: 'Mobile alert rules',
    text: 'Use title keywords and price ranges to control which listings are sent to Telegram.',
  },
  {
    icon: '✓',
    title: 'Built for action',
    text: 'Open the listing and contact the seller using Facebook’s native Marketplace message flow.',
  },
]

const faqs = [
  {
    q: 'Does FirstLook automatically message sellers?',
    a: 'No. FirstLook helps you find and open fresh listings faster, but messages are sent through Facebook’s native Marketplace flow.',
  },
  {
    q: 'Do I need Telegram?',
    a: 'No. The on-page widget and Fresh Listings feed work without Telegram. Telegram is optional for mobile alerts.',
  },
  {
    q: 'Does FirstLook work with searches and categories?',
    a: 'Yes. You can save supported Marketplace searches and category pages as deal feeds.',
  },
  {
    q: 'Will FirstLook find every new listing?',
    a: 'No tool can guarantee that. Facebook controls Marketplace availability, ranking, and search results. FirstLook is designed to make monitoring faster and easier.',
  },
  {
    q: 'Is FirstLook affiliated with Facebook or Meta?',
    a: 'No. FirstLook is an independent product and is not affiliated with, endorsed by, or sponsored by Meta or Facebook.',
  },
]

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [demoOpen, setDemoOpen] = useState(false)

  const mailHref = `mailto:${CONTACT_EMAIL}?subject=FirstLook%20Early%20Access`

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="FirstLook home">
            <img src="/firstlook-logo.png" alt="" />
            <span>FirstLook</span>
          </a>
          <div className="nav-links">
            <a href="#how">How it works</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
          </div>
          <a className="button button-small button-dark" href={STORE_URL}>Get FirstLook</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> Early access for Marketplace resellers</div>
            <h1>Fresh Marketplace deals, <span>before the crowd.</span></h1>
            <p className="hero-lede">
              FirstLook turns Facebook Marketplace searches and categories into live deal feeds, then sends mobile alerts when fresh listings match what you’re hunting for.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={STORE_URL}>Get early access <span>→</span></a>
              <button className="button button-ghost" onClick={() => setDemoOpen(true)}>Watch demo <span>▶</span></button>
            </div>
            <div className="hero-proof">
              <span>Chrome extension</span>
              <span>Telegram alerts</span>
              <span>Built for resellers</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="FirstLook product preview">
            <div className="glow glow-one" />
            <div className="glow glow-two" />
            <div className="browser-card">
              <div className="browser-top">
                <div className="browser-dots"><i /><i /><i /></div>
                <div className="browser-address">facebook.com/marketplace</div>
              </div>
              <div className="browser-body">
                <div className="market-grid">
                  <div className="market-card featured">
                    <div className="image-placeholder chair"><span>8m</span></div>
                    <strong>Vintage lounge chair</strong>
                    <small>$65 · Portland, OR</small>
                  </div>
                  <div className="market-card">
                    <div className="image-placeholder table"><span>14m</span></div>
                    <strong>Walnut coffee table</strong>
                    <small>$40 · Beaverton, OR</small>
                  </div>
                  <div className="market-card faded">
                    <div className="image-placeholder lamp"><span>Seen</span></div>
                    <strong>Brass floor lamp</strong>
                    <small>$25 · Gresham, OR</small>
                  </div>
                </div>
                <div className="widget-card">
                  <div className="widget-header">
                    <div className="widget-brand"><img src="/firstlook-logo.png" alt="" /><span>FirstLook</span></div>
                    <span className="live-pill">LIVE</span>
                  </div>
                  <div className="widget-title">Fresh Listings <b>3</b></div>
                  <div className="listing-row">
                    <div className="thumb thumb-one" />
                    <div><strong>Vintage lounge chair</strong><span>$65 · 8m ago</span></div>
                    <em>📱</em>
                  </div>
                  <div className="listing-row">
                    <div className="thumb thumb-two" />
                    <div><strong>Walnut coffee table</strong><span>$40 · 14m ago</span></div>
                  </div>
                  <div className="listing-row">
                    <div className="thumb thumb-three" />
                    <div><strong>Brass floor lamp</strong><span>$25 · 21m ago</span></div>
                  </div>
                </div>
                <div className="phone-alert">
                  <div className="phone-icon">👀</div>
                  <div><strong>FirstLook</strong><span>Fresh listing: Vintage lounge chair · $65</span></div>
                  <small>now</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="container trust-inner">
            <span>Built for</span>
            <b>Furniture flippers</b>
            <b>Vintage resellers</b>
            <b>Collectors</b>
            <b>Local deal hunters</b>
          </div>
        </section>

        <section id="how" className="section container">
          <div className="section-heading centered">
            <div className="eyebrow light">How it works</div>
            <h2>From saved search to seller message.</h2>
            <p>FirstLook fits into the Marketplace workflow you already use.</p>
          </div>
          <div className="steps-grid">
            <article className="step-card">
              <span className="step-number">01</span>
              <div className="step-icon">⌕</div>
              <h3>Save a deal feed</h3>
              <p>Choose a Marketplace search or category, then save it with your preferred radius and check interval.</p>
            </article>
            <article className="step-card active-step">
              <span className="step-number">02</span>
              <div className="step-icon">◉</div>
              <h3>FirstLook watches</h3>
              <p>A protected scan tab checks your feeds and surfaces newly detected listings in one organized place.</p>
            </article>
            <article className="step-card">
              <span className="step-number">03</span>
              <div className="step-icon">↗</div>
              <h3>Move quickly</h3>
              <p>Get a mobile alert, open the listing, and contact the seller through Facebook’s native message flow.</p>
            </article>
          </div>
        </section>

        <section id="demo" className="section demo-section">
          <div className="container demo-grid">
            <div className="demo-copy">
              <div className="eyebrow light">See FirstLook in action</div>
              <h2>Spend less time refreshing. Spend more time sourcing.</h2>
              <p>Save the searches you already use, let FirstLook monitor them, and focus your attention on the newest opportunities.</p>
              <button className="text-button" onClick={() => setDemoOpen(true)}>Watch the 60-second walkthrough <span>→</span></button>
            </div>
            <button className="demo-placeholder" onClick={() => setDemoOpen(true)} aria-label="Play FirstLook demo">
              <div className="demo-shine" />
              <img src="/firstlook-logo.png" alt="" />
              <span className="play-button">▶</span>
              <strong>Product demo coming next</strong>
              <small>Drop in your screen recording later</small>
            </button>
          </div>
        </section>

        <section id="features" className="section container">
          <div className="section-heading">
            <div className="eyebrow light">Features</div>
            <h2>A cleaner way to source Marketplace.</h2>
            <p>Everything in FirstLook is built around seeing the right listing sooner and acting on it faster.</p>
          </div>
          <div className="features-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="comparison-section">
          <div className="container comparison-grid">
            <div>
              <div className="eyebrow light">The difference</div>
              <h2>Marketplace browsing, without the tab chaos.</h2>
              <p>FirstLook gives your sourcing process a single place to monitor, filter, and act on fresh listings.</p>
            </div>
            <div className="comparison-card">
              <div className="comparison-row header-row"><span>Without FirstLook</span><span>With FirstLook</span></div>
              <div className="comparison-row"><span>Refresh searches manually</span><b>Automatic deal-feed checks</b></div>
              <div className="comparison-row"><span>Guess what is new</span><b>Fresh listing detection</b></div>
              <div className="comparison-row"><span>Broad native alerts</span><b>Keyword and price rules</b></div>
              <div className="comparison-row"><span>Scattered open tabs</span><b>One organized Fresh feed</b></div>
            </div>
          </div>
        </section>

        <section id="pricing" className="section pricing-section container">
          <div className="section-heading centered">
            <div className="eyebrow light">Founding access</div>
            <h2>Get in early. Keep the founding price.</h2>
            <p>One straightforward plan while FirstLook is in early access.</p>
          </div>
          <div className="pricing-card">
            <div className="pricing-top">
              <div>
                <span className="plan-label">FirstLook Early Access</span>
                <div className="price"><strong>$9</strong><span>/month</span></div>
              </div>
              <span className="founding-badge">FOUNDING PRICE</span>
            </div>
            <ul>
              <li>Unlimited saved deal feeds during early access</li>
              <li>Fresh Listings feed and on-page widget</li>
              <li>Telegram mobile alerts</li>
              <li>Title keyword and price alert rules</li>
              <li>Direct early-user feedback channel</li>
            </ul>
            <a className="button button-primary button-full" href={mailHref} 
            >Request early access <span>→</span></a>
            <small>Cancel anytime. Chrome Web Store installation required.</small>
          </div>
        </section>

        <section className="section container faq-section">
          <div className="section-heading centered">
            <div className="eyebrow light">FAQ</div>
            <h2>Questions before your first feed?</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <button className={`faq-item ${openFaq === index ? 'open' : ''}`} key={faq.q} onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                <span><strong>{faq.q}</strong>{openFaq === index && <p>{faq.a}</p>}</span>
                <i>{openFaq === index ? '−' : '+'}</i>
              </button>
            ))}
          </div>
        </section>

        <section className="final-cta">
          <div className="container final-cta-inner">
            <img src="/firstlook-logo.png" alt="" />
            <div>
              <h2>See the listing. Make the move.</h2>
              <p>Build your first Marketplace deal feed with FirstLook.</p>
            </div>
            <a className="button button-light" href={STORE_URL}>Get FirstLook <span>→</span></a>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <a className="brand footer-brand" href="#top"><img src="/firstlook-logo.png" alt="" /><span>FirstLook</span></a>
          <p>Fresh Marketplace deals before the crowd.</p>
          <div className="footer-links">
            <a href="/privacy.html">Privacy</a>
            <a href="/terms.html">Terms</a>
            <a href={`mailto:${CONTACT_EMAIL}`}>Support</a>
          </div>
        </div>
        <div className="container disclaimer">FirstLook is not affiliated with, endorsed by, or sponsored by Meta, Facebook, or Facebook Marketplace.</div>
      </footer>

      {demoOpen && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="FirstLook demo" onClick={() => setDemoOpen(false)}>
          <div className="modal" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setDemoOpen(false)} aria-label="Close demo">×</button>
            <div className="modal-placeholder">
              <img src="/firstlook-logo.png" alt="" />
              <h3>Add your FirstLook demo here</h3>
              <p>Later, replace this placeholder with a YouTube, Vimeo, or local MP4 embed.</p>
              <a className="button button-primary" href={DEMO_URL} onClick={(event) => event.preventDefault()}>Demo placeholder</a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
