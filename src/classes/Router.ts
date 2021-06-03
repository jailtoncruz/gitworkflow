import {
  Server,
  ServerRequest,
} from "https://deno.land/std@0.97.0/http/server.ts";

enum HTTPMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

class RouterGroup {
  prefix: string;
  paths: Array<
    {
      path: string;
      method: (req: ServerRequest) => void;
      httpMethod: HTTPMethods;
    }
  >;

  constructor(prefix: string = "/") {
    this.prefix = prefix;
    this.paths = new Array<
      {
        path: string;
        method: (req: ServerRequest) => void;
        httpMethod: HTTPMethods;
      }
    >();
  }

  get(path: string, method: (req: ServerRequest) => void) {
    this.paths.forEach((paths) => {
      if (paths.path === path) {
        throw new Error(
          `Conflito de endereços detectado para o endpoint ${path}`,
        );
      }
    });
    this.paths.push({ path, method, httpMethod: HTTPMethods.GET });
  }

  entry(req: ServerRequest) {
    switch (req.method) {
      case HTTPMethods.GET:
        {
          const target = this.paths.filter((item) => {
            if (
              item.httpMethod === HTTPMethods.GET &&
              this.prefix + item.path === req.url
            ) {
              return item;
            }
          })[0];
          target.method(req);
        }
        break;
      case HTTPMethods.POST:
        req.respond({
          body: JSON.stringify({ Error: "Metodo não implementado." }),
        });
        break;
      case HTTPMethods.PUT:
        req.respond({
          body: JSON.stringify({ Error: "Metodo não implementado." }),
        });
        break;
      case HTTPMethods.DELETE:
        req.respond({
          body: JSON.stringify({ Error: "Metodo não implementado." }),
        });
        break;
      default:
        req.respond({
          body: JSON.stringify({ Error: "Metodo não implementado." }),
        });
        break;
    }
  }
}

class Router {
  groups: Array<RouterGroup>;

  constructor() {
    this.groups = new Array<RouterGroup>(new RouterGroup("/"));
  }

  async use(server: Server) {
    for await (const req of server) {
      // req.url retorna o recurso solicitado após a url, como /users ou /api
      const resource = req.url.split("/");

      const target = this.groups.filter((group) => {
        // Inicialmente o programa só precisa checar o prefixo do recurso.
        if (group.prefix.replace("/", "") === resource[1]) return group;
      })[0];

      target.entry(req);
    }
  }

  group(prefix: string) {
    this.groups.forEach((item) => {
      if (item.prefix === prefix) {
        throw new Error(`Prefixo em uso por outro grupo.`);
      }
    });
    const newGroup = new RouterGroup(prefix);
    this.groups.push(newGroup);

    return newGroup;
  }
}

export default Router;
