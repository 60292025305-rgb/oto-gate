// Cloudflare Workers エントリーポイント
// index.html の内容をそのままレスポンスとして返す

import html from './index.html';

export default {
  fetch() {
    return new Response(html, {
      headers: {
        'Content-Type': 'text/html; charset=UTF-8',
      },
    });
  },
};
