import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // 1. Validation
    if (!name || typeof name !== 'string' || !name.trim()) {
      return NextResponse.json(
        { error: '담당자명(성함)을 입력해주세요.' },
        { status: 400 }
      )
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { error: '유효한 이메일 주소를 입력해주세요.' },
        { status: 400 }
      )
    }

    if (!message || typeof message !== 'string' || !message.trim()) {
      return NextResponse.json(
        { error: '문의내용을 입력해주세요.' },
        { status: 400 }
      )
    }

    const targetEmail = process.env.CONTACT_RECEIVER_EMAIL || 'contact@sleeptandard.com'
    const resendApiKey = process.env.RESEND_API_KEY
    const senderEmail = process.env.RESEND_FROM_EMAIL || 'Sleeptandard <onboarding@resend.dev>'

    const timestamp = new Intl.DateTimeFormat('ko-KR', {
      dateStyle: 'full',
      timeStyle: 'medium',
      timeZone: 'Asia/Seoul',
    }).format(new Date())

    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Pretendard', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #f8fafc; border-radius: 16px;">
        <div style="background-color: #042f56; padding: 28px 24px; border-radius: 12px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.5px;">Sleeptandard 신규 문의 접수</h1>
          <p style="color: #93c5fd; margin: 8px 0 0 0; font-size: 13px;">웹사이트 Contact 폼을 통해 새로운 문의가 도착했습니다.</p>
        </div>
        
        <div style="background-color: #ffffff; padding: 24px; border-radius: 12px; margin-top: 16px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 12px 0; color: #64748b; width: 110px; font-weight: 600; border-bottom: 1px solid #f1f5f9;">담당자명</td>
              <td style="padding: 12px 0; color: #0f172a; font-weight: 700; border-bottom: 1px solid #f1f5f9;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #64748b; font-weight: 600; border-bottom: 1px solid #f1f5f9;">이메일</td>
              <td style="padding: 12px 0; color: #0f172a; border-bottom: 1px solid #f1f5f9;">
                <a href="mailto:${escapeHtml(email)}" style="color: #042f56; text-decoration: underline; font-weight: 600;">${escapeHtml(email)}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #64748b; font-weight: 600; border-bottom: 1px solid #f1f5f9;">연락처</td>
              <td style="padding: 12px 0; color: #0f172a; border-bottom: 1px solid #f1f5f9;">${escapeHtml(phone) || '미기재'}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #64748b; font-weight: 600; border-bottom: 1px solid #f1f5f9;">접수 일시</td>
              <td style="padding: 12px 0; color: #475569; border-bottom: 1px solid #f1f5f9;">${timestamp}</td>
            </tr>
            <tr>
              <td style="padding: 16px 0 6px 0; color: #64748b; font-weight: 600;" colspan="2">문의 내용</td>
            </tr>
            <tr>
              <td colspan="2" style="padding: 14px; background-color: #f1f5f9; border-radius: 8px; color: #1e293b; line-height: 1.6; white-space: pre-wrap; font-size: 14px;">${escapeHtml(message)}</td>
            </tr>
          </table>
        </div>

        <div style="text-align: center; margin-top: 20px; font-size: 12px; color: #94a3b8; line-height: 1.5;">
          <p style="margin: 0;">이 메일은 Sleeptandard 웹사이트에서 자동으로 발송되었습니다.</p>
          <p style="margin: 4px 0 0 0;">이 메일에 '답장'하시면 고객(<a href="mailto:${escapeHtml(email)}" style="color: #64748b;">${escapeHtml(email)}</a>)에게 바로 회신됩니다.</p>
        </div>
      </div>
    `

    // 2. Send via Resend API if API Key is configured
    if (resendApiKey) {
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: senderEmail,
          to: [targetEmail],
          reply_to: email,
          subject: `[Sleeptandard 문의] ${name}님의 문의가 접수되었습니다.`,
          html: emailHtml,
        }),
      })

      if (!resendResponse.ok) {
        const errData = await resendResponse.json()
        console.error('Resend API Error:', errData)
        return NextResponse.json(
          { error: '이메일 발송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' },
          { status: 500 }
        )
      }

      return NextResponse.json({ success: true })
    }

    // 3. Fallback when RESEND_API_KEY is not yet configured (e.g. Local Dev)
    console.log('=== [CONTACT INQUIRY RECEIVED] ===')
    console.log('Target:', targetEmail)
    console.log('From:', `${name} <${email}> (${phone || 'No phone'})`)
    console.log('Message:', message)
    console.log('Timestamp:', timestamp)
    console.log('NOTE: RESEND_API_KEY not found in environment variables. Email logged to console.')
    console.log('==================================')

    return NextResponse.json({
      success: true,
      note: 'Inquiry logged. (Add RESEND_API_KEY to Vercel to receive real emails)',
    })
  } catch (error) {
    console.error('Contact API Error:', error)
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' },
      { status: 500 }
    )
  }
}

function escapeHtml(text: string | undefined): string {
  if (!text) return ''
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
