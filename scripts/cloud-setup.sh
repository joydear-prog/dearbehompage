#!/usr/bin/env bash
# Claude Code SessionStart 훅 — 클라우드 세션(claude.ai/code)에서만 의존성을 설치합니다.
# package-lock.json 이 바뀌었을 때만 npm ci 를 다시 실행합니다.
# (Anthropic 문서의 "Install dependencies with a SessionStart hook" 패턴)

if [ "$CLAUDE_CODE_REMOTE" != "true" ]; then
  exit 0
fi

cd "$CLAUDE_PROJECT_DIR" || exit 1
hashes=node_modules/.cloud-setup.sha256

if ! sha256sum --check --status "$hashes" 2>/dev/null; then
  rm -f "$hashes"
  if npm ci --no-audit --no-fund; then
    sha256sum scripts/cloud-setup.sh package.json package-lock.json > "$hashes" || rm -f "$hashes"
  fi
fi

exit 0
