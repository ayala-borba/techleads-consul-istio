services {
    id = "servicenode1"
    name = "servicenode"
    port = 3000
    connect {
        sidecar_service {}
    }
    tags = ["v1"]
}

services {
    id = "servicenode2"
    name = "servicenode"
    port = 3001
    connect {
        sidecar_service {}
    }
    tags = ["v2"]
}

services {
    id = "servicegetter"
    name = "servicegetter"
    port = 3002
    connect = {
        sidecar_service = {
            proxy = {
                upstreams = {
                    destination_name = "servicenode"
                    local_bind_port = 1234
                }
            }
        }
    }
    tags = []
}

config_entries {
  bootstrap {
    kind = "proxy-defaults"
    name = "global"

    config {
      protocol = "http"
    }
  }

  bootstrap {
    kind           = "service-resolver"
    name           = "servicenode"
    default_subset = "v1"

    subsets = {
      "v1" = {
        filter = "v1 in Service.Tags"
      }

      "v2" = {
        filter = "v2 in Service.Tags"
      }
    }
  }

  bootstrap {
    kind = "service-router"
    name = "servicenode"
    routes = [
        {
            match {
            http {
                header = [
                {
                    name  = "x-debug"
                    exact = "1"
                },
                ]
            }
            }
            destination {
                service        = "servicenode"
                service_subset = "v1"
            }
        },
        {
            destination {
                service        = "servicenode"
                service_subset = "v2"
            }
        }
    ]
  }
}