import React from 'react'
import MemoizedFontAwesomeIcon from '../util/MemoizedFontAwesomeIcon'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

export default {
  "display.display_type": {
    "ui:help": "Model of the e-paper display you're using"
  },
  "display.windowed_updates": {
    "ui:help":
      "When enabled, update partial regions of the screen.  Only enable this if your display does not support partial updates.",
    transformer: x => x.toLowerCase() === "true"
  },
  "display.clever_reset": {
    "ui:help":
      "Only enable this for Waveshare boards with \"clever\" reset switch. (GDEW075T7 7.5 B/W 800X480 [V2] need this!)",
    transformer: x => x.toLowerCase() === "true"
  },
  "power.battery_mode": {
    "ui:help": <>
    <div>
      This will enable battery information on two specific system variables: "battery_voltage", "battery_level".
    </div>
    <div class="warning">
      <MemoizedFontAwesomeIcon icon={faExclamationTriangle} className="text-warning fa-fw mr-1" />
      <b>Important! Enable this ONLY when you have connected battery!</b>
    </div>
    <div class="warning">
      <MemoizedFontAwesomeIcon icon={faExclamationTriangle} className="text-warning fa-fw mr-1" />
      <b>If you want to remove the battery, you MUST to disable the option first!</b>
    </div>
    </>,
    transformer: x => x.toLowerCase() === "true"
  },
  "power.battery_adc_pin": {
    "ui:help": <>
    <div>
    Use this pin to measure the battery. (Default Pin: 35)
    </div>
    </>,
    transformer: parseInt
  },
  "power.battery_conv_factor": {
    "ui:help": <>
    <div>
    "Convertion factor for analog read units to volts. (Default: 1.70)
    </div>
    <div class="warning">
      <MemoizedFontAwesomeIcon icon={faExclamationTriangle} className="text-warning fa-fw mr-1" />
      <b>Changing any of these settings requires a reboot!</b>
    </div>
    </>,
    transformer: parseFloat
  },
  "power.sleep_mode": {
    "ui:help": (
      <ul className="mt-2">
        <li>
          <b>Always On</b> &mdash; Normal operation. System stays powered at all
          times
        </li>
        <li>
          <b>Deep Sleep</b> &mdash; Conserve power. System continuously boots
          for a configurable period waiting for updates, and then puts itself to
          sleep for a configurable period.
        </li>
      </ul>
    )
  },
  "power.sleep_override_pin": {
    "ui:help":
      "When this pin is held during boot, deep sleep will be disabled until the next restart.",
    transformer: parseInt
  },
  "power.sleep_override_value": {
    "ui:help": "The value Sleep Override Pin must be held to in order to suspend deep sleep."
  },
  "mqtt.password": {
    "ui:widget": "password"
  },
  "web.admin_password": {
    "ui:widget": "password"
  },
  "network.wifi_password": {
    "ui:widget": "password"
  },
  "hardware.busy_pin": {
    transformer: parseInt
  },
  "hardware.dc_pin": {
    transformer: parseInt
  },
  "hardware.rst_pin": {
    transformer: parseInt
  },
  "hardware.ss_pin_override": {
    transformer: parseInt,
    "ui:help": <>
    <div>
      SPI bus to use.  HSPI uses GPIOs 12, 14, 15.  VSPI uses 5, 18, 19.  See README for more details.
    </div>
    <div>
      <MemoizedFontAwesomeIcon icon={faExclamationTriangle} className="text-warning fa-fw mr-1" />
      <b>Tips: If you using esp32doit-devkit-v1 or Olimex-ESP32-DevKit-LiPo you can try with this configuration: "Busy Pin: 4, DC Pin: 22, RST Pin: 21, SPI Bus: VSPI, SPI SS Pin Override: 5"!</b>
    </div>
    <div>
      <MemoizedFontAwesomeIcon icon={faExclamationTriangle} className="text-warning fa-fw mr-1" />
      <b>Changing any of these settings requires a reboot!</b>
    </div>
    </>
  },
  "hardware.spi_bus": {
  },
  "web.port": {
    transformer: parseInt
  },
  "mqtt.client_status_topic": {
    "ui:help": "If provided, MQTT birth and LWT messages will be published to this topic."
  }
};
