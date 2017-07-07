function reduce(item) {
    if (Array.isArray(item)) {
        return reduce(choose(item));
    }
    if (typeof item === "function") {
        return reduce(item());
    }
    return item;
}

function combine(list) {
    if (!Array.isArray(list)) {
        list = [list];
    }
    var combined = "";
    for (var i = 0; i < list.length; i++) {
        var reduced = reduce(list[i]);
        if (reduced) {
            combined += reduced + ' ';
        }
    }
    return combined.slice(0, combined.length - 1);
}

function choose(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function whole_number() {
    return Math.floor(Math.random() * 100);
}

function percentage() {
    return whole_number() + "%";
}

function crate() {
    var crates = [
        "Cargo",
        "Clippy",
        "GTK-rs",
        "Iron",
        "LALRPOP",
        "Piston",
        "Rayon",
        "Rocket",
        "RustyXML",
        "WebRender",
        "bindgen",
        "conrod",
        "dyon",
        "futures",
        "glium",
        "gutenberg",
        "hlua",
        "html5ever",
        "hyper",
        "ipc-channel",
        "irc",
        "log4rs",
        "nalgebra",
        "neon",
        "nom",
        "petgraph",
        "reqwest",
        "ring",
        "ripgrep",
        "rust-openssl",
        "rust-persian-calendar",
        "rust-sdl2",
        "rust-zmq",
        "rust-zookeeper",
        "rustache",
        "rustlearn",
        "rustqlite",
        "serde",
        "tikv",
        "tokio",
        "vulkano",
        "websocket",
        "whatlang-rs",
        "winapi-rs",
    ];
    var c = choose(crates);
    return "<a href='https://crates.io/crates/" + c + "'>" + c + "</a>";
}

var lang = [
    "Ada",
    "BASIC",
    "C",
    "C#",
    "C++",
    "COBOL",
    "Coffeescript",
    "D",
    "Dart",
    "Delphi",
    "Elisp",
    "Elixir",
    "Elm",
    "Erlang",
    "Go",
    "Haskell",
    "Java",
    "Lisp",
    "Malbolge",
    "MUMPS",
    "node.js",
    "Pascal",
    "Python",
    "Ruby",
    "SQL",
    "TypeScript",
];

var modifiers = [
    "concurrent",
    "fearless",
    "garbage-collected",
    "highly parallel",
    "idiomatic",
    "memory-safe",
    "parallel",
    "powerful",
    "privacy-preserving",
    "private",
    "proof-of-concept",
    "resilient",
    "scalable",
    "text-based",
    "tiny",
    "unsafe",
    "visual",
];

function optional_modifier() {
    if (Math.random() > 0.8) {
        return null;
    }
    return choose(modifiers);
}

function tech() {
    var techs = [
        "rendering",
        ["a", optional_modifier, "server"],
        "virtual reality",
        "p2p communication",
        ["the", optional_modifier, "blockchain"],
        "machine learning",
        "statistical analysis",
        "fraud detection",
        "distributed communication",
        "parsing",
        ["the", optional_modifier, "backend"],
        ["the", optional_modifier, "frontend"],
        "games",
        "mobile",
        "embedded devices",
        "bare metal",
        "augmented reality",
        "cryptography",
        "verifiable computation",
        "async i/o",
        "coroutines",
        "fuzzing",
        ["a", optional_modifier, "build system"],
        "reproducible builds",
        "end-to-end encryption",
        ["a", optional_modifier, "fridge"],
        "logging",
        ["a", optional_modifier, "operating system"],
        ["a", optional_modifier, "roguelike"],
        "robots",
        "space travel",
        "science",
        "biochemistry",
        "artificial intelligence",
        "audio production",
        "databases",
        "long-term storage",
        "steganography",
        "raytracing",
        ["a", optional_modifier, "kernel module"],
        ["a", optional_modifier, "text editor"],
        "musical analysis",
        "complicated math",
        "natural language processing",
    ];
    var t = choose(techs);
    if (typeof t === "string") {
        return combine([optional_modifier, t]);
    }
    return combine(t);
}

var patterns = [
    ["Use", crate, "for", tech],
    ["Learn about", tech, "using", crate],
    ["Build", tech, "only using", crate],
    ["Combine", crate, "and", crate, "to finally make", tech, "possible"],
    ["Write", modifiers, lang, "bindings for", crate],
    ["Make a proof of concept clone of", crate, "for", tech],
    ["Create a", optional_modifier, "Rust-based bridge from", lang, "to", lang],
    ["Transpile", lang, "to", optional_modifier, "Rust"],
    ["Transpile Rust to", lang],
    ["Write a", optional_modifier, lang, "interpreter in Rust"],
    ["Release the first crate for", tech],
    ["Incorporate the best ideas from", optional_modifier, lang, "into", crate],
    ["Experiment with", tech, "in Rust"],
    ["Create the definitive benchmark of", crate, "for", tech],
];

function inspire() {
    var pattern = choose(patterns);
    var combined = combine(pattern);
    return combined + choose([".", "...", "!", "!!"]);
}
