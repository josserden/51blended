import React from "react";
import PropTypes from "prop-types";
import { Comment } from "../Comment/Comment";
import { Grid } from "../Grid/Grid";
import { comments } from "../../helpers/comments";
import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/filterSlice.js";

const getFilteredComments = ({ filter }) => {
  const normalizedFilter = filter.toLowerCase();
  return comments.filter((comment) =>
    comment.content.toLowerCase().includes(normalizedFilter)
  );
};

export const Comments = () => {
  const filter = useSelector(selectFilter);
  const filteredContacts = getFilteredComments(filter);
  return (
    <Grid>
      {filteredContacts.length > 0 &&
        filteredContacts.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
    </Grid>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
