import React from "react";

import debounce from "lodash.debounce";

import styles from "./Search.module.scss";

import { setSearch } from "../../store/slices/filterSlice";
import { useAppDispatch } from "../../store/store";

const Search: React.FC = () => {
  const [text, setText] = React.useState("");
  const dispatch = useAppDispatch();

  const debounceInput = React.useCallback(
    debounce((str: string) => dispatch(setSearch(str)), 350),
    []
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    debounceInput(event.target.value);
  };

  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickCLear = () => {
    setText("");
    dispatch(setSearch(""));
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={styles.root}>
      <svg
        className={styles.search}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
          stroke="#E4E4E4"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <input
        ref={inputRef}
        value={text}
        onChange={(event) => onChangeInput(event)}
        className={styles.input}
        placeholder="Пошук..."
      />
      {text && (
        <svg
          className={styles.close}
          onClick={() => onClickCLear()}
          height="25"
          viewBox="0 0 48 48"
          width="25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z" />
          <path d="M0 0h48v48H0z" fill="none" />
        </svg>
      )}
    </div>
  );
};

export default Search;
