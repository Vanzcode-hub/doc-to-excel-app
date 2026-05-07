
export interface FormatDefinition {
  id: string;
  label: string;
  headers: string[];
  instructionPrefix: string;
  dynamicColumns: string[];
}

export const DOCUMENT_FORMATS: FormatDefinition[] = [
  {
    id: "format-a",
    label: "Comprehensive Audit (Format A)",
    headers: [
      "Sr. No.", "Equipment Name", "Application", "Make", "Frame Size", "Foot or Flange Mounted", 
      "Rated Power ,KW", "Rated Efficiency,%", "IE Class (IE1/IE2/IE3)", "Rated RPM", 
      "Direcct Mount/Pulley /Gear", "VFD installed Y/N", "Daily Running Hours", 
      "Annual operating Days", "Observation", "VFD Make and Model", 
      "VFD operating Frequency if VFD is Installed", "Q ,m3/hr", "Head,m", 
      "Measured Flow , m3/hr", "Suction press (Kg/cm2)", "Discharge Pressure (Kg/cm2)", 
      "Suction Tempreture Air comp", "Condenser IN(Kg/cm2)", "Condenser OUT(Kg/cm2)", 
      "Evaporator IN (Kg/cm2)", "Evaporator OUT (Kg/cm2)", "CT Sum Water Temperature", 
      "Air Compressor/ AWU,CFM", "Static pressure,mm wg", "Blower", 
      "Direct Mount/Pulley /Gear", "Motor Pulley Dia", "Driven Pulley Dia", 
      "Phase (R/Y/B/Avg)", "Meassured voltage", "Measured Current", "Measured kW", 
      "Measured PF", "Average Measured kW", "% Loading", "kWh/Day", "kWh/Year", 
      "Annual Energy Cost, Rs."
    ],
    instructionPrefix: "COMPREHENSIVE AUDIT MODE: This is for high-detail facility audits. Extract mechanical specs (Motor/Pump/Compressor) and map electrical readings across the 4-row (R, Y, B, Avg) structure.",
    dynamicColumns: ["Phase (R/Y/B/Avg)", "Meassured voltage", "Measured Current", "Measured kW", "Measured PF"]
  },
  {
    id: "format-b",
    label: "AHU Fan Audit (Format B)",
    headers: [
      "Sr.", "AHU Fan", "Application", "Design Flow, CFM", "Static Pressure, MMWG", 
      "Measured Static Pressure, MMWG", "Make", "Frame Size", "Foot or Flange Mounted", 
      "Rated Power, KW", "Rated Efficiency, %", "IE Class (IE1/IE2/IE3)", "Rated RPM", 
      "VFD installed, (Y/N), Oper Hz & Make", "Daily Running Hours Hrs/Day", 
      "Annual Operating Days, Days/Year", "belt / direct driven",
      "Phase (R/Y/B/Avg)", "Measured Voltage", "Measured Current", "Measured KW", "Measured PF"
    ],
    instructionPrefix: "AHU FAN MODE: Focus on Air Handling Units. Mandatory extraction of CFM (Design Flow) and Static Pressure (MMWG). Identify drive type (Belt vs Direct).",
    dynamicColumns: ["Phase (R/Y/B/Avg)", "Measured Voltage", "Measured Current", "Measured KW", "Measured PF"]
  },
  {
    id: "format-c",
    label: "Equipment Nameplate (Format C)",
    headers: [
      "Sr.", "Equipment Name", "Application", "Make", "Frame Size", "Foot or Flange Mounted", 
      "Rated Power, KW", "Rated Efficiency, %", "IE Class (IE1/IE2/IE3)", "Rated RPM", 
      "Direct Mount/ Pulley/ Gear", "VFD installed, (Y/N), Oper Hz & Make", 
      "Daily Running Hours Hrs/Day", "Annual Operating Days, Days/Year", "Observations",
      "Phase (R/Y/B/Avg)", "Measured Voltage", "Measured Current", "Measured KW", "Measured PF"
    ],
    instructionPrefix: "EQUIPMENT NAMEPLATE MODE: Standardized motor nameplate extraction. Capture mechanical load connection (Direct/Pulley/Gear) and VFD configurations.",
    dynamicColumns: ["Phase (R/Y/B/Avg)", "Measured Voltage", "Measured Current", "Measured KW", "Measured PF"]
  }
];
