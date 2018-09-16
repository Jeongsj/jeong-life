import React from 'react';
import EditorTemplate from 'components/editor/EditorTemplate';
import EditorHeader from 'components/editor/EditorHeader';

const EditorPage = () => {
    return (
        <EditorTemplate
          header={<EditorHeader />}
          preview="프리뷰"
          editor="에디터"
        />
    );
};

export default EditorPage;