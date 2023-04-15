import { useEffect, useState } from 'react';
import { LinearProgress, Pagination } from '@mui/material';

import {useAppDispatch, useAppSelector} from '../Hooks';
import PostItem from '../PostItem/PostItem';
import { getPosts } from '../../store/postSlice';
import {IResponsePosts} from '../models/models';

function MainPage() {
  const dispatch = useAppDispatch();
  // const posts = useAppSelector((state) => state.post.posts);
  const data = useAppSelector((state) => state.post.dataPosts);
  const status = useAppSelector((state) => state.post.status);
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(getPosts(page));
  }, [page, dispatch]);

  return (

    data && (
      <div>
        {status === 'loading' && <LinearProgress />}
        <ul className="posts">
          {data &&
            data?.articles?.map((post) => {
              return (
                <li key={post.slug}>
                  <PostItem {...post} />
                </li>
              );
            })}
        </ul>
        <Pagination
          count={data.articlesCount ? Math.ceil(data.articlesCount / 5) : 0}
          style={{ paddingBottom: 20 }}
          page={page}
          color="primary"
          shape="rounded"
          onChange={(e, numberOfChange) => setPage(numberOfChange)}
        />
      </div>
    )
  );
}

export default MainPage;
