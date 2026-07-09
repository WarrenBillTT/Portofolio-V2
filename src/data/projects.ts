export interface Project {
  name:   string
  desc:   string
  stack:  string[]
  status: 'live' | 'wip'
  icon:   string
  github: string
  demo:   string
}

export const PROJECTS: Project[] = [
  {
    name:   'DevCollab',
    desc:   'Real-time collaborative code editor with WebSocket sync, rooms & syntax highlighting.',
    stack:  ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    status: 'live',
    icon:   '🖥',
    github: '#',
    demo:   '#',
  },
  {
    name:   'ShopEase API',
    desc:   'RESTful e-commerce backend with JWT auth, Stripe payments, and order management.',
    stack:  ['Express', 'PostgreSQL', 'Redis', 'Stripe'],
    status: 'live',
    icon:   '🛒',
    github: '#',
    demo:   '#',
  },
  {
    name:   'TaskFlow',
    desc:   'Full-stack Kanban board with drag-and-drop, team workspaces, and real-time updates.',
    stack:  ['Next.js', 'Prisma', 'Supabase', 'TypeScript'],
    status: 'live',
    icon:   '📋',
    github: '#',
    demo:   '#',
  },
  {
    name:   'WeatherNow',
    desc:   'Weather PWA with geolocation, 7-day forecast, and offline caching via Service Workers.',
    stack:  ['React', 'PWA', 'OpenWeather'],
    status: 'live',
    icon:   '🌤',
    github: '#',
    demo:   '#',
  },
  {
    name:   'LinkVault',
    desc:   'Bookmark manager with tagging, full-text search, and a browser extension.',
    stack:  ['Vue.js', 'FastAPI', 'PostgreSQL'],
    status: 'wip',
    icon:   '🔗',
    github: '#',
    demo:   '#',
  },
  {
    name:   'AuthKit',
    desc:   'Drop-in auth library supporting OAuth2, magic links, and 2FA. Published to npm.',
    stack:  ['TypeScript', 'OAuth2', 'Node.js'],
    status: 'live',
    icon:   '🔐',
    github: '#',
    demo:   '#',
  },
  {
    name:   'DataPulse',
    desc:   'Analytics dashboard with live charts, custom event tracking, and CSV export.',
    stack:  ['React', 'D3.js', 'TimescaleDB'],
    status: 'wip',
    icon:   '📊',
    github: '#',
    demo:   '#',
  },
  {
    name:   'Portfolio v1',
    desc:   'Previous portfolio — animated, responsive, scored 98 on Lighthouse.',
    stack:  ['HTML', 'CSS', 'JavaScript'],
    status: 'live',
    icon:   '🎨',
    github: '#',
    demo:   '#',
  },
]
