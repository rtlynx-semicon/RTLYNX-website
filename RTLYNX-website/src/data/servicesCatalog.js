/**
 * Single source for service titles, descriptions, and capabilities.
 * Used by /services (Explore Services), Home cards, and each service detail page.
 */

export const servicesCatalog = [
  {
    link: "/services/sipi",
    title: "Silicon-to-Systems Signal & Power Integrity Engineering (SI/PI)",
    pageHeading: "Silicon-to-Systems Signal & Power Integrity Engineering",
    description:
      "Integrated Signal Integrity (SI) and Power Integrity (PI) engineering across silicon, package, PCB and system-level interconnects, supported by simulation, design optimization and measurement correlation.",
    capabilities: [
      {
        title: "Signal Integrity Analysis",
        desc: "High-speed channel modeling, impedance discontinuities, reflections, crosstalk and signal quality analysis.",
      },
      {
        title: "Power Integrity & PDN Analysis",
        desc: "Power delivery network (PDN) impedance, decoupling, voltage droop, transient response and resonance analysis.",
      },
      {
        title: "Die, Package & PCB Co-Design",
        desc: "SI/PI analysis and interconnect modeling across silicon, advanced packaging and PCB interfaces.",
      },
      {
        title: "3D Electromagnetic Modeling",
        desc: "Electromagnetic extraction and analysis of packages, interconnects, connectors and high-speed structures.",
      },
      {
        title: "Simulation & Design Optimization",
        desc: "Model development, simulation, root-cause analysis and engineering recommendations for design improvement.",
      },
      {
        title: "Measurement & Correlation",
        desc: "Correlation of simulation results with laboratory measurements to validate models and improve design confidence.",
      },
    ],
  },
  {
    link: "/services/chip",
    title: "Chip & Silicon Engineering",
    pageHeading: "Chip & Silicon Engineering",
    description:
      "Complete silicon development from architecture to tape-out and post-silicon validation.",
    capabilities: [
      {
        title: "Architecture & Micro-architecture",
        desc: "Requirements analysis, system & block-level architecture, PPA feasibility.",
      },
      {
        title: "Analog & Mixed-Signal IC Design",
        desc: "Custom analog/mixed-signal blocks, data converters, PLLs, and high-speed interfaces.",
      },
      {
        title: "RF",
        subItems: [
          "RFIC & Microwave IC Development",
          "GaN / GaAs MMIC Engineering",
          "Antenna & RF Front-End Co-Optimization",
        ],
      },
      {
        title: "RTL Design & Integration",
        desc: "IP/subsystem RTL, SoC integration, low-power techniques.",
      },
      {
        title: "Verification & Validation",
        desc: "UVM-based verification, coverage-driven validation.",
      },
      {
        title: "Physical Design",
        desc: "Synthesis, place & route, timing closure and sign-off.",
      },
      {
        title: "DFT (Design For Test)",
        desc: "Scan insertion, ATPG, MBIST/LBIST.",
      },
      {
        title: "Silicon Bring-Up",
        desc: "Board bring-up, debug, characterization, yield optimization.",
      },
    ],
  },
  {
    link: "/services/ai",
    title: "Agentic AI Systems",
    pageHeading: "Agentic AI Systems",
    description:
      "Intelligent agent-based systems that operate autonomously across device, edge, and cloud.",
    capabilities: [
      { title: "AI Agent Architecture", desc: "Multi-agent design, task orchestration, workflow planning." },
      { title: "On-Device AI", desc: "Model optimization, quantization, low-power inference." },
      { title: "Edge AI Systems", desc: "Real-time inferencing, event-driven AI triggers." },
      { title: "Cloud AI Integration", desc: "LLM-based reasoning, vector search, workflows." },
      { title: "Safety & Governance", desc: "Guardrails, monitoring, responsible AI practices." },
    ],
  },
  {
    link: "/services/hardware",
    title: "Hardware Platform Engineering",
    pageHeading: "Hardware Platform Engineering",
    description:
      "High-density, high-performance hardware platforms engineered for reliability and manufacturability.",
    capabilities: [
      {
        title: "Hardware System Architecture",
        desc: "Requirement analysis, interface & protocol definition, BOM optimization.",
      },
      {
        title: "High-Speed Board Design",
        desc: "Multi-layer PCB, SI/PI analysis, DDR/PCIe routing.",
      },
      {
        title: "Embedded Hardware Design",
        desc: "MCU/SoC boards, FPGA platforms, power design.",
      },
      {
        title: "Prototyping & Validation",
        desc: "Schematics, PCB layout, EVT/DVT/PVT testing.",
      },
      {
        title: "Compliance & Certification",
        desc: "EMI/EMC, safety, RoHS/REACH.",
      },
      {
        title: "Manufacturing Support",
        desc: "Gerber files, vendor coordination, test-jig design.",
      },
      {
        title: "Mechanical Design",
        desc: "Mechanical component and assembly design for electronic hardware and integrated systems.",
      },
      {
        title: "CAD/CAM Engineering",
        desc: "3D CAD modeling, engineering drawings and computer-aided manufacturing support for product development.",
      },
      {
        title: "Enclosure Design",
        desc: "Design of electronic enclosures, mechanical packaging and mounting solutions, considering thermal requirements and system integration.",
      },
    ],
  },
  {
    link: "/services/embedded",
    title: "Systems & Embedded Engineering",
    pageHeading: "Systems & Embedded Engineering",
    description:
      "Robust embedded systems integrating firmware, RTOS, Linux, and system optimization.",
    capabilities: [
      {
        title: "Embedded Firmware Development",
        desc: "Bare-metal firmware, BSP, bootloaders, power management.",
      },
      {
        title: "Real-Time Operating Systems (RTOS)",
        desc: "FreeRTOS, Zephyr, ThreadX, deterministic tuning.",
      },
      {
        title: "Linux Systems Engineering",
        desc: "Kernel porting, drivers, middleware.",
      },
      {
        title: "System Integration & Optimization",
        desc: "Performance tuning, hardware-software co-validation.",
      },
      {
        title: "Testing & Automation",
        desc: "HIL, SIL, automated regression frameworks.",
      },
      {
        title: "Connectivity & Drivers",
        desc: "BLE, Wi-Fi, Ethernet, peripheral interfaces.",
      },
    ],
  },
  {
    link: "/services/connected",
    title: "Secured & Connected Ecosystems",
    pageHeading: "Secured & Connected Ecosystems",
    description:
      "Device–Edge–Cloud engineering with built-in security, reliability, and scalability.",
    capabilities: [
      { title: "IoT Device Connectivity", desc: "MQTT, CoAP, secure provisioning, OTA updates." },
      { title: "Edge Computing", desc: "On-device inference, data filtering, low-latency pipelines." },
      { title: "Cloud Platforms", desc: "AWS IoT, Azure IoT, telemetry pipelines, dashboards." },
      { title: "Security Engineering", desc: "Secure boot, identity, encryption, device attestation." },
      { title: "Data Pipeline Design", desc: "Telemetry ingestion, event processing, analytics." },
    ],
  },
];

export function getServiceByLink(link) {
  return servicesCatalog.find((s) => s.link === link);
}

/** Bullet labels on Explore Services — one per capability card on the detail page. */
export function getOverviewHighlights(capabilities) {
  return capabilities.map((cap) => cap.title);
}
