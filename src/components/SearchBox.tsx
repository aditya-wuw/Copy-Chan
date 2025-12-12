import { BiSearch } from "react-icons/bi";
import { Emojies } from "../types/app.types";
import { Dispatch, SetStateAction, useState } from "react";

interface props {
  Searchdata: Emojies[];
  SetFiltered: Dispatch<SetStateAction<Emojies[]>>;
}

const SearchBox = ({ Searchdata, SetFiltered }: props) => {
  const [SearchTerms, SetSearchTerms] = useState<string>("");

  function handlesearch(SearchTerms: string) {
    const terms = SearchTerms.toLowerCase().trim();
    if (!terms) return SetFiltered(Searchdata);
    const f = Searchdata.filter((i) => {
      const EmojiMatch = i.emoji.trim().includes(terms);
      const LabelMatch = i.label.trim().includes(terms);
      const KeywordsMatch = i.keywords.some((k) => k.trim().includes(terms));
      return EmojiMatch || LabelMatch || KeywordsMatch;
    });

    SetFiltered(f);
  }

  return (
    <div>
      <div className="flex justify-between gap-3">
        <input
          placeholder="search"
          type="text"
          onChange={(e) => {
            SetSearchTerms(e.target.value);
            handlesearch(e.target.value);
          }}
          onKeyDown={(e) => e.key === "Enter" && handlesearch(SearchTerms)}
          className="outline-0 border-b dark:bg-blue-600/20 bg-blue-400/20 p-1 pl-2 w-full"
        />
        <button
          className="p-3 justify-center items-center flex bg dark:bg-blue-600/20 bg-blue-400/20 rounded-md"
          onClick={() => handlesearch(SearchTerms)}
        >
          <BiSearch className="hover:scale-115" />
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
