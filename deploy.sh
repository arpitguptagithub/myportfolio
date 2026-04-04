#!/usr/bin/env bash
set -euo pipefail

# ──────────────────────────────────────────────
# deploy.sh — Portfolio build & deploy helper
# ──────────────────────────────────────────────

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m'

print_help() {
  echo ""
  echo -e "${CYAN}╔══════════════════════════════════════════════╗${NC}"
  echo -e "${CYAN}║       Arpit Portfolio — Deploy Script        ║${NC}"
  echo -e "${CYAN}╚══════════════════════════════════════════════╝${NC}"
  echo ""
  echo -e "  ${GREEN}Usage:${NC} ./deploy.sh <command>"
  echo ""
  echo -e "  ${YELLOW}Commands:${NC}"
  echo -e "    ${GREEN}setup${NC}       Install npm dependencies"
  echo -e "    ${GREEN}dev${NC}         Start Vite dev server (hot reload)"
  echo -e "    ${GREEN}build${NC}       Build production bundle"
  echo -e "    ${GREEN}preview${NC}     Preview production build locally"
  echo -e "    ${GREEN}deploy${NC}      Build & deploy to GitHub Pages"
  echo -e "    ${GREEN}docker${NC}      Build & run with Docker Compose"
  echo -e "    ${GREEN}docker-stop${NC} Stop Docker container"
  echo -e "    ${GREEN}clean${NC}       Remove dist/ and node_modules/"
  echo ""
  echo -e "  ${YELLOW}Examples:${NC}"
  echo -e "    ./deploy.sh setup && ./deploy.sh dev"
  echo -e "    ./deploy.sh docker"
  echo ""
}

cmd_setup() {
  echo -e "${CYAN}▸ Installing dependencies...${NC}"
  npm ci
  echo -e "${GREEN}✓ Dependencies installed${NC}"
}

cmd_dev() {
  echo -e "${CYAN}▸ Starting dev server...${NC}"
  npm run dev
}

cmd_build() {
  echo -e "${CYAN}▸ Building production bundle...${NC}"
  npm run build
  echo -e "${GREEN}✓ Build complete → dist/${NC}"
}

cmd_preview() {
  echo -e "${CYAN}▸ Starting preview server...${NC}"
  npm run preview
}

cmd_deploy() {
  echo -e "${CYAN}▸ Building for production...${NC}"
  npm run build
  echo -e "${CYAN}▸ Deploying to GitHub Pages...${NC}"
  npm run deploy
  echo -e "${GREEN}✓ Deployed to GitHub Pages${NC}"
}

cmd_docker() {
  echo -e "${CYAN}▸ Building & starting Docker container...${NC}"
  docker compose up --build -d
  echo -e "${GREEN}✓ Portfolio running at http://localhost:3000${NC}"
}

cmd_docker_stop() {
  echo -e "${CYAN}▸ Stopping Docker container...${NC}"
  docker compose down
  echo -e "${GREEN}✓ Container stopped${NC}"
}

cmd_clean() {
  echo -e "${YELLOW}▸ Cleaning dist/ and node_modules/...${NC}"
  rm -rf dist node_modules
  echo -e "${GREEN}✓ Clean complete${NC}"
}

# ──────────────────────────────────────────────
# Main
# ──────────────────────────────────────────────
case "${1:-}" in
  setup)       cmd_setup ;;
  dev)         cmd_dev ;;
  build)       cmd_build ;;
  preview)     cmd_preview ;;
  deploy)      cmd_deploy ;;
  docker)      cmd_docker ;;
  docker-stop) cmd_docker_stop ;;
  clean)       cmd_clean ;;
  *)           print_help ;;
esac