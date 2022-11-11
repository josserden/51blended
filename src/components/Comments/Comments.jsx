import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';
import { Grid } from '../Grid/Grid';
import { useSelector } from 'react-redux';
import { selectFilter } from '../../redux/filterSlice.js';
import { useGetCommentsQuery } from '../../redux/commentApi';

export const Comments = () => {
  const { data: comments = [], isSuccess } = useGetCommentsQuery();
  const filter = useSelector(selectFilter);

  const getFilteredComments = () => {
    const normalizedFilter = filter.toLowerCase();

    return comments.filter(({ content }) =>
      content.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredComments();

  return (
    <Grid>
      {isSuccess &&
        filteredContacts.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
    </Grid>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
