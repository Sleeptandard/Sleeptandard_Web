import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

const GOOGLE_SCRIPT_URL =
  process.env.GOOGLE_SHEET_APPLY_WEBHOOK ||
  'https://script.google.com/macros/s/AKfycbzXX1_tEMhEHVpTrXWqekdK6S2XJ9eohfpOxwC6QdQ6TWzHL4Xg66Fr8cilmgiTBeA/exec'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { type, name, phone, email } = body

    // Validation
    if (!name || typeof name !== 'string' || !name.trim()) {
      return NextResponse.json(
        { error: '이름을 입력해주세요.' },
        { status: 400 }
      )
    }

    if (type === '뉴스레터') {
      if (!email || typeof email !== 'string' || !email.includes('@')) {
        return NextResponse.json(
          { error: '올바른 이메일 주소를 입력해주세요.' },
          { status: 400 }
        )
      }
    } else if (type === '베타테스트') {
      if (!phone || typeof phone !== 'string' || !phone.trim()) {
        return NextResponse.json(
          { error: '전화번호를 입력해주세요.' },
          { status: 400 }
        )
      }
    }

    // Google Sheets Apps Script Webhook 호출
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      body: JSON.stringify({
        type: type || '베타테스트',
        name: name.trim(),
        phone: phone ? phone.trim() : '',
        email: email ? email.trim() : '',
      }),
    })

    // Apps Script는 성공 시 302 redirect 후 {"result":"success"}를 반환합니다.
    if (!response.ok && response.status !== 302) {
      console.error('Google Sheet Webhook Error status:', response.status)
      return NextResponse.json(
        { error: '신청 저장 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Apply API Error:', error)
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' },
      { status: 500 }
    )
  }
}
