# 1단계: 종속성 설치 및 빌드
FROM node:18 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 2단계: 실행 전용 (더 작고 빠름)
FROM node:18-slim

WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000

CMD ["npm", "start"]
