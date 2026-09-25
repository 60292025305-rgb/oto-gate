// Cloudflare Workers エントリーポイント
// tennis.html の内容をそのままレスポンスとして返す

import html from './tennis.html';

export default {
  fetch() {
    return new Response(html, {
      headers: {
        'Content-Type': 'text/html; charset=UTF-8',
      },
    });
  },
};
