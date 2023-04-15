import { useState, FC } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Checkbox, Modal, Typography } from '@mui/material';
import { FavoriteBorder, Favorite } from '@mui/icons-material';
import { v4 } from 'uuid';
import { format, parseISO } from 'date-fns';

import { IPostItemProps} from '../models/models';

const PostItem: FC<IPostItemProps> = ({
  article
}) => {
  const [likesCount, setLikesCount] = useState(article.favoritesCount);
  const [openModal, setOpenModal] = useState(false);
  // const onDelete = () => {};
  return (
    <div className="posts_item">
      <div className="posts_item_content">
        <span className="posts_item_content_header">
          <Link className="posts_item_content_title" to={`/${article.slug}`}>
            {article.title}
          </Link>
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            color="warning"
          />
          <span>{likesCount}</span>
          <ul className="posts_item_content_tags">
            {article.tagList &&
              article.tagList.map((tag) => {
                if (tag.trim()) {
                  return (
                    <li key={v4()}>
                      <span className="posts_item_content_tag">{tag}</span>
                    </li>
                  );
                }
              })}
          </ul>
          <p className="posts_item_content_desc">{article.description}</p>
        </span>
      </div>
      <div>
        <div className="posts_item_data">
          <div className="posts_item_data_autor">
            <span className="posts_item_data_autor_name">
              {article.author.username}
            </span>
            <span className="posts_item_data_autor_date">
              {format(parseISO(article.updatedAt), 'MMMM d, yyyy')}
            </span>
          </div>
          { article.author.username && (
            <div>
              <Button
                variant="outlined"
                color="error"
                onClick={() => setOpenModal(true)}
              >
                Delete
              </Button>
              <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                aria-describedby="modal-description"
              >
                <Box className="modal">
                  <Typography id="modal-description">
                    Are you sure to delete this article?
                  </Typography>
                  <Button
                    variant="outlined"
                    onClick={() => setOpenModal(false)}
                  >
                    No
                  </Button>
                  <Button
                    variant="contained"
                    /*onClick={/*onDelete}*/
                    style={{ marginLeft: '10px' }}
                  >
                    Yes!
                  </Button>
                </Box>
              </Modal>
              <Button variant="outlined" color="success">
                <Link to={`/${article.slug}/edit`}>Edit</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostItem;
