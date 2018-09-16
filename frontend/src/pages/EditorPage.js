import React from 'react';
import EditorTemplate from 'components/editor/EditorTemplate';
import EditorHeader from 'components/editor/EditorHeader';
import EditorPane from 'components/editor/EditorPane';

const EditorPage = () => {
    return (
        <EditorTemplate
          header={<EditorHeader />}
          preview="프리뷰"
          editor={<EditorPane />}
        />
    );
};

export default EditorPage;