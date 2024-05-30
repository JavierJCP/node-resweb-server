import express from 'express';
import path from 'path';

interface Options {
  port: number;
  publicPath?: string;
}

export class ServerApp {
  private readonly app = express();
  private readonly port: number;
  private readonly publicPath: string;

  constructor({ port, publicPath = 'public' }: Options) {
    this.port = port;
    this.publicPath = publicPath;
  }

  async start(): Promise<void> {
    // middleware
    this.app.use(express.static(this.publicPath));

    this.app.get('*', (req, res) => {
      const indexPath = path.join(
        __dirname + `../../../${this.publicPath}/index.html`
      );
      res.sendFile(indexPath);
    });

    this.app.listen(this.port, () => {
      console.log(`🟢 http://localhost:3000`);
    });
  }
}
