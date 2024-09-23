# 使用官方 Node.js 镜像作为基础镜像
FROM node:18

# 安装 ffmpeg
RUN apt-get update && apt-get install -y ffmpeg

# 创建并设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 复制项目文件
COPY . .

# 构建项目
RUN npm run build

# 暴露应用运行的端口
EXPOSE 3000

# 启动应用
CMD ["npm", "start"]
