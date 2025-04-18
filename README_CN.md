[Dify 云服务](https://cloud.dify.ai) ·
[自托管](https://docs.dify.ai/getting-started/install-self-hosted) ·
[文档](https://docs.dify.ai) ·
[私人地址](https://github.com/17371/dify-1737/tree/from-dify-main)

[![简体中文版自述文件](https://img.shields.io/badge/简体中文-d9d9d9)](./README_CN.md)

### 克隆 Dify

1. 将 Dify 源代码克隆到本地机器：

```bash
# Assuming current latest version is 0.15.3
git clone https://github.com/langgenius/dify.git --branch 0.15.3
```

### 启动 Dify

1. 导航到 Dify 源代码中的 Docker 目录

   ```bash
   cd dify/docker
   ```

2. 复制环境配置文件

   ```bash
   cp .env.example .env
   ```

3. 启动 Docker 容器

根据系统上的 Docker Compose 版本，选择适当的命令来启动容器。您可以使用该$ docker compose version 命令检查版本，并参考 Docker 文档了解更多信息：

- 如果您有 Docker Compose V2，请使用以下命令：

```bash
docker compose up -d
docker-compose -p dify-1737 up -d
```

- 如果您有 Docker Compose V1，请使用以下命令：

```bash
docker-compose up -d
```

最后检查所有容器是否运行成功：

```bash
docker compose ps
```

其中包括 3 个核心服务：api / worker / web，以及 6 个依赖组件：weaviate / db / redis / nginx / ssrf_proxy / sandbox。

通过这些步骤，您应该能够成功安装 Dify。

### 升级 Dify

进入 dify 源码的 docker 目录，执行以下命令：

```bash
cd dify/docker
docker compose down
git pull origin main
docker compose pull
docker compose up -d
```

#### 同步环境变量配置（重要）

- 如果.env.example 文件已更新，请务必相应.env 地修改本地文件。
- 根据需要检查并修改文件中的配置项，.env 以确保它们与您的实际环境匹配。您可能需要将任何新变量添加到文件.env.example 中.env，并更新任何已更改的值。

### 访问 Dify

进入管理员初始化页面设置管理员账户：

```bash
# Local environment
http://localhost/install

# Server environment
http://your_server_ip/install
```

Dify 网页界面地址：

```bash
# Local environment
http://localhost

# Server environment
http://your_server_ip
```

### 定制 Dify

.env 直接编辑文件中的环境变量值。然后，使用以下命令重新启动 Dify：

```
docker compose down
docker compose up -d
```

可以在 docker/.env.example 下找到带注释的完整环境变量集。

## 修改 web

### 修改 web 文件

### 换源，不需要

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories

RUN pnpm install --frozen-lockfile --registry https://mirrors.huaweicloud.com/repository/npm/

RUN pnpm add -g pm2 --registry https://mirrors.huaweicloud.com/repository/npm/ \
 && mkdir /.pm2 \
 && chown -R 1001:0 /.pm2 /app/web \
 && chmod -R g=u /.pm2 /app/web

### 编译 docker

```
cd ../web
docker build . -t dify-1737-web.img:1.2.0
```

### 修改 image

为打开 docker-compose.yaml 文件，并找到以下信息（大概在 500 行左右）

```
cd ../docker 
docker compose up -d
```
