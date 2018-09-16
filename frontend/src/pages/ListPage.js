import React, { Component } from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';

class ListPage extends Component {
    render() {
        return (
            <PageTemplate>
                <ListWrapper>
                    리스트
                </ListWrapper>
            </PageTemplate>
        );
    }
}

export default ListPage;