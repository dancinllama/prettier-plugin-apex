const parse = require("./parser");
const print = require("./printer");

const languages = [
  {
    name: "Apex",
    parsers: ["apex"],
    extensions: [".cls", ".trigger"],
    linguistLanguageId: 17,
    vscodeLanguageIds: ["apex"],
  },
];

function locStart(node) {
  if (node.loc) {
    return node.loc;
  }
  return { line: -1, column: -1 };
}

function locEnd() {
  return -1;
}

const parsers = {
  apex: {
    astFormat: "apex",
    parse,
    locStart,
    locEnd,
  },
};

const printers = {
  apex: {
    print,
  },
};

const options = {
  apexStandaloneParser: {
    type: "boolean",
    category: "Global",
    default: false,
    description:
      "Use a standalone process to speed up parsing. This process needs to be started and stopped separately from the Prettier process",
  },
  apexStandalonePort: {
    type: "int",
    category: "Global",
    default: 2113,
    description:
      "The standalone server port to connect to. Only applicable if apexStandaloneParser is true",
  },
};

const defaultOptions = {};

module.exports = {
  languages,
  printers,
  parsers,
  options,
  defaultOptions,
};
