import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const CHIPS = ['Go', 'Node.js', 'TypeScript', 'PostgreSQL', 'RBAC', 'Docker']

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #1a1533 0%, #07080c 55%, #061a1c 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 26,
            letterSpacing: 6,
            textTransform: 'uppercase',
            color: '#8b7bff',
            marginBottom: 28,
          }}
        >
          Backend Developer
        </div>

        <div style={{ display: 'flex', fontSize: 88, fontWeight: 700, color: '#f3f4f8', lineHeight: 1.05 }}>
          Rohan Karmacharya
        </div>

        <div style={{ display: 'flex', fontSize: 40, fontWeight: 600, marginTop: 18 }}>
          <span style={{ color: '#8b7bff' }}>Clean architecture.&nbsp;</span>
          <span style={{ color: '#35d0c0' }}>Scalable systems.</span>
        </div>

        <div style={{ display: 'flex', marginTop: 56, gap: 16 }}>
          {CHIPS.map((chip) => (
            <div
              key={chip}
              style={{
                display: 'flex',
                padding: '10px 22px',
                borderRadius: 999,
                border: '2px solid rgba(255,255,255,0.14)',
                color: '#c8c9d6',
                fontSize: 22,
              }}
            >
              {chip}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
