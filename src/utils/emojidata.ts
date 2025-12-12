import { Emojies } from "../types/app.types"

export const symbolEmoticonArray: Emojies[] = [
        //    currency
    {
        label: "USD",
        type: "Currency",
        emoji: "$", 
        keywords: ["dollar", "usd", "money", "cash", "finance"]
    },
    {
        label: "Euro",
        type: "Currency",
        emoji: "€",
        keywords: ["euro", "eur", "europe", "money", "cash"]
    },
    {
        label: "British Pound",
        type: "Currency",
        emoji: "£",
        keywords: ["pound", "gbp", "sterling", "money", "uk"]
    },
    {
        label: "Yen / Yuan",
        type: "Currency",
        emoji: "¥",
        keywords: ["yen", "yuan", "jpy", "cny", "japan", "china"]
    },
    {
        label: "INR",
        type: "Currency",
        emoji: "₹",
        keywords: ["rupee", "inr", "india", "money"]
    },
    {
        label: "Russian Ruble",
        type: "Currency",
        emoji: "₽",
        keywords: ["ruble", "rub", "russia", "money"]
    },
    {
        label: "South Korean Won",
        type: "Currency",
        emoji: "₩",
        keywords: ["won", "krw", "korea", "money"]
    },
    {
        label: "Thai Baht",
        type: "Currency",
        emoji: "฿",
        keywords: ["baht", "thb", "thailand", "money"]
    },
    {
        label: "Turkish Lira",
        type: "Currency",
        emoji: "₺",
        keywords: ["lira", "try", "turkey", "money"]
    },{
        label: "Swiss Franc",
        type: "Currency",
        emoji: "₣", 
        keywords: ["franc", "chf", "switzerland", "money", "cash"]
    },
    {
        label: "Israeli Shekel",
        type: "Currency",
        emoji: "₪",
        keywords: ["shekel", "ils", "israel", "money"]
    },
    {
        label: "VN Dong",
        type: "Currency",
        emoji: "₫",
        keywords: ["dong", "vnd", "vietnam", "money"]
    },
    {
        label: "Hryvnia",
        type: "Currency",
        emoji: "₴",
        keywords: ["hryvnia", "uah", "ukraine", "money"]
    },
    {
        label: "Peso",
        type: "Currency",
        emoji: "₱",
        keywords: ["peso", "php", "philippines", "money"]
    },
    {
        label: "Cedi",
        type: "Currency",
        emoji: "₵",
        keywords: ["cedi", "ghs", "ghana", "money"]
    },
    {
        label: "Tugrik",
        type: "Currency",
        emoji: "₮",
        keywords: ["tugrik", "mnt", "mongolia", "money"]
    },
    {
        label: "Lao Kip",
        type: "Currency",
        emoji: "₭",
        keywords: ["kip", "lak", "laos", "money"]
    },
    {
        label: "Sucre",
        type: "Currency",
        emoji: "₳",
        keywords: ["sucre", "ecuador", "historic", "money"]
    },
    {
        label: "cash",
        type: "Currency",
        emoji: "¤",
        keywords: ["generic", "currency", "cash", "money"]
    },
    // --- Arithmetic / Math ---
    {
        label: "Plus",
        type: "Arithmetic",
        emoji: "+",
        keywords: ["add", "plus", "sum", "increase", "positive"]
    },
    {
        label: "Minus",
        type: "Arithmetic",
        emoji: "-",
        keywords: ["subtract", "minus", "difference", "decrease", "negative"]
    },
    {
        label: "Times",
        type: "Arithmetic",
        emoji: "×", // Unicode 'Multiplication Sign'
        keywords: ["multiply", "times", "product", "cross"]
    },
    {
        label: "Divide",
        type: "Arithmetic",
        emoji: "÷", // Unicode 'Division Sign'
        keywords: ["divide", "quotient", "ratio"]
    },
    {
        label: "Equals",
        type: "Arithmetic",
        emoji: "=",
        keywords: ["equal", "result", "is", "equality"]
    },
    {
        label: "Not Equal",
        type: "Arithmetic",
        emoji: "≠",
        keywords: ["not equal", "unequal", "difference"]
    },
    {
        label: "Approx",
        type: "Arithmetic",
        emoji: "≈",
        keywords: ["approximate", "almost equal", "estimate"]
    },
    {
        label: "Less Than",
        type: "Arithmetic",
        emoji: "<",
        keywords: ["smaller", "less", "lower"]
    },
    {
        label: "Greater Than",
        type: "Arithmetic",
        emoji: ">",
        keywords: ["bigger", "greater", "higher"]
    },
    {
        label: "Equal To",
        type: "Arithmetic",
        emoji: "≤",
        keywords: ["less equal", "at most"]
    },
    {
        label: "Greater Equal",
        type: "Arithmetic",
        emoji: "≥",
        keywords: ["greater equal", "at least"]
    },
    {
        label: "Percent",
        type: "Arithmetic",
        emoji: "%",
        keywords: ["percentage", "rate", "ratio", "out of 100"]
    },
    {
        label: "Permille",
        type: "Arithmetic",
        emoji: "‰",
        keywords: ["per thousand", "basis points", "rate"]
    },
    {
        label: "Infinity",
        type: "Arithmetic",
        emoji: "∞",
        keywords: ["endless", "limitless", "math", "forever"]
    },
    {
        label: "Square Root",
        type: "Arithmetic",
        emoji: "√",
        keywords: ["root", "radical", "math"]
    },{
        label: "Power",
        type: "Arithmetic",
        emoji: "^", 
        keywords: ["caret", "power", "exponent", "to the power of"]
    },
    {
        label: "Pi",
        type: "Arithmetic",
        emoji: "π",
        keywords: ["pi", "constant", "geometry", "circle", "3.14"]
    },
    {
        label: "Sigma",
        type: "Arithmetic",
        emoji: "Σ",
        keywords: ["sigma", "sum", "total", "series", "math"]
    },
    {
        label: "Integral",
        type: "Arithmetic",
        emoji: "∫",
        keywords: ["calculus", "integration", "area", "math"]
    },
    {
        label: "Partial",
        type: "Arithmetic",
        emoji: "∂",
        keywords: ["derivative", "calculus", "partial"]
    },
    {
        label: "Delta",
        type: "Arithmetic",
        emoji: "Δ",
        keywords: ["delta", "change", "difference", "triangle"]
    },
    {
        label: "varies as",
        type: "Arithmetic",
        emoji: "∝",
        keywords: ["proportional", "varies as", "relation"]
    },
    {
        label: "proof",
        type: "Arithmetic",
        emoji: "∴",
        keywords: ["therefore", "conclusion", "logic", "proof"]
    },
    {
        label: "Since",
        type: "Arithmetic",
        emoji: "∵",
        keywords: ["because", "since", "reason", "logic"]
    },
    {
        label: "Diameter",
        type: "Arithmetic",
        emoji: "∅",
        keywords: ["empty set", "null", "diameter", "math"]
    },
    {
        label: "element of",
        type: "Arithmetic",
        emoji: "∈",
        keywords: ["element of", "belongs to", "set theory"]
    },
    {
        label: "Angle",
        type: "Arithmetic",
        emoji: "∠",
        keywords: ["angle", "geometry", "corner"]
    },
    {
        label: "right angle",
        type: "Arithmetic",
        emoji: "⊥",
        keywords: ["perpendicular", "orthogonal", "right angle"]
    },
    {
        label: "Fn",
        type: "Arithmetic",
        emoji: "ƒ",
        keywords: ["function", "math", "mapping"]
    },
     // --- Happy/Positive ---
    {
        label: "Basic Smile",
        type: "Happy/Positive",
        emoji: ":)", 
        keywords: [":-)", "happy", "smile", "joy"]
    },
    {
        label: "Big Grin",
        type: "Happy/Positive",
        emoji: ":D",
        keywords: [":-D", "=D", "laugh", "big smile"]
    },
    {
        label: "Wink",
        type: "Happy/Positive",
        emoji: ";)",
        keywords: [";-)", "wink", "flirt", "sarcasm"]
    },
    {
        label: "Tongue",
        type: "Happy/Positive",
        emoji: ":P",
        keywords: [":-P", ":p", ":-p", "tongue", "silly", "playful"]
    },
    {
        label: "Kiss",
        type: "Happy/Positive",
        emoji: ":*",
        keywords: [":-*", ":x", "kiss", "smooch", "love"]
    },
    {
        label: "Heart",
        type: "Happy/Positive",
        emoji: "<3",
        keywords: ["heart", "love", "less than three"]
    },
    
    // --- Neutral/Skeptical ---
    {
        label: "unsure",
        type: "Neutral/Skeptical",
        emoji: ":/",
        keywords: [":-/", ":\\", ":-\\", "skeptical", "unsure", "annoyed", "uneasy"]
    },
    {
        label: "Neutral",
        type: "Neutral/Skeptical",
        emoji: ":|",
        keywords: [":-|", "straight face", "indifferent", "no expression"]
    },
    {
        label: "Shock",
        type: "Neutral/Skeptical",
        emoji: ":O",
        keywords: [":-O", ":o", "shock", "surprise", "yell"]
    },

    // --- Negative/Sad ---
    {
        label: "Frown",
        type: "Negative/Sad",
        emoji: ":(",
        keywords: [":-(", "=(", "sad", "frown", "unhappy"]
    },
    {
        label: "Crying",
        type: "Negative/Sad",
        emoji: ":'(",
        keywords: [":'-(", "cry", "tear", "sobbing"]
    },
    {
        label: "Angry",
        type: "Negative/Sad",
        emoji: ">:(",
        keywords: [">:-(", "mad", "angry", "furious"]
    },

    // --- Other / Special ---
    {
        label: "Shrug",
        type: "Others",
        emoji: "¯\\_(ツ)_/¯",
        keywords: ["shrugging", "i don't know", "whatever", "don't care"]
    },
    {
        label: "Look of Disapproval",
        type: "Others",
        emoji: "ಠ_ಠ",
        keywords: ["disapproval", "annoyed", "side eye", "stare"]
    },
    {
        label: "Table Flip",
        type: "Others",
        emoji: "(╯°□°）╯︵ ┻━┻",
        keywords: ["table flip", "rage", "frustration", "anger"]
    }
];

export const graphicEmojiArray: Emojies[] = [
    // --- Faces ---
    {
        label: "Grin",
        type: "Faces",
        emoji: "😀", 
        keywords: ["happy", "smile", "joy", "grin", "face"]
    },
    {
        label: "Smile",
        type: "Faces",
        emoji: "😊",
        keywords: ["bliss", "pleased", "happy", "cute", "smiling eyes"]
    },
    {
        label: "joy",
        type: "Faces",
        emoji: "😂",
        keywords: ["laughing", "crying", "joy", "lol", "funny"]
    },
    {
        label: "Wink",
        type: "Faces",
        emoji: "😉",
        keywords: ["playful", "flirtatious", "sarcasm", "wink"]
    },
    {
        label: ":3",
        type: "Faces",
        emoji: "😗",
        keywords: ["kiss", "smooch", "love", "pucker"]
    },
    {
        label: "Think",
        type: "Faces",
        emoji: "🤔",
        keywords: ["thinking", "pondering", "doubt", "consideration"]
    },
    {
        label: "Rolling Eyes",
        type: "Faces",
        emoji: "🙄",
        keywords: ["annoyance", "disdain", "sarcasm", "boredom", "eye roll"]
    },
    {
        label: "Neutral",
        type: "Faces",
        emoji: "😐",
        keywords: ["indifferent", "straight face", "unimpressed", "neutral"]
    },
    {
        label: "blank face",
        type: "Faces",
        emoji: "😑",
        keywords: ["blank", "flat", "apathetic", "no expression"]
    },
    {
        label: "sad",
        type: "Faces",
        emoji: "😞",
        keywords: ["sad", "unhappy", "dejected", "disappointment"]
    },
    {
        label: "tear",
        type: "Faces",
        emoji: "😢",
        keywords: ["sad", "tear", "unhappy", "crying", "sob"]
    },
    {
        label: "angry",
        type: "Faces",
        emoji: "😡",
        keywords: ["angry", "mad", "furious", "pout", "rage"]
    },
    {
        label: "shock",
        type: "Faces",
        emoji: "😲",
        keywords: ["shock", "surprise", "amazement", "gasp"]
    },
    {
        label: "Zipped Mouth",
        type: "Faces",
        emoji: "🤐",
        keywords: ["silent", "secret", "mute", "no comment"]
    },
    {
        label: "Sleep",
        type: "Faces",
        emoji: "😴",
        keywords: ["sleep", "tired", "zzz", "bedtime"]
    },
    {
        label: "joyful",
        type: "Faces",
        emoji: "😁", 
        keywords: ["joyful", "beaming", "happy", "big grin"]
    },
    {
        label: "Sweat",
        type: "Faces",
        emoji: "😅", 
        keywords: ["relief", "nervous", "awkward", "sweat", "phew"]
    },
    {
        label: "Halo",
        type: "Faces",
        emoji: "😇", 
        keywords: ["angel", "innocent", "pure", "good", "halo"]
    },
    {
        label: "down",
        type: "Faces",
        emoji: "😔",
        keywords: ["sad", "thoughtful", "pensive", "melancholy", "down"]
    },
    {
        label: "Confused",
        type: "Faces",
        emoji: "😕",
        keywords: ["confused", "puzzled", "uncertain", "huh"]
    },
    {
        label: "Weary",
        type: "Faces",
        emoji: "😩",
        keywords: ["tired", "weary", "frustrated", "distressed", "ugh"]
    },
    {
        label: "pain",
        type: "Faces",
        emoji: "😫",
        keywords: ["struggle", "pain", "determined", "perseverance"]
    },
    {
        label: "Fear",
        type: "Faces",
        emoji: "😱",
        keywords: ["horror", "fear", "scared", "shock", "scream"]
    },
    {
        label: "Hushed",
        type: "Faces",
        emoji: "🤫",
        keywords: ["quiet", "shocked", "surprised", "hush", "whisper"]
    },
    {
        label: "Hot",
        type: "Faces",
        emoji: "🥵",
        keywords: ["hot", "sweaty", "heatwave", "fever", "overheated"]
    },
    {
        label: "Cold",
        type: "Faces",
        emoji: "🥶",
        keywords: ["cold", "freezing", "ice", "shivering"]
    },
    {
        label: "Woozy",
        type: "Faces",
        emoji: "🥴",
        keywords: ["dizzy", "drunk", "woozy", "sick", "disoriented"]
    },
    {
        label: "oops",
        type: "Faces",
        emoji: "🤭",
        keywords: ["giggle", "oops", "surprise", "chuckle", "covering mouth"]
    },
    {
        label: "cowboy",
        type: "Faces",
        emoji: "🤠",
        keywords: ["cowboy", "western", "yeehaw", "rodeo"]
    },
    {
        label: "party",
        type: "Faces",
        emoji: "🥳",
        keywords: ["party", "celebration", "birthday", "fun"]
    }
];