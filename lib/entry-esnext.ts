import "./network/modules/ManipulationSystem.css";
import "./network/modules/components/NavigationHandler.css";
import "vis-util/esnext/styles/activator.css";
import "vis-util/esnext/styles/bootstrap.css";
import "vis-util/esnext/styles/color-picker.css";
import "vis-util/esnext/styles/configurator.css";
import "vis-util/esnext/styles/popup.css";

export * from "./network/Network";

export { default as NetworkImages } from "./network/Images";

import * as dotparser from "./network/dotparser";
export { dotparser as networkDOTParser };
export const parseDOTNetwork = dotparser.DOTToGraph;

import * as gephiParser from "./network/gephiParser";
export { parseGephi as parseGephiNetwork } from "./network/gephiParser";
export { gephiParser as networkGephiParser };

import * as allOptions from "./network/options";
export { allOptions as networkOptions };

// DataSet, utils etc. can't be reexported here because that would cause stack
// overflow in UMD builds. They all export vis namespace therefore reexporting
// leads to loading vis to load vis to load vis…
