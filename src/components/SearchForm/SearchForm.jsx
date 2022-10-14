import { useState } from "react";
import { Component } from "react";

import { FiSearch } from "react-icons/fi";
import { FormBtn, InputSearch, SearchFormStyled } from "./SearchForm.styled";

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleInput = (e) => {
    setQuery(e.currentTarget.value.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        onChange={handleInput}
        placeholder="What do you want to write?"
        value={query}
        name="search"
        required
        autoFocus
      />
    </SearchFormStyled>
  );
};

// export class SearchForm extends Component {
//   state = {
//     query: "",
//   };

// handleInput = (e) => {
//   this.setState({ query: e.currentTarget.value.trim() });
// };

// handleSubmit = (e) => {
//   e.preventDefault();
//   this.props.onSubmit(this.state.query);
// };

//   render() {
//     return (
//       <SearchFormStyled onSubmit={this.handleSubmit}>
//         <FormBtn type="submit">
//           <FiSearch size="16px" />
//         </FormBtn>
//         <InputSearch
//           onChange={this.handleInput}
//           placeholder="What do you want to write?"
//           value={this.value}
//           name="search"
//           required
//           autoFocus
//         />
//       </SearchFormStyled>
//     );
//   }
// }
