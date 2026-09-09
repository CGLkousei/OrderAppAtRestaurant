import { useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {
  const navigate = useNavigate()

  const features = [
    {
      id: 'create-survey',
      title: 'アンケート作成',
      description: '白紙の状態からアンケートを作成します。多様な質問タイプを組み合わせて自由にカスタマイズ。',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      ),
      gradient: 'var(--gradient-blue)',
      accentColor: 'var(--color-accent-blue)',
      accentBg: 'var(--color-accent-blue-bg)',
      path: '/create',
      cta: '作成を始める',
      ctaIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      ),
      variant: 'primary' as const,
    },
    {
      id: 'manage-survey',
      title: 'アンケート管理',
      description: '作成済みアンケートの編集・公開・集計結果の確認など、一元管理が可能です。',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      ),
      gradient: 'var(--gradient-teal)',
      accentColor: 'var(--color-accent-teal)',
      accentBg: 'var(--color-accent-teal-bg)',
      path: '/manage',
      cta: 'アンケート一覧',
      ctaIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      ),
      variant: 'secondary' as const,
    },
    {
      id: 'answer-survey',
      title: 'アンケート回答',
      description: '共有されたアンケートに簡単に回答できます。過去の回答履歴も確認可能です。',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 11l3 3L22 4" />
          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
        </svg>
      ),
      gradient: 'var(--gradient-orange)',
      accentColor: 'var(--color-accent-orange)',
      accentBg: 'var(--color-accent-orange-bg)',
      path: '/answer',
      cta: '履歴を見る',
      ctaIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12a9 9 0 109-9 9.75 9.75 0 00-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
        </svg>
      ),
      variant: 'secondary' as const,
    },
  ]

  return (
    <div className="home">
      {/* Header */}
      <header className="home__header">
        <div className="home__header-left">
          <div className="home__logo" id="app-logo">
            <div className="home__logo-icon">
              <svg viewBox="0 0 32 32" fill="none">
                <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#logo-gradient)" />
                <path d="M10 16h12M16 10v12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
                <defs>
                  <linearGradient id="logo-gradient" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2563eb" />
                    <stop offset="1" stopColor="#1d4ed8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="home__logo-text">FormApp</span>
          </div>
        </div>
        <div className="home__header-right">
          <button className="home__btn-icon" aria-label="通知">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </button>
          <button className="home__btn-logout" aria-label="ログアウト">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            ログアウト
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="home__main">
        {/* Page Title */}
        <section className="home__hero" id="hero-section">
          <h1 className="home__title">ダッシュボード</h1>
          <p className="home__subtitle">
            アンケートの作成・管理・回答をひとつの場所で。
          </p>
        </section>

        {/* Feature Cards */}
        <section className="home__features" id="features-section" aria-label="主な機能">
          {features.map((feature, index) => (
            <article
              key={feature.id}
              className={`home__card home__card--${feature.variant}`}
              id={feature.id}
              style={{
                '--card-gradient': feature.gradient,
                '--card-accent': feature.accentColor,
                '--card-accent-bg': feature.accentBg,
                animationDelay: `${index * 80 + 100}ms`,
              } as React.CSSProperties}
              onClick={() => navigate(feature.path)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  navigate(feature.path)
                }
              }}
            >
              <div className="home__card-content">
                <div className="home__card-icon">
                  {feature.icon}
                </div>
                <h2 className="home__card-title">{feature.title}</h2>
                <p className="home__card-description">{feature.description}</p>
                <div className="home__card-cta">
                  <span className="home__card-cta-text">{feature.cta}</span>
                  <span className="home__card-cta-icon">{feature.ctaIcon}</span>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Stats Bar */}
        <section className="home__stats" id="stats-section">
          <div className="home__stats-item">
            <div className="home__stats-icon home__stats-icon--blue">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
              </svg>
            </div>
            <div className="home__stats-info">
              <span className="home__stats-value">0</span>
              <span className="home__stats-label">作成済みアンケート</span>
            </div>
          </div>
          <div className="home__stats-divider" />
          <div className="home__stats-item">
            <div className="home__stats-icon home__stats-icon--teal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
              </svg>
            </div>
            <div className="home__stats-info">
              <span className="home__stats-value">0</span>
              <span className="home__stats-label">総回答数</span>
            </div>
          </div>
          <div className="home__stats-divider" />
          <div className="home__stats-item">
            <div className="home__stats-icon home__stats-icon--orange">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <div className="home__stats-info">
              <span className="home__stats-value">—</span>
              <span className="home__stats-label">最終更新</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="home__footer">
        <p>&copy; 2026 FormApp. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Home
