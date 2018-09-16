import React, { Component } from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
import PostList from 'components/list/PostList';

class ListPage extends Component {
    render() {
        return (
            <PageTemplate>
                <ListWrapper>
                    <PostList />
                </ListWrapper>
            </PageTemplate>
        );
    }
}

export default ListPage;