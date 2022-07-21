export default {
  key: "nodeRed",
  title: "Node-RED",
  properties: {
    "nodeRed.server": {
      $id: "#/properties/nodeRed.server",
      type: "string",
      title: "Node-RED Server Hostname",
      default: "",
      examples: [],
      pattern: "^(.*)$"
    },
    "nodeRed.username": {
      $id: "#/properties/nodeRed.username",
      type: "string",
      title: "Node-RED Server Username",
      default: "",
      examples: [],
      pattern: "^(.*)$"
    },
    "nodeRed.password": {
      $id: "#/properties/nodeRed.password",
      type: "string",
      title: "Node-RED Server Password",
      default: "",
      examples: [""],
      pattern: "^(.*)$"
    },
    "nodeRed.endpoint_url": {
      $id: "#/properties/nodeRed.endpoint_url",
      type: "string",
      title: "Node-RED HTTP Endpoint",
      examples: ["/endpoint/example"],
      pattern: "^(.*)$"
    },
    "nodeRed.wake_up_keyword": {
      $id: "#/properties/nodeRed.wake_up_keyword",
      type: "string",
      title: "Device Wakeup Word",
      examples: ["AWAKE"],
      pattern: "^(.*)$"
    },
    "nodeRed.sleep_keyword": {
      $id: "#/properties/nodeRed.sleep_keyword",
      type: "string",
      title: "Device Sleep Word",
      examples: ["SLEEP"],
      pattern: "^(.*)$"
    }
  }
};
