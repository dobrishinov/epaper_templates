export default {
  key: "network",
  title: "Network",
  properties: {
    "network.hostname": {
      $id: "#/properties/network.hostname",
      type: "string",
      title: "Hostname",
      examples: ["epaper-display"],
      pattern: "^(.*)$"
    },
    "network.ntp_server": {
      $id: "#/properties/network.ntp_server",
      type: "string",
      title: "NTP Server",
      default: "pool.ntp.org",
      examples: ["pool.ntp.org"],
      pattern: "^(.*)$"
    },
    "network.mdns_name": {
      $id: "#/properties/network.mdns_name",
      type: "string",
      title: "mDNS Name",
      default: "",
      examples: ["epaper-display"],
      pattern: "^(.*)$"
    },
    "network.setup_ap_password": {
      $id: "#/properties/network.setup_ap_password",
      type: "string",
      title: "Setup AP Password",
      default: "",
      examples: ["waveshare"],
      pattern: "^(.*)$"
    },
    "network.wifi_ssid": {
      $id: "#/properties/network.wifi_ssid",
      type: "string",
      title: "WiFi SSID",
      default: "",
      examples: [""],
      pattern: "^(.*)$"
    },
    "network.wifi_password": {
      $id: "#/properties/network.wifi_password",
      type: "string",
      title: "WiFi Password",
      default: "",
      examples: [""],
      pattern: "^(.*)$"
    },
    "network.static_ip_mode": {
      $id: "#/properties/network.static_ip_mode",
      type: "boolean",
      title: "Set Static IP Address",
      default: false
    },
  },
  required: ["network.static_ip_mode"],
  dependencies: {
    "network.static_ip_mode": {
      oneOf: [
        {
          properties: {
            "network.static_ip_mode": {
              const: false
            }
          }
        },
        {
          properties: {
            "network.static_ip_mode": {
              "const": true
            },
            "network.static_ip": {
              $id: "#/properties/network.static_ip",
              type: "string",
              title: "Static IP",
              examples: [""],
              pattern: "^(.*)$"
            },
            "network.gateway": {
              $id: "#/properties/network.gateway",
              type: "string",
              title: "Gateway",
              examples: [""],
              pattern: "^(.*)$"
            },
            "network.subnet": {
              $id: "#/properties/network.subnet",
              type: "string",
              title: "Subnet",
              examples: [""],
              pattern: "^(.*)$"
            },
            "network.dns": {
              $id: "#/properties/network.dns",
              type: "string",
              title: "DNS",
              examples: [""],
              pattern: "^(.*)$"
            },
          }
        }
      ]
    },
  }
};
