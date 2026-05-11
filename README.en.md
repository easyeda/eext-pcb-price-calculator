[中文](./README.md)

# eext-pcb-price-calculator

EasyEDA Pro extension: Offline PCB Price Calculator

## Introduction

This project is an extension for EasyEDA Pro that provides offline PCB price calculation functionality. Users can access the tool via the menu within EasyEDA Pro and estimate PCB manufacturing costs without an internet connection.

## Features

- Supports input parameters such as board dimensions, layer count, quantity, etc.
- Real-time calculation and display of PCB price
- Results can be copied or exported
- Fully offline operation, no network connection required
- Multi-language interface (supports Chinese, English, etc.)

## Usage

1. Import this extension (`.eext` file) into EasyEDA Pro.
2. Open the tool via the "PCB Price Calculator" entry in the top menu bar.
3. Fill in the PCB parameters in the popup IFrame interface (e.g., length, width, layer count, quantity, etc.).
4. Click the "Calculate" button to view the price estimation result.
5. You can copy the result or export it as a file.

## Parameter Description

- **Dimensions**: Enter the length and width of the PCB (unit: mm).
- **Layer Count**: Select the number of PCB layers (e.g., 2-layer, 4-layer, etc.; automatically obtained after selecting the PCB).
- **Quantity**: Enter the number of PCBs to be produced.
- **Other Options**: Such as surface finish, solder mask color, etc. (if available).

## Localization

Supports a multi-language interface; the language switches automatically based on EasyEDA Pro settings.

## Technical Notes

- The frontend interface is based on `iframe/index.html`, written in vanilla HTML/CSS/JS.
- Interacts with the main program through the `eda` API provided by EasyEDA Pro.
- All calculation logic is completed locally on the browser side, no internet connection required.

## Development and Build

Please refer to the [Copilot Instructions](./.github/copilot-instructions.md) for detailed development, build, and packaging process instructions.

## License

This project is released under an open source license; see the LICENSE file for details.
