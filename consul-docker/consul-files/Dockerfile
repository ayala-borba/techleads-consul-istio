FROM consul:1.7.0
FROM envoyproxy/envoy:v1.13.0
COPY --from=0 /bin/consul /bin/consul
ENTRYPOINT ["consul", "connect", "envoy"]